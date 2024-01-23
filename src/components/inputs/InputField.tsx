import { capitalizeFirst } from "@/utils/utils";
import { ErrorMessage, Field } from "formik";
import React from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import InputError from "./InputError";
import Asterisk from "./ui/Asterisk";

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
        as={Input}
        placeholder={`${props.placeholder ?? `Enter ${props.label}`}`}
        {...props}
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
