import { configureStore } from "@reduxjs/toolkit";
import counter from "./pages/counter/model.js";
import common from "./model.js";
import workbanchNode from "./pages/home/model.js";
export const store = configureStore({
  reducer: {
    counter,
    common,
    workbanchNode,
  },
});
