import { configureStore } from "@reduxjs/toolkit";
import counter from "./pages/counter/model.js";
export const store = configureStore({
  reducer: {
    counter,
  },
});
