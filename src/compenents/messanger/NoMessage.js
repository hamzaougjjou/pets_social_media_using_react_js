import React, { useEffect, useState } from 'react'
// import { show_new_user_box } from '../../Main'
import SelectNewUser from './SelectNewUser'
function NoMessage(props) {

    const [slectNewUser, setSlectNewUser] = useState('')

    function show_box() {
        document.getElementById("box-new-user-box-c").style.display = 'block';
        setSlectNewUser(<SelectNewUser res={props.res} />);
    }
    useEffect(() => {
        let boxNewUserBoxC = document.getElementById("box-new-user-box-c");
        boxNewUserBoxC.addEventListener('click',(e)=>{
            if (e.target == boxNewUserBoxC ) {
                boxNewUserBoxC.style.display = 'none';
            }
            
        })
    })

    return (

        <>
            <div className="messenger-box messenger-box-ch main-box no-message-co">
                <div className="no-message-content">

                    <i className="fa-solid fa-paper-plane"></i>
                    <h2>Vos Messages</h2>
                    <p>
                        envoyer des photos et des  messages prives a un(e) ami(e)
                    </p>
                    <br />
                    <button onClick={show_box} className="button-ok bot-req bot-fr" id='test-btn'>
                        Send Message&nbsp;
                    </button>

                </div>
            </div>
            {/* ===================== */}
            <div id='box-new-user-box-c'>
                {slectNewUser}
            </div>


        </>
    )


}

export default NoMessage