import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

function Store() {

  


  return (
    <div>
      <button>decriment</button>
      <button>incriment</button>
      <button>reset</button>
      <hr />
      
      <FontAwesomeIcon icon={faUser} />

    </div>
  )
}

export default Store