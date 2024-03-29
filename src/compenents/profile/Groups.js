import React, { useEffect, useState } from 'react'
import GroupItem from './../groups//GroupItem';
import GroupHeader from './../groups/GroupHeader';
import { GroupItemLoading } from '../loading/Index';
import { mainUrl } from '../../API';
import axios from 'axios';
import { useSelector } from 'react-redux';

function Groups() {
  // =============AUTH================
  let refreshLogin = useSelector(state => state.refreshLogin);
  let token = refreshLogin.token;
  let loadingToken = refreshLogin.loading;
  // =============================
  const [loadingGroups, setLoadingGroups] = useState(false);
  const [groups, setGroups] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [start, setStart] = useState(0);
  const { user, loading } = useSelector(state => state.getUser);


  useEffect(() => {
    const getGroups = async () => {
      let config = {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      }
      setLoadingGroups(true);
      if (loading) {
        return false;
      }
      if (!loadingToken)
        await axios.get(`${mainUrl}/user/${user.id}/groups/${start}/${searchQuery}`, config)

          ///user/{user_id}/groups/{start?}/{q?}
          .then(info => {
            console.log(info.data);
            if (info.data.success === true) {
              setGroups(info.data.groups);
            }
          }).catch(err => {
            console.log(err);
          }).finally(() => {
            setLoadingGroups(false);
          })
    }

    getGroups();

  }, [searchQuery, loading])

  return (
    <div className="body-posts d-flex body2 body w-full">
      <div className="right-Freind-side main-box flex-1 w-full">

        <GroupHeader setSearchQuery={setSearchQuery} />

        <div className="boxs-freind boxs-group w-full" style={{ alignItems: "flex-start" }}>
          {
            loadingGroups ?
              <>
                <GroupItemLoading />
                <GroupItemLoading />
                <GroupItemLoading />
              </>
              :
              groups.length > 0 ?
                <>
                  {

                    groups.map((group, i) => {
                      return <GroupItem group={group} key={i} />
                    })

                  }
                </>
                :
                <>
                  <h3 className='txt-center'>لم تنظم بعد الى اي مجموعة</h3>
                </>
          }



        </div>
      </div>
    </div>

  );
}

export default Groups