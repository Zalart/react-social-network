import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthData, setCurrentUserProfileData} from "../../redux/authReducer";
import {authApi, profileApi} from "../../api/api";

class HeaderContainer extends React.Component {

    componentDidMount(){
    
       authApi.getAuth()
        .then(response => {
            if (response.resultCode === 0) {
                let {id, login, email} = response.data;
                this.props.setAuthData(id, login, email);
                
                profileApi.getProfile(id)
                .then(data => {
                    this.props.setCurrentUserProfileData(data);
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