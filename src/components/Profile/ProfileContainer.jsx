import React from 'react';
import Profile from '../Profile/Profile';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {getProfile, getProfileStatus, updateProfileStatus} from '../../redux/profilePageReducer';
import {compose} from 'redux';


class ProfileContainer extends React.Component {

    componentDidMount(){
    let userId = this.props.match.params.userId;
    if (!userId) { 
        userId = 2;
        
    }
        this.props.getProfile(userId);
        this.props.getProfileStatus(userId);
    }

    render() {
    return (  <Profile  {...this.props}  />
    )
}

}

let mapStateToProps = (state) => ({
profile: state.profilePage.profile,
profileStatus: state.profilePage.profileStatus
});



export default compose(connect(mapStateToProps, {getProfile, getProfileStatus, updateProfileStatus}), withRouter)(ProfileContainer);