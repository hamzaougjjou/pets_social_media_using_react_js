import React from 'react'
import PeopleItem from '../people/PeopleItem'
import SearchPeople from '../people/SearchPeople'

function Managers() {
  return (
    <div>
      <SearchPeople />
      <div className="boxs-freind" >
        <PeopleItem />
        <PeopleItem />
        <PeopleItem />
        <PeopleItem />
        <PeopleItem />
      </div>
    </div>
  )
}

export { Managers }