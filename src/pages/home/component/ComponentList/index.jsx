import React from "react";
import { useDrop } from "react-dnd";
import MyButton from "../../../../components/MyButton";
import { useSelector } from "react-redux";
/**
参考api 
accept：必填。 （对应 drag item.type ）
options： 可选的。一个普通的对象。
drop(item, monitor)： 可选的。当兼容项目放在目标上时调用。
hover(item, monitor)： 可选的。将项目悬停在组件上时调用。
canDrop(item, monitor)： 可选的。使用它来指定放置目标是否能够接受该物品。如果要始终允许它，则只需忽略此方法。
collect： 可选的。收集功能。它应该返回道具的简单对象以返回注入到组件中。它接收两个参数，monitor和props
*/

const ComponentList = () => {
  // const { buttonList } = useSelector((state) => state.workbanchNode);
  // const [{ isOver, canDrop }, drop] = useDrop({
  //   accept: "button",
  //   drop: (item, monitor) => ({
  //     dropname: "组建区",
  //     top: monitor.getDifferenceFromInitialOffset().y,
  //     left: monitor.getDifferenceFromInitialOffset().x,
  //   }),
  //   collect: (monitor) => ({
  //     isOver: monitor.isOver(),
  //     canDrop: monitor.canDrop(),
  //   }),
  // });
  return (
    <div className="component-edit-container">
      <MyButton value="测试1" index={0} />
    </div>
  );
};

export default ComponentList;
