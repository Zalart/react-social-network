import {profileApi} from '../api/api';
export const ADD_POST = 'ADD-POST';
export const SET_PROFILE = 'SET_PROFILE';
export const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS';

let initialState =  { 
  posts: [
  {id: 1, likes: 20, message: 'Hi, how are you?'},
  {id: 2, likes: 100, message: 'It\'s my first post'},
  {id: 3, likes: 0, message: 'New message from props'}
],
  profile: null,
  profileStatus: ''
}

export const addPostActionCreator = (newPost) => ({ type: ADD_POST, newPost});

export const setProfile = (profile) => ({type: SET_PROFILE, profile});

export const setProfileStatus = (status) => ({type: SET_PROFILE_STATUS, status});



export const profilePageReducer = (state = initialState, action) => {  
    switch (action.type) {
        case ADD_POST: 
        const newPost = {
          id: state.posts.length + 1, 
          likes: 0, 
          message: action.newPost
        }
        return {
          ...state,
          posts: [...state.posts, newPost],
          postMessage: ''
        }; 
        
        case SET_PROFILE:
          return {
            ...state, 
            profile: action.profile
          };

          case SET_PROFILE_STATUS:
          return {
            ...state, 
            profileStatus: action.status
          };

        default:
          return state;
        
}

}

//Thunks

export const getProfile = (userId) => dispatch => {

  profileApi.getProfile(userId)
  .then(response => {
     dispatch(setProfile(response.data));
  });
}

export const getProfileStatus = (userId) => dispatch => {
  profileApi.getProfileStatus(userId)
  .then(response => {
    dispatch(setProfileStatus(response.data))
  })
}

export const updateProfileStatus = (status) => dispatch => {
  profileApi.updateProfileStatus(status)
  .then(response => {
    if(response.data.resultCode === 0) {
    dispatch(setProfileStatus(status))
    }
  })
}