import { useGetPaymentTypesQuery } from "@/features/rtk/app/jobApi";
import { Input, Radio, Text } from "@mantine/core";
import { Field, useFormikContext } from "formik";
import { useState } from "react";
import Money from "../ui/payment/Money";
import GridWrapper from "../ui/GridWrapper";

const JobBudgetContainer = () => {
  const { data: paymentTypes } = useGetPaymentTypesQuery("");

  const { setFieldValue, values } = useFormikContext();
  const [paymentType, setPaymentType] = useState(paymentTypes?.[0]?.type);

  return (
    <div>
      <GridWrapper title="Budget" description="Tell us about your budget?">
        <div>
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
              <Field
                as={Input}
                name="payment_amount"
                placeholder="Enter Amount"
                type="number"
              />
              <span>{paymentType === "hourly" ? "/per Hour" : ""}</span>
            </Input.Wrapper>
          </div>
        </div>
      </GridWrapper>
    </div>
  );
};

export default JobBudgetContainer;
