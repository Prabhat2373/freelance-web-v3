"use client";

import { Field, Form, Formik } from "formik";
import { useMemo } from "react";
// import { useNavigate } from "react-router-dom";
import Button from "@/components/buttons/Button";
import Heading from "@/components/elements/Heading";
import InputField from "@/components/inputs/InputField";
import { PasswordStrengthInput } from "@/components/inputs/ui/PasswordStrengthInput";
import { useOnboardingForm } from "@/contexts/FormContext";
import { useRegisterMutation } from "@/features/rtk/app/mainApi";
import { LoginUser } from "@/features/slices/userReducer";
import { statusHandler } from "@/utils/utils";
import { registerValidation } from "@/validators/registration/registrationValidator";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { USER_TYPES } from "@/constants/app.constant";

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

      if (data?.role === USER_TYPES.FREELANCER) {
        router.push("/onboarding/title");
      }
      router.push("/cl");
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
                    placeholder="Enter First Name"
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
                    placeholder="Enter Last Name"
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
                  placeholder="Enter Email"
                />
              </div>
              <div>
                <PasswordStrengthInput name={"password"} />
              </div>
              <h1 className="text-lg font-semibold">{`I'm A:`}</h1>
              <div className="flex gap-4 w-full my-3">
                <label
                  className={`flex gap-2 w-full border  transition-all duration-200 rounded-md text-lg font-medium border-opacity-50 cursor-pointer border-1 p-3 border-gray ${
                    values?.role === "freelancer"
                      ? "bg-pink-50 bg-opacity-50"
                      : ""
                  }`}
                >
                  <Field
                    type="radio"
                    name="role"
                    className="accent-red-500 ml-3"
                    value="freelancer"
                    required
                  />
                  Freelancer
                </label>

                <label
                  className={`flex gap-2 w-full transition-all duration-200 border rounded-md text-lg font-medium border-opacity-50 cursor-pointer border-1 p-3 border-gray ${
                    values?.role === "client" ? "bg-pink-50 bg-opacity-50" : ""
                  }`}
                >
                  <Field
                    type="radio"
                    name="role"
                    className="accent-red-500"
                    value="client"
                    required
                  />
                  Client
                </label>
              </div>

              <Button type="submit" isLoading={isRegistrationLoading}>
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
