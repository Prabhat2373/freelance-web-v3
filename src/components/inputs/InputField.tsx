import { capitalizeFirst } from "@/utils/utils";
import { ErrorMessage, Field } from "formik";
import React from "react";
// import { Input } from "../ui/input";
import { Label } from "../ui/label";
import InputError from "./InputError";
import Asterisk from "./ui/Asterisk";
import { Input } from "@mantine/core";

interface InputFieldProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  icon?: any;
  label?: string;
  error?: string;
  type?: string;
  withAsterisk?: boolean;
}

const InputField = (props: InputFieldProps) => {
  const { withAsterisk = true } = props;
  return (
    <div>
      {props.label ? (
        <Label htmlFor={props.id}>
          {capitalizeFirst(props.label)} {withAsterisk ? <Asterisk /> : null}
        </Label>
      ) : null}
      <Field
        {...props}
        as={Input}
        required={false}
        placeholder={`${props.placeholder ?? `Enter ${props.label}`}`}
      />
      <ErrorMessage
        name={props.name}
        className={"text-red-400"}
        component={InputError}
      />
    </div>
  );
};

export default InputField;
