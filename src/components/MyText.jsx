import React from "react";
import { useDrag } from "react-dnd";
import { COMPONENT_TYPE } from "../utils/typeMapData";
import { useDispatch, useSelector } from "react-redux";
import { addElement, setElement, increateIndex } from "../pages/home/model";

const MyText = ({ value, addStyle, index }) => {
  const dispatch = useDispatch();

  //- 拿到文本组件的索引
  const elementIndex = useSelector(
    (state) => state.workbanchNode.textListIndex
  );
  const [, drag] = useDrag(() => ({
    type: COMPONENT_TYPE.TEXT, //组件类型
    end(item, monitor) {
      if (monitor.didDrop()) {
        //- 获取从编辑区传递过来的坐标
        const droptarget = monitor.getDropResult();
        //- 判断是否是组件区的组件
        if (index === 10000) {
          //添加组件
          dispatch(
            addElement({
              type: "textList",
              data: {
                value: value,
                index: elementIndex + 1,
                style: {
                  top: droptarget.top + "px",
                  left: droptarget.left + "px",
                },
              },
            })
          );
          //索引值+1
          dispatch(increateIndex("textListIndex"));
        } else {
          //- 不是组件区的列表，说明只进行拖拽操作
          dispatch(
            setElement({
              type: "textList",
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
  }));
  return (
    <div
      className="my_text"
      index={index}
      ref={drag}
      style={{
        position: index === 10000 ? "relative" : "absolute",
        ...addStyle,
      }}
    >
      {value}
    </div>
  );
};

export default MyText;
