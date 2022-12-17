import React from 'react'
import GroupItem from './GroupItem';
import GroupHeader from './GroupHeader';

function MainGroups() {
  return (
    <div className="body-posts d-flex">
      <div className="right-Freind-side main-box flex-1">

        <GroupHeader />

        <div className="boxs-freind boxs-group">

          <GroupItem />
          <GroupItem />
          <GroupItem />
          <GroupItem />
          <GroupItem />
          <GroupItem />
          <GroupItem />
          <GroupItem />
          <GroupItem />
          <GroupItem />
          <GroupItem />
          <GroupItem />
          <GroupItem />
          <GroupItem />
          <GroupItem />
          <GroupItem />
          <GroupItem />

        </div>
      </div>
    </div>
    
  );

}

export default MainGroups;