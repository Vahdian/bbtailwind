import userDataTypes from "./userData.types";

const USER_INITIAL_STATE = {
    loading: false,
    error: "null",
    user: [],
}

const userDataReducer = (state = USER_INITIAL_STATE, action) => {
    const {type, payload} = action
    switch(type) {
        case userDataTypes.ADD_USER_START:
            return{
                ...state,
                loading: true
            }
        case userDataTypes.ADD_USER_SUCCESS:
            return{
                ...state,
                loading: false,
                user: [...state.user, payload]
            }
        case userDataTypes.ADD_USER_FAIL:
            return{
                ...state,
                loading: false,
                error: payload
            }
        default: return state
    }
}

export default userDataReducer