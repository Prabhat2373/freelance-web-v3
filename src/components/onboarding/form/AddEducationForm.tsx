import InputField from "@/components/inputs/InputField";
import DatePicker from "@/components/ui/datePicker";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ErrorMessage, Field, useFormikContext } from "formik";
import Select from "react-select";

const AddEducationForm = ({ education, handleDeleteForm, index }) => {
  const formik = useFormikContext();

  return (
    <div className="flex flex-col gap-3 mb-4 mt-4">
      <Label>Institution</Label>
      <Field
        as={Input}
        name={`education[${index}].institution`}
        placeholder="Enter Institution"
        label="Institution"
      />
      <ErrorMessage
        name={`education[${index}].institution`}
        component={"div"}
        className="text-red-500"
      />

      <div className="grid grid-cols-2 gap-3">
        <div>
          <Label>Degree</Label>
          <Field
            as={Input}
            name={`education[${index}].degree`}
            placeholder="Enter Degree"
            label="Degree"
          />
          <ErrorMessage
            name={`education[${index}].degree`}
            component={"div"}
            className="text-red-500"
          />
        </div>
        <div>
          <label>Field of Study</label>
          <Field
            as={Input}
            name={`education[${index}].fieldOfStudy`}
            placeholder="Enter Field of Study"
            label="Field of Study"
          />
          <ErrorMessage
            name={`education[${index}].fieldOfStudy`}
            component={"div"}
            className="text-red-500"
          />
        </div>
      </div>

      <div className="flex w-full gap-3">
        <div className="flex flex-col w-full">
          <label>Start Year</label>
          <DatePicker
            onChange={(date) =>
              formik.setFieldValue(`education[${index}].startYear`, date)
            }
            value={
              formik.values?.education?.[index]?.startYear &&
              new Date(formik.values?.education?.[index]?.startYear)
            }
          />
          <ErrorMessage
            name={`education[${index}].startYear`}
            component={"div"}
            className="text-red-500"
          />
        </div>

        <div className="flex flex-col w-full">
          <label>End Year</label>
          <DatePicker
            onChange={(date) =>
              formik.setFieldValue(`education[${index}].endYear`, date)
            }
            value={
              formik.values?.education?.[index]?.endYear &&
              new Date(formik.values?.education?.[index]?.endYear)
            }
          />
          <ErrorMessage
            name={`education[${index}].endYear`}
            component={"div"}
            className="text-red-500"
          />
        </div>
      </div>

      <div>
        <label>Description</label>
        <Field
          as={Textarea}
          name={`education[${index}].description`}
          className="w-full p-2 border rounded-lg"
        />
        <ErrorMessage
          name={`education[${index}].description`}
          component={"div"}
          className="text-red-500"
        />
      </div>

      {index >= 1 && (
        <button
          type="button"
          onClick={() => handleDeleteForm(index)}
          className="mt-2 bg-red-500 text-white py-1 px-2 rounded-lg"
        >
          Delete Education
        </button>
      )}
    </div>
  );
};

export default AddEducationForm;
