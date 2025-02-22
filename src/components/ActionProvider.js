// class ActionProvider {
//     constructor(createChatBotMessage, setStateFunc) {
//       this.createChatBotMessage = createChatBotMessage;
//       this.setState = setStateFunc;
//     }
  
//     handleHelp = () => {
//       const message = this.createChatBotMessage("Sure! How can I assist you?");
//       this.setState((prev) => ({ ...prev, messages: [...prev.messages, message] }));
//     };
  
//     handleDefault = () => {
//       const message = this.createChatBotMessage("I'm not sure, but I'll try to help.");
//       this.setState((prev) => ({ ...prev, messages: [...prev.messages, message] }));
//     };
//   }
  
//   export default ActionProvider;
  