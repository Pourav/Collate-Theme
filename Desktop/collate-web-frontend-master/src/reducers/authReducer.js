
export const authReducer= (state, action) => {
    switch(action.type){
        case "LOGIN":
            localStorage.setItem('user',JSON.stringify(action.payload.user))
            localStorage.setItem('token',JSON.stringify(action.payload.token))
            console.log('dispatched login');
          return{
              ...state,
              isAuthenticated:true,
              doesUserExist:true,
              isUserSignedUp:true,
              isUserConfirmed:true,
              isUserDetails:true,
              user:action.payload.user,
              token:action.payload.token
          };
        
        case "SIGNUP":
            localStorage.setItem('New User',JSON.stringify(action.payload.newUser)) 
            localStorage.setItem('token',JSON.stringify(action.payload.token))
            console.log('dispatched signup');

            return{
                ...state,
                isUserSignedUp:true,
                user:action.payload.newUser,
                token:action.payload.token
            }
        case "SIGNUP_AUTH":
        localStorage.setItem('New User',JSON.stringify(action.payload.newUser)) 
        localStorage.setItem('token',JSON.stringify(action.payload.token))
        console.log('dispatched signup');

        return{
            ...state,
            isUserSignedUp:true,
            isUserConfirmed:true,
            user:action.payload.newUser,
            token:action.payload.token
        }
        case "SIGNUP_DETAILS":
            console.log('dispatched signup det');

            return{
                ...state,
                isUserSignedUp: true,
                isUserDetails: true,
                user:action.payload.newUser,
                token:action.payload.token
            }
        case "LOGOUT":
            console.log('dispatched logout');
            localStorage.clear();
            return{
                ...state,
                isAuthenticated:false,
                doesUserExist:false,
                isUserSignedUp:false,
                isUserConfirmed:false,
                isUserDetails:false,
                user:null
            };
        case "EDIT_PROFILE":
            console.log("dispatch edit_profile")
            localStorage.setItem('user',JSON.stringify(action.payload.user))  
            return{
                ...state,
                user:action.payload.user
            }  
          
            default:
                return state;
    }
} 