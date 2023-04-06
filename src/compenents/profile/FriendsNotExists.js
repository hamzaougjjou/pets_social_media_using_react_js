import React from 'react'
import { useNavigate } from 'react-router-dom'

function FriendsNotExists() {
    const navigate = useNavigate();

    const goFriendsSuggestionsFun = ()=>{
        navigate("/people")
    }
    return (
        <section className='friend-not-exist-container'>
            <div>
                <h4> There is not a friends </h4>
                <p>if you have any friend  it will be here</p>
                <button onClick={goFriendsSuggestionsFun } className='button-ok bot-req' >Show friends suggestions</button>
            </div>
        </section>
    )
}

export default FriendsNotExists