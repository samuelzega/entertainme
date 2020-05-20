import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers/index";
// import logger from 'redux-logger'

export default createStore(reducers, applyMiddleware(thunk));
