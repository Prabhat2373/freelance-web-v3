import { useFormikContext } from "formik"
import React, { HTMLAttributes } from "react"
import { useFocusContext } from "react-day-picker"

interface IErrorField extends HTMLAttributes<HTMLInputElement> {
  name: string
}
const ErrorField = ({ name }: IErrorField) => {
  const formik = useFormikContext()
  return (
    <>
      {formik.errors[name] ? (
        <div className="text-red-500">{formik.errors[name]}</div>
      ) : null}
    </>
  )
}

export default ErrorField
