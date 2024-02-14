"use client";
import RangeSlider from "@/components/inputs/sliders/RangeSlider";
import Select from "@/components/ui/inputs/Select";
import { useGetPaymentTypesQuery } from "@/features/rtk/app/jobApi";
import { Checkbox, Container, Radio, Text } from "@mantine/core";
import React from "react";

const JobsFilterContainer = () => {
  const { data: paymentTypes } = useGetPaymentTypesQuery("");
  console.log("paymentTypes", paymentTypes);

  return (
    <div className="border border-border-primary">
      <div className="flex w-full justify-between py-3 border-b border-border-primary">
        <div>
          <Text fw={"bold"}>Filters</Text>
        </div>

        <Text fw={"bold"} c={"red"} className="cursor-pointer">
          Clear All
        </Text>
      </div>
      <Container>
        <div className="border-b border-border-primary">
          <Select
            label="Date Posted"
            placeholder="Select Date Posted"
            options={[
              { label: "Anytime", value: "anytime" },
              { label: "7 Days Ago", value: "7_days_ago" },
              { label: "today", value: "today" },
            ]}
          />
        </div>
        <div className="border-b border-border-primary">
          <div>
            <Text>Project Type</Text>
          </div>
          <div>
            <div className="flex gap-4">
              {paymentTypes?.map((payment) => {
                return (
                  <Checkbox
                    label={payment?.type}
                    name="payment_type"
                    id={payment?._id}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="border-b border-border-primary">
          <Text>Payment Range</Text>
          <div>
            <div className="grid grid-cols-2 gap-3">
              <Radio
                variant="outline"
                onChange={() => {}}
                label="Under $1000"
              />
              <Radio
                variant="outline"
                onChange={() => {}}
                label="$1000 to $2500"
              />
              <Radio
                variant="outline"
                onChange={() => {}}
                label="$2500 to $5000"
              />
              <Radio variant="outline" onChange={() => {}} label="Custom" />
            </div>
          </div>
        </div>
        <RangeSlider />
      </Container>
    </div>
  );
};

export default JobsFilterContainer;
