import { SegmentedControl } from "@mantine/core";
// import classes from "./GradientSegmentedControl.module.css";

export function GradientSegmentedControl({ tabs, ...props }) {
  const tabLinks = ["All", "Drafts"];
  return (
    <SegmentedControl
      // onChange={(e) => {
      //   console.log("eventtt", e);
      // }}
      radius="xl"
      size="md"
      data={tabs}
      className={
        "root bg-root-gradient shadow-root border-root indicator bg-indicator-gradient control control-hidden label label-white-hover"
      }
      {...props}
    />
  );
}
