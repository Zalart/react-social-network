import React from 'react';
import styles from "./MessageInputField.module.css";
import {Field, reduxForm} from 'redux-form';
import {required, maxLengthCreator} from '../../../helpers/validators/validators';
import { FormFieldDecorator } from '../../common/FormFieldDecorator/FormFieldDecorator';


const maxLength30 = maxLengthCreator(30);
let MessageInputFieldForm = (props) => {

    return (<form onSubmit={props.handleSubmit}>
        <div className={styles.addMessage}>
            
        <Field component={FormFieldDecorator} name='newMessage' validate={[required, maxLength30]} placeholder='type here...' />
        
    </div>
    <div className={styles.buttonWrapper}>
        <button>Send message</button>
    </div>
    </form>
    )
}

MessageInputFieldForm = reduxForm({
    form: 'addMessage'
})(MessageInputFieldForm);

export default MessageInputFieldForm;