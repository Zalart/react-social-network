import axios from "axios";
import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthData, setCurrentUserProfileData} from "../../redux/authReducer";

class HeaderContainer extends React.Component {

    componentDidMount(){
    
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true})
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                this.props.setAuthData(id, login, email);
                
                axios.get('https://social-network.samuraijs.com/api/1.0/profile/'+id)
                .then(response => {
                    this.props.setCurrentUserProfileData(response.data);
                })
        
            }
            
        })


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
export default connect(mapStateToProps, {setAuthData, setCurrentUserProfileData})(HeaderContainer);