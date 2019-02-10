import { all } from 'redux-saga/effects'
// import { watchRequestBooking } from '../middleware-saga/booking_calendar_available';
// import { watchRequestBooking } from './booking_calendar_available';
import { watchActivityBooking} from '../middleware-saga/booking_calendar_available';
import { watchAndLog } from './log'
import { watchLoginActivity } from './login'

//*Single entry point to start all Sagas at once
export function* rootSaga(){

    yield all([watchAndLog(), watchLoginActivity(), watchActivityBooking()])
}