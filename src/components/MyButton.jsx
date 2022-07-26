import React from "react";
import { useDrag } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { addButton, increateIndex, setButton } from "../pages/home/model";
import { Button } from "antd";
const MyButton = ({ value, addStyle, index }) => {
  const dispatch = useDispatch();

  //- 拿到按钮组件索引
  const btnIndex = useSelector((state) => state.workbanchNode.buttonListIndex);
  const [, drag] = useDrag({
    type: "button", //组件类型
    end(item, monitor) {
      if (monitor.didDrop()) {
        //- 获取从编辑区传递过来的坐标
        const droptarget = monitor.getDropResult();
        //- 判断是否是组件区的组件
        if (index === 10000) {
          //添加组件
          dispatch(
            addButton({
              value,
              index: btnIndex + 1,
              style: {
                top: droptarget.top + "px",
                left: droptarget.left + "px",
              },
            })
          );
          //索引值+1
          dispatch(increateIndex("buttonListIndex"));
        } else {
          //- 不是组件区的列表，说明只进行拖拽操作
          dispatch(
            setButton({
              index,
              style: {
                top: droptarget.top + "px",
                left: droptarget.left + "px",
              },
            })
          );
        }
      } else {
        console.log(monitor.getDropResult());
      }
    },
  });
  return (
    <Button
      className="my_button"
      index={index}
      ref={drag}
      style={{
        position: index === 10000 ? "relative" : "absolute",
        ...addStyle,
      }}
      onClick={() => {
        if (index === 10000) return;
        console.log("点击了按钮");
      }}
    >
      {value}
    </Button>
  );
};

export default MyButton;
