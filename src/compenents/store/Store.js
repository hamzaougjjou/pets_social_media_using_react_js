import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrimentAction, incrimentAction, resetAction } from '../../redux/actions/CounterActions';

function Store() {

  const countState = useSelector( state => state.count );
  const dispach = useDispatch();
  

  return (
    <div>
    <p> counter :  { countState } </p>
    <button onClick={ ()=>{ dispach( decrimentAction() )} }>decriment</button>
    <button onClick={ ()=>{ dispach( incrimentAction() )} }>incriment</button>
    <button onClick={ ()=>{ dispach( resetAction() )} }>reset</button>
    </div>
  )
}

export default Store