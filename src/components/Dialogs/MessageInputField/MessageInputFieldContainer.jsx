import MessageInputField from './MessageInputField';
import { addMessageActionCreator} from '../../../redux/dialogsPageReducer';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
return {}
}

let mapDispatchToProps = (dispatch) => {
    return {
        handleAddMessage: (newMessage) => {
                dispatch(addMessageActionCreator(newMessage));
        }
}
}

const MessageInputFieldContainer = connect(mapStateToProps, mapDispatchToProps)(MessageInputField);

export default MessageInputFieldContainer; 