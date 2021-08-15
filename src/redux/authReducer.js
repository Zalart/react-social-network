import {authApi, profileApi} from '../api/api';
export const SET_AUTH_DATA = 'SET_AUTH_DATA';
export const SET_CURRENT_USER_PROFILE_DATA = 'SET_CURRENT_USER_PROFILE_DATA';
// We can only check auth status yet, so we setting auth status into redux state

let initialState =  {
  id: null,
  login: null,
  email: null,
  isAuthorised: false,
  userData: {}
}


export const setAuthData = (id, login, email) => { 
  return {type: SET_AUTH_DATA, authCredentials: {id, login, email}};
}
export const setCurrentUserProfileData = (userData) => { 
  return {type: SET_CURRENT_USER_PROFILE_DATA, userData};
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA: 
        return {
          ...state,
          ...action.authCredentials,
          isAuthorised: true
        }
        case SET_CURRENT_USER_PROFILE_DATA: 
        return {
          ...state,
          userData: action.userData
        }
        default:
          return state;
        
}

}

// Thunks

export const getAuth = () => dispatch => {

  authApi.getAuth()
        .then(response => {
            if (response.data.resultCode === 0) {

                let {id, login, email} = response.data.data;
                dispatch(setAuthData(id, login, email));
                
                profileApi.getProfile(id)
                
                .then(data => {
                
                    dispatch(setCurrentUserProfileData(data.data));
                })
        
            }
            
        })

}