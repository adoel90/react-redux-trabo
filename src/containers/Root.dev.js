import React from 'react'
import { Provider } from 'react-redux'
import { Route, BrowserRouter, Link } from 'react-router-dom'
import App from './App'
import BookingCalendarAvailable from './BookingCalendarAvailable';

const Root = ({ store }) => (
 
    <BrowserRouter>
      <Provider store={store}>
        <div>

          <ul>
          <li>
            <Link to="/">Trabo Login App</Link>
          </li>
          <li>
            <Link to="/booking-calendar-available">Component Calemdar</Link>
          </li>
          {/* 
          <li>
            <Link to="/topics">Topics</Link>
          </li>
          */}
          </ul>
          
          <hr />
          <Route exact path="/" component={App} />
          <Route exact path="/booking-calendar-available" component={BookingCalendarAvailable} />
          
          </div>
      </Provider>
    </BrowserRouter>
   
 
)

// Root.propTypes = {
//   store: PropTypes.object.isRequired,
// }

export default Root
