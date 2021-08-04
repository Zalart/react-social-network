import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import Members from './Members';
import {followMember, setPage, setMembers, setTotalMembersCount, setIsLoading} from '../../redux/membersPageReducer';


class MembersContainer extends React.Component {

    componentDidMount(){
            this.props.setIsLoading(true);
             axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&${this.props.pageSize}`, {withCredentials: true})
             .then(response => 
                 {
                     this.props.setMembers(response.data.items);
                     this.props.setTotalMembersCount(response.data.totalCount);
                     this.props.setIsLoading(false);
                 });
                 
    }

    onPageChanged = (pageNumber) => {
        this.props.setPage(pageNumber);
        this.props.setIsLoading(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&${this.props.pageSize}`, {withCredentials: true})
        .then(response => 
            {
                this.props.setMembers(response.data.items);
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
    followMember={this.props.followMember} onPageChanged={this.onPageChanged} isLoading={this.props.isLoading}
     />
}

}

let mapStateToProps = (state) => {
    

    return {
        members: state.membersPage.members,
        pageSize: state.membersPage.pageSize,
        totalMembersCount: state.membersPage.totalMembersCount,
        currentPage: state.membersPage.currentPage,
        isLoading: state.membersPage.isLoading
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
        setIsLoading
    })(MembersContainer);