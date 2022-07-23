import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//- 异步方法
export const asyncSetNum = createAsyncThunk(
  "counter/asyncSetNum",
  (payload, thunkAPI) => {
    setTimeout(() => {
      thunkAPI.dispatch({ type: "counter/setNum", payload });
    }, 3000);
  }
);

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increate: (state) => {
      state.count += 1;
    },
    decreate: (state) => {
      state.count -= 1;
    },
    setNum: (state, { payload }) => {
      state.count = payload;
    },
  },
  extraReducers: {
    [asyncSetNum.fulfilled]: (state, action) => state,
  },
});

//- reducer方法的每个case都会生成一个action
export const { increate, decreate, addNum } = counterSlice.actions;
export default counterSlice.reducer;
