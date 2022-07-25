import React, { createElement } from "react";
import { useDrag } from "react-dnd";
import { useDispatch } from "react-redux";
import { addButton } from "../pages/home/model";
const MyButton = ({ value, addStyle, index }) => {
  const dispatch = useDispatch();
  let style = {};
  const [{ isDragging }, drag] = useDrag({
    type: "button",
    end(item, monitor) {
      console.log(monitor.getDropResult());
      style.top = monitor.getDropResult().top;
      style.left = monitor.getDropResult().left;
      if (monitor.didDrop()) {
        const droptarget = monitor.getDropResult();
        const top = document.querySelectorAll("#_button")[index].offsetTop;
        const left = document.querySelectorAll("#_button")[index].offsetLeft;
        dispatch(
          addButton({
            value,
            index,
            style: {
              top: top + droptarget.top + "px",
              left: left + droptarget.left - 300 + "px",
            },
          })
        );
        // const workbanch = document.getElementById("workbanch-container");
        // const nowDom = document.querySelectorAll("#_button")[index];
        // const newDom = nowDom.cloneNode(true);
        // newDom.setAttribute("index", index + 1);
        // workbanch.appendChild(newDom);
        // newDom.style.top = top + droptarget.top + "px";
        // newDom.style.left = left + droptarget.left + "px";
        // document.querySelectorAll("#_button")[index].style.top =
        //   top + droptarget.top + "px";
        // document.querySelectorAll("#_button")[index].style.left =
        //   left + droptarget.left + "px";
      } else {
        console.log("-------");
        console.log(monitor.getDropResult());
      }
    },
  });
  return (
    <div
      id="_button"
      index={index}
      ref={drag}
      style={{
        position: "absolute",
        width: "70px",
        height: "40px",
        border: "1px solid black",
        ...addStyle,
      }}
    >
      {value}
    </div>
  );
};

export default MyButton;
