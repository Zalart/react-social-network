import React from 'react';
import MessageInputFieldForm from './MessageInputFIeldForm';

const MessageInputField = ({handleAddMessage})=> {


const onAddMessage = (value) => {
    handleAddMessage(value.newMessage);
    
}


    return <MessageInputFieldForm onSubmit={onAddMessage} />
}

export default MessageInputField;