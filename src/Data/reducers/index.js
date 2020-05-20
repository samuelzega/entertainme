import { combineReducers } from "redux";
import image from "./image";
import favorite from "./favorite";
import input from "./input";

export default combineReducers({
  image,
  favorite,
  input
});
