
import { ADD_USER, CREATE_USER, GET_LIST_USERS, POST_UPDATE_USER} from '../constants/action-types'


const initialState = {
    loading : false,
    list : [],
    user: {}
};

const userReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_USER:
            return {
                ...state,
                loading: false,
                user: action.data
            }

        case CREATE_USER.PENDING:
            return {
                ...state,
                loading: true
            }

        case CREATE_USER.SUCCESS:

            return {
                ...state,
                loading: false,
                user: action.data
            }

        case CREATE_USER.ERROR:
            return {
                ...state,
                loading: false
            }

        //*GET LIST USERS
        case GET_LIST_USERS.PENDING :
            return {
                ...state, 
                loading: true
            }

        case GET_LIST_USERS.SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload // STANDARD "Payload" data is ONLY "action.payload"
            }

        case GET_LIST_USERS.ERROR:
            return {
                ...state,
                loading: false
            }

        //*UPDATE USER
        case POST_UPDATE_USER.PENDING:
            return {
                ...state,
                loading: true
            }
        
        case POST_UPDATE_USER.SUCCESS:
            console.log(action);
                

            return {
                ...state,
                loading: false,
                user: action.payload
            }

        case POST_UPDATE_USER.ERROR:
            return {
                ...state,
                loading: false
            }

        default :
            // console.log(":)");
            break
            
    }

    return state;


}

export default userReducer;