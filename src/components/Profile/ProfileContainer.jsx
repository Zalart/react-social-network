import React from 'react';
import Profile from '../Profile/Profile';
import {connect} from 'react-redux';
import {setProfile} from '../../redux/profilePageReducer';
import {withRouter} from 'react-router-dom';
import {profileApi} from '../../api/api';

class ProfileContainer extends React.Component {

    componentDidMount(){
    let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        profileApi.getProfile(userId)
        .then(data => {
            this.props.setProfile(data);
        })
         
    }
    render() {
    return (  <Profile  {...this.props}  />
    )
}

}

let mapStateToProps = (state) => ({
profile: state.profilePage.profile
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setProfile})(WithUrlDataContainerComponent);