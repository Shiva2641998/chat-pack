import { Provider } from "react-redux";
import Chat from "./components/Chat";
import { store } from "./app/store";
import React from 'react'

const ChatBox = ({...rest}) => {
    return <Provider store={store}>
        <Chat {...rest} />
    </Provider>
}

export { ChatBox };
