import Message from "./Message/Message";

const Messages = ({messages}) => {

    return messages.map(message => <Message message={message.message} type={message.type}/>)
}

export default Messages;