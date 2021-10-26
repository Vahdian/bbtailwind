import userDataTypes from "./userData.types";

export const addUserToDatabase = user => dispatch => {
    dispatch({
        type: userDataTypes.ADD_USER_START
    })
    try {
        dispatch({
            type: userDataTypes.ADD_USER_SUCCESS,
            payload: user
        })
    }
    catch(err){
        dispatch({
        type: userDataTypes.ADD_USER_FAIL,
        payload: err 
    })
    }
}