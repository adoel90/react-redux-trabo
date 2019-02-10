import {combineReducers} from 'redux';
import userReducer from './user';
import loginReducer from './login';
import systemSessionLocalStorageReducer from './system-local-storage'
import bookingCalendarReducer from './bookingCalendarReducer';

const rootReducer = combineReducers({
    // recipes: recipesReducer,
    // ingredients : ingredientsReducer,
    user : userReducer,
    login: loginReducer,
    accessToken: systemSessionLocalStorageReducer,
    bookingCalendar:  bookingCalendarReducer
});

export default rootReducer;