"use client";

import React, { useMemo } from "react";
import { Formik, Field, Form } from "formik";
// import { useNavigate } from "react-router-dom";
import { useOnboardingForm } from "@/contexts/FormContext";
import InputField from "@/components/inputs/InputField";
import { useRouter } from "next/navigation";
import GuestLayout from "@/layout/GuestLayout";
import Button from "@/components/buttons/Button";
import Heading from "@/components/elements/Heading";
import { useRegisterMutation } from "@/features/rtk/app/mainApi";
import { statusHandler } from "@/utils/utils";
import { registerValidation } from "@/validators/registration/registrationValidator";
import { useDispatch } from "react-redux";
import { LoginUser } from "@/features/slices/userReducer";
import Cookies from "js-cookie";

function RegisterContainer() {
  const { formData, setFormData } = useOnboardingForm();
  const [register, { isLoading: isRegistrationLoading }] =
    useRegisterMutation();
  //   const nav = useNavigate();
  const dispatch = useDispatch();
  const router = useRouter();
  const initialValues = useMemo(() => {
    return {
      first_name: "",
      last_name: "",
      email: "",
      role: "",
      password: "",
    };
  }, []);
  const handleSubmit = async (data: typeof initialValues) => {
    console.log("values", data);

    const payload = {
      ...data,
      username: data.first_name + " " + data.last_name,
      first_name: undefined,
      last_name: undefined,
    };
    const response = await register(payload);
    if (statusHandler(response).isSuccess()) {
      dispatch(LoginUser(response?.data?.data));
      Cookies.set("token", response?.data?.token);

      router.push("/onboarding/title");
    }
    console.log("response", response);
  };

  return (
    <div className="flex justify-center items-center flex-col px-32 py-6">
      <div>
        <Heading size="3xl">Complete your free account setup</Heading>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={registerValidation}
        onSubmit={handleSubmit}
      >
        {({ handleChange, values, errors }) => {
          console.log("errors", errors);

          return (
            <Form>
              <div className="flex gap-4 ">
                <div>
                  <InputField
                    id="first_name"
                    name="first_name"
                    // onChange={handleChange}
                    // value={values.first_name}
                    label="First Name"
                    error={errors?.first_name}
                  />
                </div>
                <div>
                  <InputField
                    id="last_name"
                    name="last_name"
                    // onChange={handleChange}
                    // value={values.last_name}
                    label="Last Name"
                    error={errors?.last_name}
                  />
                </div>
              </div>
              <div>
                <InputField
                  id="email"
                  name="email"
                  // onChange={handleChange}
                  // value={values.email}
                  label="email"
                  error={errors?.email}
                />
              </div>
              <div>
                <InputField
                  id="password"
                  type="password"
                  name="password"
                  // onChange={handleChange}
                  // value={values.password}
                  label="password"
                  error={errors?.password}
                />
              </div>
              <div>
                <label>
                  <Field type="radio" name="role" value="freelancer" required />
                  Freelancer
                </label>

                <label>
                  <Field type="radio" name="role" value="client" required />
                  Client
                </label>
              </div>

              <Button type="submit" isLoading={true}>
                Submit
              </Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default RegisterContainer;
