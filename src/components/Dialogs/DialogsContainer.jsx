import Dialogs from './Dialogs';
import { withAuthRedirect } from '../hoc/withAuthRedirect';

/* const mapStateToProps = (state) => {
    return {
        isAuthorised: state.auth.isAuthorised
    }
} */

let withAuthRedirectContainer = withAuthRedirect(Dialogs);

const DialogsContainer = withAuthRedirectContainer;
export default DialogsContainer;  