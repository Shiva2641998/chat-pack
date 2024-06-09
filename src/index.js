import * as ReactDOM from "react-dom/client";
import * as React from "react";
import Chat from "./components/Chat";

const container = document.querySelector("saytv-chat");
const shadowContainer = container.attachShadow({ mode: "open" });
const shadowRootElement = document.createElement("div");
shadowContainer.appendChild(shadowRootElement);


ReactDOM.createRoot(shadowRootElement).render(
  <React.StrictMode>
        <p>Shadow DOM</p>
        <Chat title="Welcome" />
  </React.StrictMode>
);

