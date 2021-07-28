const FOLLOW_HANDLER = 'FOLLOW-HANDLER';
const LOAD_MORE = 'LOAD-MORE';
const SET_MEMBERS = 'SET-MEMBERS';


let initialState = {
    members: [],
    membersDisplayed: 4 
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
               // members: [...state.members, ...action.members]
                members: [...action.members]
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
export const setMembersAC = (members) => ({type: SET_MEMBERS, members})
