import React from 'react';
import Profile from '../Profile/Profile';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {getProfile} from '../../redux/profilePageReducer';
import {withAuthRedirect} from '../hoc/withAuthRedirect';
import {compose} from 'redux';


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

let mapStateToProps = (state) => ({
profile: state.profilePage.profile
});



export default compose(connect(mapStateToProps, {getProfile}), withRouter, withAuthRedirect)(ProfileContainer);