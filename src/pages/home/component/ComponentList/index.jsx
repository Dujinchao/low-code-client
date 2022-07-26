import React from "react";
import MyComponent from "../../../../components/MyComponent";
import MyButton from "../../../../components/MyButton";
import { componento_list_info } from "../../../../utils/typeMapData";
import MyText from "../../../../components/MyText";
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
  return (
    <div className="component-list-container">
      <MyButton value={"按钮"} index={10000} />
      <MyText value="文本" index={10000} />
      {/* {componento_list_info.map((item, index) => (
        <MyComponent
          key={index}
          className="component-list-item"
          value={item.value}
          type={item.type}
        />
      ))} */}
    </div>
  );
};

export default ComponentList;
