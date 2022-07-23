import { routes } from "./router";
import { useRoutes } from "react-router-dom";
import "./App.css";

function App() {
  const element = useRoutes(routes);
  return element;
}

export default App;
