import Dialogs from './Dialogs';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import {compose} from 'redux';

/* const mapStateToProps = (state) => {
    return {
        isAuthorised: state.auth.isAuthorised
    }
} */


export default compose(withAuthRedirect)(Dialogs);  