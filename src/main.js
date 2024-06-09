import React, {useMemo} from "react";
import { Provider } from "react-redux";
import Chat from "./components/Chat";
import { store } from "./app/store";

const ChatBox = ({ title }) => {
  return (
      <Provider store={store}>
        <Chat title={title} />
      </Provider>
  );
};

export { ChatBox };
