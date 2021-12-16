import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import { Provider } from "react-redux";
import "./i18n";
import { persistor, store } from "./store/store";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Load } from "./components/Loader";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Load />} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
