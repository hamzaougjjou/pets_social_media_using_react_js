import React, { useEffect, useState } from 'react'
import GroupItem from './GroupItem';
import GroupHeader from './GroupHeader';
import { GroupItemLoading } from '../loading/Index';
import { mainUrl } from '../../API';
import axios from 'axios';

function MainGroups() {

  const [loadingGroups, setLoadingGroups] = useState(false);
  const [groups, setGroups] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [start, setStart] = useState(0);

  useEffect(() => {
    const getGroups = async () => {
      let authInfo = JSON.parse(localStorage.getItem('authInfo'));
      let token = authInfo.token;
      let config = {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      }
      setLoadingGroups(true);
      await axios.get( `${mainUrl}/groups/${start}/${searchQuery}`, config)
        .then(info => {
          console.log(info.data);
          setGroups(info.data.groups);
        }).catch(err => {
          console.log(err);
        }).finally(() => {
          setLoadingGroups(false)
        })
    }

    getGroups();

  }, [ searchQuery ])

  return (
    <div className="body-posts d-flex body2 body">
      <div className="right-Freind-side main-box flex-1">

        <GroupHeader setSearchQuery={setSearchQuery} />

        <div className="boxs-freind boxs-group">
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
                <h3>Nothing to show</h3>
              </>
          }

        </div>
      </div>
    </div>

  );

}

export default MainGroups;