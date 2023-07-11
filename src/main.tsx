import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="flex flex-col justify-center my-0 mx-auto sm:w-[610px]">
      <App />
    </div>
  </React.StrictMode>
);
