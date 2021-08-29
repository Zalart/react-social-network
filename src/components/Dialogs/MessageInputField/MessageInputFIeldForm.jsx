import React from 'react';
import styles from "./MessageInputField.module.css";
import {Field, reduxForm} from 'redux-form';

let MessageInputFieldForm = (props) => {

    return (<form onSubmit={props.handleSubmit}>
        <div className={styles.addMessage}>
            
        <Field component='textarea' name='newMessage' placeholder='type here...' ></Field>
        
    </div>
    <div className={styles.buttonWrapper}>
        <button type='submit'>Send message</button>
    </div>
    </form>
    )
}

MessageInputFieldForm = reduxForm({
    form: 'addMessage'
})(MessageInputFieldForm);

export default MessageInputFieldForm;