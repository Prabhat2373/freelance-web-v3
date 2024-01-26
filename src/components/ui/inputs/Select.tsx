import { MultiSelect, Select as SingleSelect } from "@mantine/core";
import React, { ComponentProps } from "react";

interface ISelectProps extends ComponentProps<"input"> {
  options: string[];
  label?: string;
  isMulti?: boolean;
}

const Select = ({
  options,
  // placeholder,
  label,
  isMulti,
  ...props
}: ISelectProps) => {
  if (!isMulti) {
    return (
      <SingleSelect
        label={label ?? ""}
        //   placeholder=
        data={options ?? []}
        searchable
        {...props}
      />
    );
  }
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
