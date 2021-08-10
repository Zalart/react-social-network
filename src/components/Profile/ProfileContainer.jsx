import React from 'react';
import Profile from '../Profile/Profile';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {getProfile} from '../../redux/profilePageReducer';
import {withAuthRedirect} from '../hoc/withAuthRedirect';


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
let withAuthRedirectContainer = withAuthRedirect(ProfileContainer);


let WithUrlDataContainerComponent = withRouter(withAuthRedirectContainer); 

let mapStateToProps = (state) => ({
profile: state.profilePage.profile
});



export default connect(mapStateToProps, {getProfile})(WithUrlDataContainerComponent);