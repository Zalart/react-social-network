import React from 'react';
import {connect} from 'react-redux';
import Members from './Members';
import {followMember, setPage, setMembers, setTotalMembersCount, setIsLoading, toggleFollowingProgress} from '../../redux/membersPageReducer';
import { membersApi } from '../../api/api';


class MembersContainer extends React.Component {

    componentDidMount(){
            this.props.setIsLoading(true);
            membersApi.getMembers(this.props.currentPage, this.props.pageSize)
             .then(response => 
                 {
                     this.props.setMembers(response.items);
                     this.props.setTotalMembersCount(response.totalCount);
                     this.props.setIsLoading(false);
                 });
                 
    }

    onPageChanged = (pageNumber) => {
        this.props.setPage(pageNumber);
        this.props.setIsLoading(true);
        membersApi.getMembers(pageNumber, this.props.pageSize)
        .then(response => 
            {
                this.props.setMembers(response.items);
                this.props.setIsLoading(false);
                
            });
    }

    render() {
        let pagesQuantity = Math.ceil(this.props.totalMembersCount / this.props.pageSize);

        let pages = [];

        for (let i = 1; i <= pagesQuantity; i++ )
        {
            pages.push(i);
        }
    return <Members members={this.props.members} totalMembersCount={this.props.totalMembersCount}
    pageSize={this.props.pageSize} currentPage={this.props.currentPage}
    followMember={this.props.followMember} onPageChanged={this.onPageChanged} isLoading={this.props.isLoading} followingProgress={this.props.followingProgress}
    toggleFollowingProgress={this.props.toggleFollowingProgress}
     />
}

}

let mapStateToProps = (state) => {
    

    return {
        members: state.membersPage.members,
        pageSize: state.membersPage.pageSize,
        totalMembersCount: state.membersPage.totalMembersCount,
        currentPage: state.membersPage.currentPage,
        isLoading: state.membersPage.isLoading,
        followingProgress: state.membersPage.followingProgress
    }

}

/* let mapDispatchToProps = (dispatch) => {
    return {
        followMember: (memberId) => {
            dispatch(followMember(memberId))
        },
        setMembers: (members, totalMembersCount) => {
            dispatch(setMembers(members, totalMembersCount))
        }, 
        setPage: (targetPage) => {
            dispatch(setPage(targetPage))
        },
        setTotalMembersCount: (totalMembersCount) => {
            dispatch(setTotalMembersCount(totalMembersCount))
    },
        setIsLoading: (status) => {
            dispatch(setIsLoading(status))
        }
}
}; */


export default connect(mapStateToProps,
    {
        followMember,
        setMembers,
        setPage,
        setTotalMembersCount,
        setIsLoading,
        toggleFollowingProgress
    })(MembersContainer);