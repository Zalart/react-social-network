const FOLLOW_MEMBER = 'FOLLOW_MEMBER';
const LOAD_MORE = 'LOAD_MORE';
const SET_MEMBERS = 'SET_MEMBERS';
const SET_PAGE = 'SET_PAGE';
const SET_TOTAL_MEMBERS_COUNT = 'SET_TOTAL_MEMBERS_COUNT';
const IS_LOADING = 'IS_LOADING';


let initialState = {
    members: [],
    pageSize: 5,
    totalMembersCount: 0,
    currentPage: 1,
    isLoading: false
}
export const membersPageReducer = (state = initialState, action) => {

    switch (action.type) {
       
        case FOLLOW_MEMBER: {
            return {
                ...state,
                members: state.members.map(member => {
                    if (+action.memberId === member.id) {
                    return {
                        ...member, 
                        followed: !member.followed
                    }
                    }
                    return member;
                }
                )
            }

        }
        case SET_MEMBERS: {

            return {
                ...state,
                members: [...action.members],
            }
        }
        case SET_TOTAL_MEMBERS_COUNT: {
            return {
                ...state,
                totalMembersCount: action.totalMembersCount
            }
        }
        case SET_PAGE: {
            return {
                ...state,
                currentPage: action.targetPage
            }
        }
        case LOAD_MORE: {
            return 'load more'
        }
        case IS_LOADING: {
            return {
                ...state,
                isLoading: action.status
            }
        }
        default: {
            return state
        }
    }
   
}

export const followMember = (memberId) => ({type: FOLLOW_MEMBER, memberId});
export const loadMoreMembers = () => ({type: LOAD_MORE});
export const setMembers = (members) => ({type: SET_MEMBERS, members});
export const setPage = (targetPage) => ({type: SET_PAGE, targetPage});
export const setTotalMembersCount = (totalMembersCount) => ({type: SET_TOTAL_MEMBERS_COUNT, totalMembersCount});
export const setIsLoading = (status) => ({type: IS_LOADING, status});
