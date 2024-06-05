import React from "react";
import { Provider } from "react-redux";
import Chat from "./components/Chat";
import { store } from "./app/store";

const ChatBox = ({ ...rest }) => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Chat {...rest} />
      </Provider>
    </React.StrictMode>
  );
};

export { ChatBox };
