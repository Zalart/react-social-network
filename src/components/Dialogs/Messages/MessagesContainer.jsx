import Messages from "./Messages";
import {connect} from "react-redux";

let mapPropsToState = (state) => {
    return {
        messages: state.dialogsPage.messages
    }
}
const MessagesContainer = connect(mapPropsToState)(Messages);

export default MessagesContainer;