import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrimentAction, incrimentAction, resetAction } from '../../redux/actions/CounterActions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

function Store() {

  const countState = useSelector(state => state.CounterReducer.count);
  console.log( countState );
  const dispach = useDispatch();


  return (
    <div>
      <p> counter :  {countState} </p>
      
      <button onClick={() => { dispach(decrimentAction()) }}>decriment</button>
      <button onClick={() => { dispach(incrimentAction()) }}>incriment</button>
      <button onClick={() => { dispach(resetAction()) }}>reset</button>

      <hr />
      
      <FontAwesomeIcon icon={faUser} />

    </div>
  )
}

export default Store