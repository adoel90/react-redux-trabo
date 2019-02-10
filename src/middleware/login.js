

/*
    This code is not used, because have been moved and now use "Saga Middleware"

*/



import axios from 'axios'
import { API_POST_USER_LOGIN_REQUEST} from '../constants/action-types'


const loginMiddleware = ({dispatch}) => (next) => (action) => {


    if(action.type === API_POST_USER_LOGIN_REQUEST){
        
        console.log(action);
        
        axios
            .post(action.payload.url, action.data)
            .then(function(response){
                console.log(response)
                if(response.status == 200){

                    dispatch({type: action.payload.next.SUCCESS, payload: response.data})
                    // console.log("Access Token : ", response.data.result.accessToken)
                    localStorage.setItem('accessToken', response.data.response.access_token)

                } else { console.log("Status response NOT OK, NOT 200 !")}
            })
            .catch(function(error){
                console.log("Error : ", error)
                dispatch({type: action.payload.next.ERROR})
            })

        dispatch({type: action.payload.next.PENDING });
    }

    //Hati - hati kelupaan "synntax" ini !
    next(action);

}

export default loginMiddleware;