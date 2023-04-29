import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import "./../assets/css/page404.css";
class NotFound extends Component {

  render() {
    return (

      <div className='body'>
        <div className="mainbox">
          <div className="err">4</div>
          <i className="far fa-question-circle fa-spin"></i>
          <div className="err2">4</div>
          <div className="msg">
            Pga Not Found
            <p style={{ padding: "20px" }}>
              Let s go
              <NavLink to="/" style={{ padding: "10px" }}>
                home
              </NavLink>
              and try from there.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default NotFound;