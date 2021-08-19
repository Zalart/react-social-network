import React from 'react';
import ProfileStatus from './ProfileStatus';
import {connect} from 'react-redux';
import {getProfileStatus} from '../../../../redux/profilePageReducer';

class ProfileStatusContainer extends React.Component {


    render(){
        return <ProfileStatus {...this.props} />
    }

}

const mapStateToProps = (state) => {
    return {
        profileStatus: state.profilePage.profileStatus
    }
}

export default connect(mapStateToProps)(ProfileStatusContainer);