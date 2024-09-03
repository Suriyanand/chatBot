class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    // Define message parsing logic
    parse = (message) => {
      const lowerCaseMessage = message.toLowerCase();
  
      if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi")) {
        this.actionProvider.handleGreeting();
      } else if (lowerCaseMessage.includes("help")) {
        this.actionProvider.handleHelp();
      } else {
        // Handle unknown messages or fallback behavior
      }
    };
  }
  
  export default MessageParser;
  