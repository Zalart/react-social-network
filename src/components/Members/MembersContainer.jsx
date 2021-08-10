import React from 'react';
import {connect} from 'react-redux';
import Members from './Members';
import {getMembers, toggleFollow} from '../../redux/membersPageReducer';
import { withAuthRedirect } from '../hoc/withAuthRedirect';


class MembersContainer extends React.Component {

    componentDidMount(){
            this.props.getMembers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getMembers(pageNumber, this.props.pageSize);
    }

    render() {
        let pagesQuantity = Math.ceil(this.props.totalMembersCount / this.props.pageSize);

        let pages = [];

        for (let i = 1; i <= pagesQuantity; i++ )
        {
            pages.push(i);
        }
    return <Members members={this.props.members} 
    totalMembersCount={this.props.totalMembersCount}
    pageSize={this.props.pageSize} 
    currentPage={this.props.currentPage}
    onPageChanged={this.onPageChanged} 
    isLoading={this.props.isLoading} 
    followingProgress={this.props.followingProgress}
    toggleFollow={this.props.toggleFollow}
  
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
let isAuthMembersContainer = withAuthRedirect(MembersContainer);

export default connect(mapStateToProps,
    {
        getMembers,
        toggleFollow
    })(isAuthMembersContainer);