class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    // Define action handling methods
    handleGreeting = () => {
      const message = this.createChatBotMessage("Hello! How can I assist you?");
      this.addMessageToState(message);
    };
  
    handleHelp = () => {
      const message = this.createChatBotMessage(
        "Sure, I'm here to help. How can I assist you?"
      );
      this.addMessageToState(message);
    };
  
    // Add more action handling methods as needed
  
    addMessageToState = (message) => {
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message],
      }));
    };
  }
  
  export default ActionProvider;
  