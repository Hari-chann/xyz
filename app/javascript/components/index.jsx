import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

document.addEventListener("turbo:load", () => {
  // document.getElementsByTagName("html")[0].classList.add("dark");
  document.querySelector('main').remove();
  const root = ReactDOM.createRoot(
    document.body.appendChild(document.createElement("div"))
  );
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
});
