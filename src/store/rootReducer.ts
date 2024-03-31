import { combineReducers } from "@reduxjs/toolkit";
import articlesSlice from "./slices/articlesSlice";

const rootReducer = combineReducers({ articlesSlice });

export default rootReducer;
