import React from "react";
import ComponentEdit from "./component/ComponentEdit";
import ComponentList from "./component/ComponentList";
import Workbanch from "./component/Workbanch";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import "./index.scss";
import "../../components/components.scss";
const Home = () => {
  return (
    <div className="home-container">
      <DndProvider backend={HTML5Backend}>
        <ComponentList />
        <Workbanch />
      </DndProvider>
      <ComponentEdit />
    </div>
  );
};

export default Home;
