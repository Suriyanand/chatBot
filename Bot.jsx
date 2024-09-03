import React from "react";
import { Chatbot } from "react-chatbot-kit";
import config from "./Config";
import ActionProvider from "./actionProvider";
import MessageParser from "./MessageParser";

function ChatbotComponent() {
  // Custom chatbot configuration and logic

  return (
    <div>
        <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
}

export default ChatbotComponent;
