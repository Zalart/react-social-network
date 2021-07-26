import Users from "./Users";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        users: state.dialogsPage.users
    }
}

const UsersContainer = connect(mapStateToProps)(Users);

export default UsersContainer;