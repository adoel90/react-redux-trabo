

const asyncActionTypeUser = (type) => ({
    PENDING: `[API] ${type}_PENDING`,
    SUCCESS: `[API] ${type}_SUCCESS`,
    ERROR: `[API] ${type}_ERROR`,
});


export const API_POST_USER_REQUEST = '[Middleware] Api POST User Request...';
export const API_GET_USER_REQUEST = '[Middleware] Api GET User Request...';

export const CREATE_USER = asyncActionTypeUser('CREATE_USER');
export const GET_LIST_USERS = asyncActionTypeUser('GET_LIST_USERS');

//UPDATE
export const API_POST_UPDATE_USER_REQUEST = '[Action - Middleware - Action] Api Post Update User Request...'
export const POST_UPDATE_USER = asyncActionTypeUser('[Middleware -> Reducer] Api Post Update User... ')


//CRUD WITH REQRES API
export const ADD_USER = '[Action] Add user & job ...';

const asyncActionTypeLogin = (type) => ({
    PENDING: `${type} PENDING !`,
    SUCCESS: `${type} SUCCESS !`,
    ERROR: `${type} ERROR !`,
});

//*Login
export const API_POST_USER_LOGIN_REQUEST = "API Login Request...";
// export const GET_ACCESS_TOKEN_USER_LOGIN = "[Action -> Reducer] Api Get Access Token user to login..."
export const GET_ACCESS_TOKEN_USER_LOGIN = asyncActionTypeLogin("[Middleware -> Reducer] Api Get Access Token user to login... ");

/* SYSTEM SESSION ACCESS TOKEN LOCAL STORAGE */

export const GET_SESSION_AT_LOCAL_STORAGE_REQUEST = "[Action - Middleware - Action] Get Session Access Token via Local Storage Request..."

const asyncActionSystemAccessToken = (type) => ({
    PENDING: `${type} PENDING !`,
    SUCCESS: `${type} SUCCESS !`,
    ERROR: `${type} ERROR !`
});
export const GET_SESSION_AT_LOCAL_STORAGE = asyncActionSystemAccessToken("[Middleware -> Reducer] Get Acess Token Local Storage... ")


//*BOOKING
const asyncStatusBookingCalendarAvailable= (type) => ({
    PENDING: `[API] ${type}_PENDING`,
    SUCCESS: `[API] ${type}_SUCCESS`,
    ERROR: `[API] ${type}_ERROR`,
});


export const BOOKING_CALENDAR_AVAILABLE_REQUEST = "Request Booking Calendar Available, status... ";
export const GET_BOOKING_CALENDAR_AVAILABLE = asyncStatusBookingCalendarAvailable("Get Booking Calendar Available, status ...");
export const GET_BOOKING_CALENDAR_AVAILABLE_SUCCESS = "Request Booking Calendar Available, status : SUCCESS !";





