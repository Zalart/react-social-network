const FOLLOW_HANDLER = 'FOLLOW-HANDLER';
const LOAD_MORE = 'LOAD-MORE';
const SET_MEMBERS = 'SET-MEMBERS';
const SET_PAGE = 'SET-PAGE';
const SET_TOTAL_MEMBERS_COUNT = 'SET_TOTAL_MEMBERS_COUNT';


let initialState = {
    members: [],
    pageSize: 5,
    totalMembersCount: 0,
    currentPage: 1
}
export const membersPageReducer = (state = initialState, action) => {

    switch (action.type) {
       
        case FOLLOW_HANDLER: {
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
debugger
            return {
                ...state,
                currentPage: action.targetPage
            }
        }
        case LOAD_MORE: {
            return 'load more'
        }
        default: {
            return state
        }
    }
   
}

export const followHandlerAC = (memberId) => ({type: FOLLOW_HANDLER, memberId});
export const loadMoreMembersAC = () => ({type: LOAD_MORE});
export const setMembersAC = (members, totalMembersCount) => ({type: SET_MEMBERS, members});
export const setPageAC = (targetPage) => ({type: SET_PAGE, targetPage});
export const setTotalMembersCountAC = (totalMembersCount) => ({type: SET_TOTAL_MEMBERS_COUNT, totalMembersCount})
