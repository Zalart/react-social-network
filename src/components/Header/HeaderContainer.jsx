import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuth} from "../../redux/authReducer";

class HeaderContainer extends React.Component {

    componentDidMount(){
        this.props.getAuth();
    }
render(){

    return <Header {...this.props} />;
}
}

let mapStateToProps = (state) => {
    
    return {
        id: state.auth.id,
        login: state.auth.login,
        email: state.auth.email,
        isAuthorised: state.auth.isAuthorised,
        fullName: state.auth.userData.fullName
        
    }
}
export default connect(mapStateToProps, {getAuth})(HeaderContainer);