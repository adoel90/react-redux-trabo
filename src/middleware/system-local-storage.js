import { GET_SESSION_AT_LOCAL_STORAGE_REQUEST } from '../constants/action-types'

const localStorageMiddleware = ({dispatch}) => (next) => (action) => {

    if(action.type === GET_SESSION_AT_LOCAL_STORAGE_REQUEST){

        const sessionLocalStorage = localStorage.getItem("accessToken")
        
        dispatch({type: action.payload.next.PENDING})

        if(sessionLocalStorage != null){
            console.log(sessionLocalStorage)            
            dispatch({type: action.payload.next.SUCCESS, payload: sessionLocalStorage })

        } else {
            dispatch({type: action.payload.next.ERROR})
        };

    }
    next(action);
}

export default localStorageMiddleware;