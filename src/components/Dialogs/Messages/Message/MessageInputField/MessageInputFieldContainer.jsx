import MessageInputField from './MessageInputField';
import { addMessageActionCreator, changeNewMessageActionCreator } from '../../../../../redux/dialogsPageReducer';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
return {
currentMessage: state.dialogsPage.currentMessage
}
}

let mapDispatchToProps = (dispatch) => {
    return {
        handleAddMessage: () => {
                dispatch(addMessageActionCreator());
        },
        handleChangeMessage: (textFormValue) => {
            let action = changeNewMessageActionCreator(textFormValue);
            dispatch(action);
        }
}
}

const MessageInputFieldContainer = connect(mapStateToProps, mapDispatchToProps)(MessageInputField);

export default MessageInputFieldContainer; 