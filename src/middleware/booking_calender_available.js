
import axios from 'axios'
import { BOOKING_CALENDAR_AVAILABLE_REQUEST, GET_BOOKING_CALENDAR_AVAILABLE } from '../constants/action-types'

const bookCalenderAvailableMiddleware = ({ dispatch }) => (next) => (action) => {

    console.log(action);

    // if(action.type === S ){

    //     // axios
    //     // .get(action.payload.url)
    //     // .then(function (response) {
    //     //     if(response.data.status == 200){
    //     //         dispatch({type: action.payload.next.SUCCESS, payload: response.data.result.data})
            
    //     //     } else {
    //     //         dispatch({type:action.payload.next.PENDING});
    //     //         console.log(" ==> Check your data is not empty !");
    //     //     }
            
    //     // })
    //     // .catch(function (error) {
    //     //     console.log(error);
    //     //     dispatch({type: action.payload.next.ERROR})
    //     // })

    //     dispatch({type: action.payload.next.PENDING})
    // }

    if(action.type === GET_BOOKING_CALENDAR_AVAILABLE.SUCCESS){
        console.log(action)
    }
    

    next(action);
}; 

export default bookCalenderAvailableMiddleware;