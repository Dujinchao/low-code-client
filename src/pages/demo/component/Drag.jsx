import React from "react";
import { useDrag } from "react-dnd";

const Drag = ({ name, top, left, index }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "test",
    end(item, monitor) {
      console.log(item);
      if (monitor.didDrop()) {
        const droptarget = monitor.getDropResult();
        const top = document.querySelectorAll("#drag")[index].offsetTop;
        const left = document.querySelectorAll("#drag")[index].offsetLeft;
        document.querySelectorAll("#drag")[index].style.top =
          top + droptarget.top + "px";
        document.querySelectorAll("#drag")[index].style.left =
          left + droptarget.left + "px";
      } else {
        console.log(monitor.getDropResult());
      }
    },
  });

  return (
    <div
      id="drag"
      index={index}
      ref={drag}
      style={{
        position: "absolute",
        top: `${top}`,
        left: `${left}`,
        width: "70px",
        height: "40px",
        border: "1px solid black",
      }}
    >
      {name}
    </div>
  );
};

export default Drag;
