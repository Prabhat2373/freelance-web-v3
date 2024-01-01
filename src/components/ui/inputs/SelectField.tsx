import Select, { MenuProps } from "react-select"

import React from "react"
interface SelectFieldProps extends MenuProps {}
const SelectField = (props: SelectFieldProps) => {
  return (
    <div>
      <Select {...props} />
    </div>
  )
}

export default SelectField
