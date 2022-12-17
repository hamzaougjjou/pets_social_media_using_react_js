import React from 'react'
import Loading from '../Loading'
import PeopleItem from './PeopleItem'
import SearchPeople from './SearchPeople'

function People() {
  return (
    <div style={{ maxWidth: "1200px", marginInline: "auto", padding: "20px" }}>
      <SearchPeople />
      <div className="boxs-freind" >
        <PeopleItem />
        <PeopleItem />
        <PeopleItem />
        <PeopleItem />
        <PeopleItem />
        <PeopleItem />
        <PeopleItem />
        <PeopleItem />
        <PeopleItem />
        <PeopleItem />
        <PeopleItem />
        <PeopleItem />
        <PeopleItem />
        <PeopleItem />
      </div>
      <Loading />
    </div>

  )
}

export default People