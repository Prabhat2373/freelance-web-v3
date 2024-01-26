import { useGetPaymentTypesQuery } from "@/features/rtk/app/jobApi";
import { Input, Radio, Text } from "@mantine/core";
import { useFormikContext } from "formik";
import { useState } from "react";
import Money from "../ui/payment/Money";

const JobBudgetContainer = () => {
  const { data: paymentTypes } = useGetPaymentTypesQuery("");

  const { setFieldValue, values } = useFormikContext();
  const [paymentType, setPaymentType] = useState(paymentTypes?.[0]?.type);

  return (
    <div>
      <Text>Tell us about your budget?</Text>
      <div className="flex gap-2 py-3">
        {paymentTypes?.map((payment_type) => {
          return (
            <Radio
              key={payment_type?._id}
              checked={values?.payment_mode === payment_type?.type}
              variant="outline"
              onChange={(e) => {
                setFieldValue("payment_type_id", payment_type?._id);
                setFieldValue("payment_mode", e.target?.name);
                setPaymentType(e.target?.name);
              }}
              name={payment_type?.type}
              label={payment_type?.type}
            />
          );
        })}
      </div>
      <div className="py-2">
        <Input.Wrapper className="flex gap-2 w-1/2 items-center">
          <Money />
          <Input
            name="payment_amount"
            placeholder="Enter Amount"
            type="number"
          />
          <span>{paymentType === "hourly" ? "/per Hour" : ""}</span>
        </Input.Wrapper>
      </div>
    </div>
  );
};

export default JobBudgetContainer;
