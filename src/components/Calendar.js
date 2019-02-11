import React from 'react';
import dateFns from "date-fns";
import moment from 'moment'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom' 
import { getBookingCalendarAvailable} from '../actions/booking_calender_available'


class Calendar extends React.Component {

  constructor (props){

    super(props);

    this.state = {
      currentMonth: new Date(),
      selectedDate: new Date(),
      isDateAvailable : false
    };
  }

  componentDidMount(){

    const { booking, getBookingCalendarAvailableDispatch } = this.props;
    // getBookingCalendarAvailableDispatch();

    /* 01 */
    // 0: "2019-02-01"
    // 1: "2019-02-02"
    // 2: "2019-02-03"
    // 3: "2019-02-04"

    let dateAvailable = [
      {0: "2019-02-01"},
      {1: "2019-02-02"},    
    ]

    dateAvailable.map((data, i) => {  
      // console.log(data[i])
      // let dateFnsOke = dateFns.startOfMonth(dateMoment)

      
      

       console.log(dateFns.startOfMonth(moment(data[i]).format("YYYY, MM, DD")))
       console.log(dateFns.startOfMonth(moment(data[i]).format("YYYY, MM, DD")))
     

     
      
      
      

    })

    // var result = dateFns.startOfMonth(new Date(2014, 8, 2, 11, 55, 0))
    let result = dateFns.startOfMonth(new Date(2019, 2, 1))
    // console.log(result)

    /* 02 */
    const date = moment("2019-02-01").format("YYYY, MM, DD");
    // console.log(date);
    const tanggalPertama = dateFns.startOfMonth(date);
    // console.log(tanggalPertama);

    /* 03 */
    // var users = [{
    //     name: 'John',
    //     email: 'johnson@mail.com',
    //     age: 25,
    //     address: 'USA'
    //   },
    //   {
    //     name: 'Tom',
    //     email: 'tom@mail.com',
    //     age: 35,
    //     address: 'England'
    //   },
    //   {
    //     name: 'Mark',
    //     email: 'mark@mail.com',
    //     age: 28,
    //     address: 'England'
    //   }
    // ];
    
    
    // users= users.filter(function(item) {
    //   for (var key in filter) {
    //     if (item[key] === undefined || item[key] != filter[key])
    //       return false;
    //   }
    //   return true;
    // });
    
    // console.log(users)




    
    
      
  }

  componentDidUpdate(prevProps){  

      const { booking } = this.props;
      if(prevProps.booking != booking){
          console.log(booking)
      }
  }

  renderHeader = () => {
    const dateFormat = "MMMM YYYY";

    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={this.prevMonth}>
            chevron_left
          </div>
        </div>
        <div className="col col-center">
          <span>{dateFns.format(this.state.currentMonth, dateFormat)}</span>
        </div>
        <div className="col col-end" onClick={this.nextMonth}>
          <div className="icon">chevron_right</div>
        </div>
      </div>
    );
  }

  renderDays() {
    const dateFormat = "dddd";
    const days = [];

    let startDate = dateFns.startOfWeek(this.state.currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
        </div>
      );
    }

    return <div className="days row">{days}</div>;
  }

  renderCells() {

    const { currentMonth, selectedDate } = this.state;
    const monthStart = dateFns.startOfMonth(currentMonth);// First Month Date
    const monthEnd = dateFns.endOfMonth(monthStart);//Last Month Date
    const startDate = dateFns.startOfWeek(monthStart); //First Week Date
    const endDate = dateFns.endOfWeek(monthEnd); //Last Week Date

    /* */




    // {console.log(startDate)}
    // {console.log(endDate)}

    const dateFormat = "D"; //Day of month: "D"	==> Example : 1, 2, ..., 31
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {

      for (let i = 0; i < 7; i++) {
        formattedDate = dateFns.format(day, dateFormat);
        const cloneDay = day;
        days.push(
          <div
            className={`col cell ${ !dateFns.isSameMonth(day, monthStart)
                ? "disabled"
                : dateFns.isSameDay(day, selectedDate) ? "selected" : ""
            }`}
            key={day}
            onClick={() => this.onDateClick(dateFns.parse(cloneDay))}
          >
            <span className="number">{formattedDate}</span>
            <span className="bg">{formattedDate}</span>

          </div>
        );
        day = dateFns.addDays(day, 1);
      }
      rows.push(
        <div className="row" key={day}>
          {days}
         
        </div>
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
  };


  onDateClick = (day) => {

    // console.log(day);
    
    this.setState({
      selectedDate: day
    });
  };

  nextMonth = () => {
    this.setState({
      currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
    });
  };

  prevMonth = () => {
    this.setState({
      currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
    });
  };

  render(){

    return (
      <div className="calendar">
        {this.renderHeader()}
        {this.renderDays()}
        {this.renderCells()}
      </div>
    )
  }

}


const mapStateToProps = (state) => ({
  booking: state.bookingCalendar.data
});

const mapDispatchToProps = (dispatch) => {

  return {
    getBookingCalendarAvailableDispatch : (data) => dispatch(getBookingCalendarAvailable(data)),
  
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Calendar))
