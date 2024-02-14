import { RangeSlider as Slider, rem } from "@mantine/core";
import { IconPoint, IconGripVertical } from "@tabler/icons-react";
import classes from "./rangeSlider.module.css";

const point = (
  <IconPoint
    style={{ marginTop: rem(6), width: rem(10), height: rem(10) }}
    stroke={1.5}
  />
);

function RangeSlider() {
  return (
    <Slider
      mt="xl"
      mb="xl"
      classNames={classes}
      //   className="w-[16px] h-[28px] bg-white text-gray-500 border border-gray-300 flex"
      defaultValue={[30, 60]}
      thumbChildren={
        <IconGripVertical
          style={{ width: rem(20), height: rem(20) }}
          stroke={1.5}
        />
      }
      marks={[
        { value: 0, label: "0" },
        { value: 12.5, label: point },
        { value: 25, label: "25" },
        { value: 37.5, label: point },
        { value: 50, label: "50" },
        { value: 62.5, label: point },
        { value: 75, label: "75" },
        { value: 87.5, label: point },
        { value: 100, label: "100" },
      ]}
    />
  );
}

export default RangeSlider;
