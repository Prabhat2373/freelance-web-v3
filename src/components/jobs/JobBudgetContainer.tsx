import { useGetPaymentTypesQuery } from "@/features/rtk/app/jobApi";
import { Radio, Text } from "@mantine/core";
import { useFormikContext } from "formik";

const JobBudgetContainer = () => {
  const { data: paymentTypes } = useGetPaymentTypesQuery("");

  const { setFieldValue, values } = useFormikContext();

  return (
    <div>
      <Text>Tell us about your budget?</Text>
      <div className="flex gap-2">
        {paymentTypes?.map((payment_type) => {
          return (
            <Radio
              key={payment_type?._id}
              checked={values?.payment_mode === payment_type?.type}
              variant="outline"
              onChange={(e) => {
                setFieldValue("payment_mode", e.target?.name);
              }}
              name={payment_type?.type}
              label={payment_type?.type}
            />
          );
        })}
      </div>
    </div>
  );
};

export default JobBudgetContainer;
