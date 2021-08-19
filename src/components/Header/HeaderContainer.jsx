import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuth, logOutProcess} from "../../redux/authReducer";

class HeaderContainer extends React.Component {

    componentDidMount(){
        
        this.props.getAuth();

    }

    componentDidUpdate(prevProps, prevState){

        if(prevProps.isAuthorised !== this.props.isAuthorised) {
        this.props.getAuth();
        }

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
export default connect(mapStateToProps, {getAuth, logOutProcess})(HeaderContainer);