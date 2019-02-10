import {combineReducers} from 'redux';
import userReducer from './user';
import loginReducer from './login';
import systemSessionLocalStorageReducer from './system-local-storage'
import bookingCalendarReducer from './bookingCalendarReducer';

// const rootReducer = combineReducers({
export default combineReducers({
    user : userReducer,
    login: loginReducer,
    accessToken: systemSessionLocalStorageReducer,
    bookingCalendar:  bookingCalendarReducer
});

// export default rootReducer;