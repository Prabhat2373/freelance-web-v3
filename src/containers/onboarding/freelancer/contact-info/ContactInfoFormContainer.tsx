"use client";
import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
// import StepLayout from "../../layout/freelancer/StepLayout";
// import { useOnboardingForm } from "../../context/FormContext";
import Button from "@/components/buttons/Button";
import InputField from "@/components/inputs/InputField";
import { FiEdit2, FiMail, FiUser } from "react-icons/fi";
import { useOnboardingForm } from "@/contexts/FormContext";
import { useRegisterMutation } from "@/features/rtk/app/mainApi";
// import { useRegisterMutation } from "@/features/services/app/mainApi";

const ContactInfoFormContainer = () => {
  const { formData, setFormData, activeStepIndex, setActiveStepIndex } =
    useOnboardingForm();
  // console.log(
  //   "formData",
  //   formData,
  //   formData?.user_account?.username?.split(" ")
  // );

  const [register, { data: registerResponse }] = useRegisterMutation();
  const initialValues = {
    firstName: formData?.user_account?.username?.split(" ")[0] || "",
    lastName: formData?.user_account?.username?.split(" ")[1] || "",
    email: formData?.user_account?.email || "",
    address: formData.address || "",
    zip: formData.zip || "",
    country: formData.country || "",
    city: formData.city || "",
    phone: formData.phone || "",
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    address: Yup.string().required("Address is required"),
    zip: Yup.string().required("ZIP code is required"),
    country: Yup.string().required("Country is required"),
    city: Yup.string().required("City is required"),
    phone: Yup.string().required("Phone number is required"),
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [avatar, setAvatar] = useState<File>();
  const handleSubmit = (values: any) => {
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      address: values.address,
      //   zip: values.zip,
      //   country: values.country,
      //   city: values.city,
      phone: values.phone,
    }));
    // setActiveStepIndex(activeStepIndex + 1);
    const fd = new FormData();
    Object.keys(formData).forEach((key) => {
      fd.append(key, formData[key]);
    });
    fd.append("username", "test-212");
    fd.append("file", avatar);

    register(fd).then((res) => console.log("response", res));
    // Do something with the form values
    console.log("Form values:", values);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAvatar(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      enableReinitialize
      onSubmit={handleSubmit}
    >
      {(formik) => {
        console.log("valuessss", formik.values);
        console.log("error", formik.errors);

        return (
          <Form onSubmit={formik.handleSubmit}>
            <div className="flex justify-center items-center py-4">
              <label htmlFor="imageInput" className="cursor-pointer">
                <div className="relative w-20 h-20 overflow-hidden rounded-full border-4 border-white">
                  <img
                    src={imagePreview || "/placeholder-image.png"} // Replace "/placeholder-image.png" with your actual placeholder image
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity">
                    <FiEdit2 size={20} className="text-white" />
                  </div>
                </div>
                <input
                  type="file"
                  id="imageInput"
                  name="imageInput"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <InputField
                  icon={<FiUser className="text-gray-600" />}
                  label="First Name"
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  error={!!formik.errors.firstName && formik.errors.firstName}
                />
              </div>
              <div>
                <InputField
                  icon={<FiUser className="text-gray-600" />}
                  label="Last Name"
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  error={formik.errors.lastName}
                />
              </div>
              <div>
                <InputField
                  icon={<FiMail className="text-gray-600" />}
                  label="Email"
                  type="email"
                  id="email"
                  name="email"
                  required
                  error={formik.errors.email}
                />
              </div>
              <div>
                <InputField
                  icon={<FiMail className="text-gray-600" />}
                  label="Address"
                  type="text"
                  id="address"
                  name="address"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  required
                  error={formik.errors.address}
                />
              </div>
              <div>
                <InputField
                  icon={<FiMail className="text-gray-600" />}
                  label="ZIP Code"
                  type="text"
                  id="zip"
                  name="zip"
                  onChange={formik.handleChange}
                  required
                  error={formik.errors.zip}
                />
              </div>
              <div>
                <InputField
                  icon={<FiMail className="text-gray-600" />}
                  label="Country"
                  type="text"
                  id="country"
                  name="country"
                  onChange={formik.handleChange}
                  required
                  error={formik.errors.country}
                />
              </div>
              <div>
                <InputField
                  icon={<FiMail className="text-gray-600" />}
                  label="City"
                  type="text"
                  id="city"
                  onChange={formik.handleChange}
                  name="city"
                  required
                  error={formik.errors.city}
                />
              </div>
              <div>
                <InputField
                  icon={<FiMail className="text-gray-600" />}
                  label="Phone Number"
                  type="text"
                  id="phone"
                  name="phone"
                  onChange={formik.handleChange}
                  required
                  error={formik.errors.phone}
                />
              </div>
            </div>

            <div className="flex justify-center items-center py-12">
              <Button
                width="60%"
                variant="filled"
                className="flex px-24"
                type="submit"
              >
                Submit
              </Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default ContactInfoFormContainer;

// import React from "react";

// const ContactInfoFormContainer = () => {
//   return <div>ContactInfoFormContainer</div>;
// };

// export default ContactInfoFormContainer;
