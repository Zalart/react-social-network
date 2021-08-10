import {Redirect} from 'react-router-dom';
import { connect } from 'react-redux';

let mapStateToProps = (state) => ({
    isAuthorised: state.auth.isAuthorised
    });

export const withAuthRedirect = (Component) => {
 let withAuthRedirectComponent = (props) => {
    if (!props.isAuthorised) {
        return <Redirect to='/login' /> }

 return <Component {...props} />
}

return connect(mapStateToProps)(withAuthRedirectComponent);
}