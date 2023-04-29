import AdminItem from './AdminItem';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { mainUrl, storageUrl } from '../../API';
import { RequestItemLoading } from '../loading/Index';
import SearchPeople from '../people/SearchPeople'
import profile from "./../../assets/img/profile.jpg"
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Managers({ groupId, groupInfoLoading, groupInfo }) {

  // =============AUTH================
  let refreshLogin = useSelector(state => state.refreshLogin);
  let token = refreshLogin.token;
  let loadingToken = refreshLogin.loading;
  // =============================

  const currentUser = useSelector(state => state.getUser);
  let my_profile_img = currentUser.user.profile_img === null ? profile : storageUrl + "/" + currentUser.user.profile_img;

  const [loading, setLoading] = useState(false);
  const [groupMembers, setGroupMembers] = useState([]);

  useEffect(() => {
    const getAllMembers = async () => { 
      let config = {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      }
      setLoading(true);
      if (!loadingToken)
        await axios.get(mainUrl + `/group/${groupId}/admins`, config)
          .then(info => {
            setGroupMembers(info.data.groupAdmins);
            setLoading(false);
          })
          .catch((err) => {
            alert("Ooop Somthing went wrong")
          })
          .finally(() => {

          })
    }

    getAllMembers();
  }, []);

  return (
    <div>

      <div>

        <div className="right-Freind-side main-box flex-1">
          <SearchPeople />

          <h3>Group Admins</h3>

          <ul className="req-list">
            {
              groupInfo.is_admin === true && !currentUser.loading ?
                <li className="d-flex gap-10px">
                  <div className="info-r d-flex gap-10px">
                    <img src={my_profile_img} alt="" className="bo-rad" />
                    <div className="info-req flex-between flex-1">
                      <div className="desc-user-req">
                        <p>
                          <NavLink to="/profile">
                            {currentUser.user.name}
                          </NavLink>
                        </p>

                        <span> {currentUser.user.breed} </span>
                      </div>
                      <div className="date-req d-flex flex-col" style={{ textAlign: 'center', padding: '10px 20px' }}>
                        <span>
                          <NavLink to="/profile">
                            <button className="button-ok bot-req">
                              View My Profile&nbsp;&nbsp;
                              <i className="fa-solid fa-paper-plane"></i>
                              &nbsp;
                            </button>
                          </NavLink>
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
                :
                null
            }

            {
              loading ?
                <>
                  <RequestItemLoading />
                  <RequestItemLoading />
                  <RequestItemLoading />
                  <RequestItemLoading />
                  <RequestItemLoading />
                </>
                :
                <>

                  {
                    groupMembers.map((member, i) => {
                      return <AdminItem key={i} member={member} groupId={groupId} groupInfoLoading={groupInfoLoading} groupInfo={groupInfo} />
                    })
                  }

                </>

            }
          </ul>
        </div>
      </div>
    </div>
  )
}
export { Managers }