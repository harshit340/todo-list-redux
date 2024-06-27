import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../todo/SliceTodo";

export const Store = configureStore({
    reducer:{
        todo:todoReducer,
    },
});