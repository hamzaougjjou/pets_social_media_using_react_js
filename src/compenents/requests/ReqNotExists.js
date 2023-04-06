import React from 'react'
import { useNavigate } from 'react-router-dom'

function ReqNotExists() {
    const navigate = useNavigate();

    const goFriendsSuggestionsFun = ()=>{
        navigate("/people")
    }
    return (
        <section className='req-not-exist-container'>
            <div>
                <h4> There is not a new friend requests</h4>
                <p>if someone send to a friend request it will be here</p>
                <button onClick={goFriendsSuggestionsFun } className='button-ok bot-req' >Show friends suggestions</button>
            </div>
        </section>
    )
}

export default ReqNotExists