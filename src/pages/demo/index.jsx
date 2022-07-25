import React from "react";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import Container from "./component/Container";

const index = () => {
  return (
    <div>
      <DndProvider backend={HTML5Backend}>
        <Container />
      </DndProvider>
    </div>
  );
};

export default index;
