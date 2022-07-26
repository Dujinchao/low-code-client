import React from "react";
import { useDrop } from "react-dnd";
import MyButton from "../../../../components/MyButton";
import MyText from "../../../../components/MyText";
import { useSelector, useDispatch } from "react-redux";
import { addButton, increateIndex, setButton } from "../../model";
import { COMPONENT_TYPE } from "../../../../utils/typeMapData";
/**
参考api 
accept：必填。 （对应 drag item.type ）
options： 可选的。一个普通的对象。
drop(item, monitor)： 可选的。当兼容项目放在目标上时调用。
hover(item, monitor)： 可选的。将项目悬停在组件上时调用。
canDrop(item, monitor)： 可选的。使用它来指定放置目标是否能够接受该物品。如果要始终允许它，则只需忽略此方法。
collect： 可选的。收集功能。它应该返回道具的简单对象以返回注入到组件中。它接收两个参数，monitor和props
*/

const Workbanch = () => {
  const { buttonList } = useSelector((state) => state.workbanchNode);
  const { textList } = useSelector((state) => state.workbanchNode);
  const [, drop] = useDrop({
    accept: ["button", "text"],
    drop: (item, monitor) => {
      console.log(monitor.getItemType());
      return {
        top: monitor.getClientOffset().y - 10,
        left: monitor.getClientOffset().x - 10 - 300,
      };
    },
  });
  return (
    <div className="workbanch-container" id="workbanch-container" ref={drop}>
      {buttonList.map((item, index) => (
        <MyButton
          key={index}
          value={item.value + item.index}
          index={index}
          id={item.id}
          addStyle={item.style}
        />
      ))}
      {textList.map((item, index) => (
        <MyText
          key={index}
          value={item.value}
          index={index}
          id={item.id}
          addStyle={item.style}
        />
      ))}
      {/* {elementList.map((item, index) => {
        switch (item.type) {
          case COMPONENT_TYPE.TEXT:
            return <MyText />;
          case COMPONENT_TYPE.BUTTON:
            return (
              <MyButton
                key={index}
                value={item.value + item.index}
                index={index}
                id={item.id}
                addStyle={item.style}
              />
            );
          default:
            break;
        }
      })} */}
    </div>
  );
};

export default Workbanch;
