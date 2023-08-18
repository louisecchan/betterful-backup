import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { persistor, store } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import AuthProvider from "./components/AuthProvider/AuthProvider";
import { BrowserRouter as Router } from "react-router-dom";

// stylesheet and fonts
import "./index.scss";
import "./fonts/on9jai.woff2";
import "./fonts/on9jai2.woff2";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={"loading"} persistor={persistor}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
