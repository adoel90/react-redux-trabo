import { GET_ACCESS_TOKEN_USER_LOGIN } from '../constants/action-types'


const initialState = {
    loading : false,
    status: false,
    data: {}
};


const loginReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_ACCESS_TOKEN_USER_LOGIN.PENDING:
            return {
                ...state,
                loading: true,
                status: false
            }
            
        case GET_ACCESS_TOKEN_USER_LOGIN.SUCCESS:

            return {
                ...state,
                loading: false,
                status: true,
                data: action.payload
            }
        
        case GET_ACCESS_TOKEN_USER_LOGIN.ERROR:
            return {
                ...state,
                loading: false,
                status: false
            }

        default:
            break;
    }

    return state;
};

export default loginReducer;