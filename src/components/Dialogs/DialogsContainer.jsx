import Dialogs from './Dialogs';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        isAuthorised: state.auth.isAuthorised
    }
}

const DialogsContainer = connect(mapStateToProps)(Dialogs);
export default DialogsContainer;  