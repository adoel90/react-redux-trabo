import { GET_SESSION_AT_LOCAL_STORAGE, GET_SESSION_AT_LOCAL_STORAGE_REQUEST} from '../constants/action-types'

export const getSessionAccessTokenLocalStorage = () => ({
    type: GET_SESSION_AT_LOCAL_STORAGE_REQUEST,
    payload: {
        next: GET_SESSION_AT_LOCAL_STORAGE
    }
})