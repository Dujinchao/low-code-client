import { createSlice } from "@reduxjs/toolkit";

export const workbanchNode = createSlice({
  name: "workbanchNode",
  initialState: {
    buttonList: [
      // {
      //   value: "按钮",
      //   index: 1,
      //   style: {},
      // },
    ],
    index: 0,
  },
  reducers: {
    addButton: (
      state,
      {
        payload = {
          value: "按钮",
          index: state.index + 1,
          style: {},
        },
      }
    ) => {
      state.buttonList.push(payload);
    },
    increateIndex: (state) => {
      state.index++;
    },
  },
});

export const { addButton } = workbanchNode.actions;
export default workbanchNode.reducer;
