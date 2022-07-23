import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increate, decreate, asyncSetNum } from "./model";
const Counter = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(decreate());
        }}
      >
        -
      </button>
      {count}
      <button
        onClick={() => {
          dispatch(increate());
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(asyncSetNum(10));
        }}
      >
        异步设置为10
      </button>
    </div>
  );
};

export default Counter;
