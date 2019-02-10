import { GET_BOOKING_CALENDAR_AVAILABLE, GET_BOOKING_CALENDAR_AVAILABLE_SUCCESS } from '../constants/action-types'

const initialState = {
    loading : false,
    list : [],
    data: {}
};

const bookingCalendarReducer = (state = initialState, action) => {

    console.log(action);
    

    switch (action.type) {

        case GET_BOOKING_CALENDAR_AVAILABLE.PENDING:
            return{
                ...state,
                loading: true
            }

        case GET_BOOKING_CALENDAR_AVAILABLE.SUCCESS:

            return{
                ...state,
                loading: false,
                data: action.data
            }

        case GET_BOOKING_CALENDAR_AVAILABLE.ERROR:
            return{
                ...state,
                loading: false
            }
    
        default:
            break;
    }

    return state;
}


export default bookingCalendarReducer;
