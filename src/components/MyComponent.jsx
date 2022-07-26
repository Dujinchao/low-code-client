import React from "react";
import { useDrag } from "react-dnd";
import { COMPONENT_TYPE } from "../utils/typeMapData";

const MyComponent = ({ value, className, type }) => {
  const [item, drag] = useDrag(() => ({
    type,
  }));
  return (
    <div ref={drag} className={className}>
      {value}
    </div>
  );
};

export default MyComponent;
