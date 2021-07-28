import {connect} from 'react-redux';
import Members from './Members';
import {followHandlerAC, loadMoreMembersAC, setMembersAC} from '../../redux/membersPageReducer';

let mapStateToProps = (state) => {
    

    return {
        members: state.membersPage.members
    }

}

let mapDispatchToProps = (dispatch) => {
    return {
        followMember: (memberId) => {
            dispatch(followHandlerAC(memberId))
        },
        setMembers: (members) => {
            dispatch(setMembersAC(members))
        }
    }
}

const MembersContainer = connect(mapStateToProps,mapDispatchToProps)(Members);

export default MembersContainer;