import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import AdminContextProvider from "./context/admin.jsx";
import UserContextProvider from "./context/user.jsx";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AdminContextProvider>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </AdminContextProvider>
  </BrowserRouter>
);
