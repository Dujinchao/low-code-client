import { createSlice } from "@reduxjs/toolkit";

export const workbanchNode = createSlice({
  name: "workbanchNode",
  initialState: {
    buttonListIndex: 0,
    buttonList: [
      // {
      //   value: "按钮",
      //   index: 1,
      //   style: {},
      // },
    ],
    textListIndex: 0,
    textList: [],
    elementData: {
      data: [
        {
          // type: "button",
          // value: "按钮x",
          // style: {},
        },
      ],
    },
  },
  reducers: {
    addElement: (state, { payload: { type, data } }) => {
      console.log(state[type]);
      state[type].push(data);
    },
    setElement: (state, { payload: { type, index, style } }) => {
      state[type][index].style = style;
    },
    addButton: (state, { payload }) => {
      state.buttonList.push(payload);
    },
    setButton: (state, { payload: { index, style } }) => {
      console.log(index);
      state.buttonList[index].style = style;
    },
    increateIndex: (state, { payload }) => {
      state[payload] = state[payload] + 1;
    },
  },
});

export const { addButton, increateIndex, setButton, addElement, setElement } =
  workbanchNode.actions;
export default workbanchNode.reducer;
