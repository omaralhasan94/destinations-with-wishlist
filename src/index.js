import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Destinations from "./pages/destinations";
import Wishlist from "./pages/wishlist";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Destinations />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
