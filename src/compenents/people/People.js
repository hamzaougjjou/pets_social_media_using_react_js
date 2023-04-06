import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { mainUrl } from '../../API';
import { PeapleItemLoading } from '../loading/Index'
import PeopleItem from './PeopleItem'
import SearchPeople from './SearchPeople'

function People() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [usersNotFound, setUsersNotFound] = useState(false);

  let refreshLogin = useSelector(state => state.refreshLogin);
  let token = refreshLogin.token;
  let loadingToken = refreshLogin.loading;

  useEffect(() => {

    const getOrSearchUsers = async () => {
      setLoading(true);
      setUsersNotFound(false);
      //get auth info
      let formData = new FormData();
      formData.append("q", searchQuery);

      let config = {
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'multipart/form-data'
        }
      }
      if (!loadingToken)
        await axios.post(mainUrl + '/search/users', formData, config)
          .then(info => {
            console.log(info.data);
            if (info.data.success === true) {
              setUsers(info.data.users)
            } else {
              if (info.data.code === -1) {
                setUsersNotFound(true);
              }
            }
            setLoading(false);
            setError(false);
          })
          .catch(err => {
            setLoading(false);
            setError(true);
            console.log(err);
          })
    }
    getOrSearchUsers();
  }, [searchQuery, token])
  // style={{ maxWidth: "1200px", marginInline: "auto", padding: "20px" }}

  return (
    <div className='body2 body' >
      <SearchPeople setSearchQuery={setSearchQuery} />
      <div className="boxs-freind" >
        {
          !error ?
            !loading ?
              usersNotFound ?
                <h1>Nothing Found</h1>
                :
                <>
                  {
                    users.map(user => <PeopleItem key={user.id} user={user} />)
                  }
                </>
              :
              <>
                <PeapleItemLoading />
                <PeapleItemLoading />
                <PeapleItemLoading />
                <PeapleItemLoading />
                <PeapleItemLoading />
              </>
            :
            <h1>OooopS somthing went wrong ..</h1>
        }



      </div>
    </div>

  )
}

export default People