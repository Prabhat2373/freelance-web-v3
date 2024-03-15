import React from "react";
import Heading from "../elements/Heading";
import { Text } from "@mantine/core";

const GridWrapper = ({ children, title, description }) => {
  return (
    <div className="grid grid-cols-2">
      <div>
        <Heading>{title }</Heading>
        <Text>
          {description}
        </Text>
      </div>
      {children}
    </div>
  );
};

export default GridWrapper;
