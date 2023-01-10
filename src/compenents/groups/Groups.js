import React from 'react'
import GroupItem from './GroupItem';
import GroupHeader from './GroupHeader';
import { GroupItemLoading } from '../loading/Index';

function MainGroups() {
  return (
    <div className="body-posts d-flex">
      <div className="right-Freind-side main-box flex-1">

        <GroupHeader />

        <div className="boxs-freind boxs-group">
          <GroupItemLoading />
          <GroupItemLoading />
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