import React from "react";
import { Provider } from "react-redux";
import Chat from "./components/Chat";
import { store } from "./app/store";

const ChatBox = ({ ...rest }) => {
  return (
      <Provider store={store}>
        <Chat {...rest} />
      </Provider>
  );
};

export { ChatBox };
