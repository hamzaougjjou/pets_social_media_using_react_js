import React from 'react'
import { NavLink } from 'react-router-dom'
import { storageUrl } from '../../API'
import profile from "./../../assets/img/profile.jpg"

function CommentNotic({ notic }) {
  let profile_img = notic.user.profile_img===null ? profile : storageUrl + "/" + notic.user.profile_img;
  let isReadColor = notic.is_read===1||notic.is_read===true ? "black" : "#009ef7";
  return (
    <NavLink to={`/post/${notic.content.post_id}`} style={{ color: isReadColor }}>
      <div className="notice-text">
        <div className="comm-notic d-flex ali-center">
          <span className="svg-icon svg-icon-2 svg-icon-gray-500 trans">
            <svg width="23" height="23" viewBox="0 0 24 24" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.3"
                d="M2 4V16C2 16.6 2.4 17 3 17H13L16.6 20.6C17.1 21.1 18 20.8 18 20V17H21C21.6 17 22 16.6 22 16V4C22 3.4 21.6 3 21 3H3C2.4 3 2 3.4 2 4Z"
                fill="currentColor"></path>
              <path
                d="M18 9H6C5.4 9 5 8.6 5 8C5 7.4 5.4 7 6 7H18C18.6 7 19 7.4 19 8C19 8.6 18.6 9 18 9ZM16 12C16 11.4 15.6 11 15 11H6C5.4 11 5 11.4 5 12C5 12.6 5.4 13 6 13H15C15.6 13 16 12.6 16 12Z"
                fill="currentColor"></path>
            </svg>
          </span>
          <div className="txt-notic">
            <span>

              <span>{notic.content.message}</span>
              <span> by : </span>
              <span>{notic.user.name} </span>

            </span>
            <div className="info-notic d-flex ali-center gap-5px">
              <span>{notic.time}</span>
              <img src={ profile_img }
                style={{
                  objectFit:"cover",
                  width:'30px',
                  height:"30px",
                  borderRadius:"50%"
                }}
               alt="" className="bo-rad-haf image-fr-30" 
               />
            </div>
          </div>
        </div>
      </div>
    </NavLink>
  )
}

export default CommentNotic