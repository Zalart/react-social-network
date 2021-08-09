import React from 'react';
import Profile from '../Profile/Profile';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {getProfile} from '../../redux/profilePageReducer';


class ProfileContainer extends React.Component {

    componentDidMount(){
    let userId = this.props.match.params.userId;
    if (!userId) { 
        userId = 2;
        
    }
        this.props.getProfile(userId);
    }

    render() {
    return (  <Profile  {...this.props}  />
    )
}

}

let WithUrlDataContainerComponent = withRouter(ProfileContainer); 

let mapStateToProps = (state) => ({
profile: state.profilePage.profile,
isAuthorised: state.auth.isAuthorised
});



export default connect(mapStateToProps, {getProfile})(WithUrlDataContainerComponent);