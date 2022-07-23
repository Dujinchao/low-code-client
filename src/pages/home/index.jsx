import React from "react";
import ComponentEdit from "../../components/ComponentEdit";
import ComponentList from "../../components/ComponentList";
import Workbanch from "../../components/Workbanch";
import "./index.scss";
import { DragSource, DropTarget } from "react-dnd"; //引入react-dnd

const Home = () => {
  return (
    <div className="home-container">
      <ComponentList />
      <Workbanch />
      <ComponentEdit />
    </div>
  );
};

export default Home;
