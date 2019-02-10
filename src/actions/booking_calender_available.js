


/*
    This code is not used, because have been moved and now use inside "Saga Middleware"

*/




import { BOOKING_CALENDAR_AVAILABLE_REQUEST, GET_BOOKING_CALENDAR_AVAILABLE, GET_BOOKING_CALENDAR_AVAILABLE_SUCCESS } from '../constants/action-types';
import { URL_API } from '../constants/config-api'

export const getBookingCalendarAvailable = (data) => ({

    type: BOOKING_CALENDAR_AVAILABLE_REQUEST,
    payload: {
        url: URL_API + '/mobile/product/sales-calendar',
        next: GET_BOOKING_CALENDAR_AVAILABLE
    },

    //https://stackoverflow.com/questions/40988238/sending-the-bearer-token-with-axios
    
    /* Gw udah pindahin parameter ini ke "Middleware Saga"
        
        body: data,
        headers: "Bearer " + data 

    */
}) 

// export const getBookingCalendarAvailableSuccess = (data) => {

//     console.log(data);

//     return { type: GET_BOOKING_CALENDAR_AVAILABLE.SUCCESS, payload: "What do i have ?" };
// };
