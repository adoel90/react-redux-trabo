import React, { Component } from 'react'
import Calendar from '../components/Calendar'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import dateFns from "date-fns";
import moment from 'moment'
import { getBookingCalendarAvailable} from '../actions/booking_calender_available'


class BookingCalendarAvailable extends Component {


    constructor(props){
        super(props);

    
    }


    render(){

        return(
            <div className="App">
                <header>
                    <div id="logo">
                        <br />
                        <span>Calendar Component</span>
                    </div>
                </header>
                <main>
                    <Calendar />
                </main>
            </div>
        )
    }

};

const mapStateToProps = (state) => ({
    booking: state.bookingCalendar.data
  });
  
  const mapDispatchToProps = (dispatch) => {
  
    return {
      getBookingCalendarAvailableDispatch : (data) => dispatch(getBookingCalendarAvailable(data)),
    
    }
  }
  
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookingCalendarAvailable))
  

// export default BookingCalendarAvailable;