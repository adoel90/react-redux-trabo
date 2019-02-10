import { API_POST_USER_LOGIN_REQUEST, GET_ACCESS_TOKEN_USER_LOGIN, SUCCESS_LOGIN} from '../constants/action-types'
import { URL_API } from '../constants/config-api'


/*

    ***Parameter :
    {
        "client_id":"8",
        "client_secret":"Ea0wMDF3k6LaK59ZrfCCQw5BYcqu89rQbX2RsB9c",
        "grant_type":"password",
        "password":"trabo2019",
        "username":"wisatamusi@gmail.com"
    }
*/

export const postUserLogin = (data) => ({

    type: API_POST_USER_LOGIN_REQUEST,
    payload: {
            url: URL_API + "/oauth-token",
            next: GET_ACCESS_TOKEN_USER_LOGIN
        },
    data: data  
})
