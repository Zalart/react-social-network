import {connect} from 'react-redux';
import Members from './Members';
import {followHandlerAC, setPageAC, setMembersAC, setTotalMembersCountAC} from '../../redux/membersPageReducer';

let mapStateToProps = (state) => {
    

    return {
        members: state.membersPage.members,
        pageSize: state.membersPage.pageSize,
        totalMembersCount: state.membersPage.totalMembersCount,
        currentPage: state.membersPage.currentPage
    }

}

let mapDispatchToProps = (dispatch) => {
    return {
        followMember: (memberId) => {
            dispatch(followHandlerAC(memberId))
        },
        setMembers: (members, totalMembersCount) => {
            dispatch(setMembersAC(members, totalMembersCount))
        }, 
        setPage: (targetPage) => {
            dispatch(setPageAC(targetPage))
        },
        setTotalMembersCount: (totalMembersCount) => {
            dispatch(setTotalMembersCountAC(totalMembersCount))
    }
}
};

const MembersContainer = connect(mapStateToProps,mapDispatchToProps)(Members);

export default MembersContainer;