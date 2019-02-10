
import axios from 'axios'
import { API_POST_USER_REQUEST, API_GET_USER_REQUEST, API_POST_UPDATE_USER_REQUEST } from '../constants/action-types';


const userMiddleware = ({ dispatch }) => (next) => (action) => {

    if(action.type === API_POST_USER_REQUEST){    
        
        console.log(action)
        axios
            .post(action.payload.url, action.data.data)
            .then(function (response) {
                // console.log(response)
                dispatch({ type: action.payload.next.SUCCESS})
            })
            .catch(function  (error) {
                console.log(error);
                dispatch({ type: action.payload.next.ERROR})
            });

        dispatch({ type: action.payload.next.PENDING });
    }

    if (action.type === API_GET_USER_REQUEST) {
        
        axios
            .get(action.payload.url)
            .then(function (response) {
                if(response.data.status == 200){
                    dispatch({type: action.payload.next.SUCCESS, payload: response.data.result.data})
                
                } else {
                    dispatch({type:action.payload.next.PENDING});
                    console.log(" ==> Check your data is not empty !");
                }
                
            })
            .catch(function (error) {
                console.log(error);
                dispatch({type: action.payload.next.ERROR})
            })

        dispatch({type: action.payload.next.PENDING})
        
    }
    
    if(action.type === API_POST_UPDATE_USER_REQUEST){

        axios
            .put(action.payload.url, action.data)
            .then(function(response){

                console.log(response);
                dispatch({type: action.payload.next.SUCCESS, payload:response.data})
            })
            .catch(function(error){
                dispatch({type: action.payload.next.ERROR})
                console.log("Error : ", error);
            })
        

        dispatch({type : action.payload.next.PENDING})
    }
    

    next(action);
}; 

export default userMiddleware;