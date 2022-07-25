import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "common",
  initialState: {
    position: {
      x: 0,
      y: 0,
    },
  },
  reducers: {
    setPosition: (state, { payload }) => {
      state.position = payload;
    },
  },
});

//- reducer方法的每个case都会生成一个action
export const { setPosition } = counterSlice.actions;
export default counterSlice.reducer;
