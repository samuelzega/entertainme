import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter } from "react-router-dom";
import store from "./Data/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
