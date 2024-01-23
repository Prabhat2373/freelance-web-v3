import { MultiSelect } from "@mantine/core";
import React, { ComponentProps } from "react";

interface ISelectProps extends ComponentProps<"input"> {
  options: string[];
  label?: string;
}

const Select = ({ options, placeholder, label, ...props }: ISelectProps) => {
  return (
    <MultiSelect
      label={label ?? ""}
      //   placeholder=
      data={options ?? []}
      searchable
      {...props}
    />
  );
};

export default Select;
