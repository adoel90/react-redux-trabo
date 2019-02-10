import { GET_SESSION_AT_LOCAL_STORAGE} from '../constants/action-types'

const initialState = {
    data: {}
}

const systemSessionLocalStorageReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case GET_SESSION_AT_LOCAL_STORAGE.PENDING:
            
            return {
                ...state,
                data: "Pending..."
            };
    
        case GET_SESSION_AT_LOCAL_STORAGE.SUCCESS:
            console.log(action);
            
            return {
                ...state,
                data: action.payload
            };

        case GET_SESSION_AT_LOCAL_STORAGE.ERROR:
            
            return {
                ...state,
                data: "Errur..."
            };

        default:
            break;
    }

    return state;
}

export default systemSessionLocalStorageReducer;