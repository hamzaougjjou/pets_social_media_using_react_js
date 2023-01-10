import React from 'react'
import { NavLink } from 'react-router-dom'
import profile from "./../../assets/img/profile.jpg"

function Settings() {
  return (
    <div className='body' style={{ maxWidth: '1200px', margin: '0 auto', overflow: 'hidden' }}>

      <div className="main-box d-flex" >
        <div className="top-profile d-flex gap-20px">
          <div className="img-prof-media" style={{ height: "120px !important" }}>
            <div className="image-profile bo-rad po-rel" style={{ height: "80px", width: '80px' , backgroundImage: `url('${profile}')`}}>
            </div>
          </div>
          <div className="all-info-prof">
            <div className="my-name">
              <h2>Hamza ougjjou</h2>
              <NavLink to='/profile'>
                <span style={{ display: 'block', marginTop: '10px' }}>View Your Profile</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* ===================================== */}

      <div className="main-box">

        <div className="setting-boxes-c number gap-20px">
          <div className="setting-boxe-item Friends-num bo-rad">
            <NavLink to='/messanger'>
              <span className="d-block">
                <i className='fa fa-message'></i>
              </span>
              <span>Messages</span>
            </NavLink>
          </div>
          <div className="setting-boxe-item Friends-num bo-rad">
            <NavLink to='/videos'>
              <span className="d-block">
                <i className='fa fa-video'></i>
              </span>
              <span>Videos</span>
            </NavLink>
          </div>
          <div className="setting-boxe-item Friends-num bo-rad">
            <NavLink to='/groups'>
              <span className="d-block">
                <i className='fa fa-users'></i>
              </span>
              <span>Groups</span>
            </NavLink>
          </div>
          <div className="setting-boxe-item Friends-num bo-rad">
            <NavLink to='/'>
              <span className="d-block">
                <i className='fa fa-rss'></i>
              </span>
              <span>Feeds</span>
            </NavLink>
          </div>
          <div className="setting-boxe-item Friends-num bo-rad">
            <NavLink to='/'>
              <span className="d-block">
                <i className='fa fa-birthday-cake'></i>
              </span>
              <span>Birthdays</span>
            </NavLink>
          </div>
          <div className="setting-boxe-item Friends-num bo-rad">
            <NavLink to='/profile/friends'>
              <span className="d-block">
                <i className='fa fa-user-plus'></i>
              </span>
              <span>My Friends</span>
            </NavLink>
          </div>
        </div>

        <div className="line-bott"></div>


        <div className=''>


          <div className='sub-setting-item-c'>
            <h2>
              <i className='fa fa-user'></i>
              Edite profile info
            </h2>
            <section>
              <NavLink className='sub-sett-link' to='change-password' >
                <i className='fa fa-key'></i>
                Change password
              </NavLink>
              <NavLink className='sub-sett-link' to='edite-profile-name' >
                <i className='fa fa-id-card'></i>
                Edite profile Name
              </NavLink>
            </section>
          </div>

        </div>

        <NavLink className='sub-sett-log-out-btn' to='/auth' >
          <i className='fa fa-sign-out'></i>
          Log Out
        </NavLink>

      </div>

      {/* ===================================== */}

    </div>
  )
}

export default Settings