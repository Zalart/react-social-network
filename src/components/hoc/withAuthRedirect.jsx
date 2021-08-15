import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';

let mapStateToProps = (state) => {
   return {
    isAuthorised: state.auth.isAuthorised
    }};


export const withAuthRedirect = (Component) => {
 let withAuthRedirectComponent = (props) => {


    if (!props.isAuthorised) {

        return <Redirect to='/login' /> }

 return <Component {...props} />
}

return connect(mapStateToProps)(withAuthRedirectComponent);
}