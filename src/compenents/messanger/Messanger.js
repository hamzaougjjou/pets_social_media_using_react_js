import React from 'react'
import { useParams } from 'react-router-dom';
import Discussion from './Discussion';
import NoMessage from './NoMessage';
import Users from './Users';

function Messanger(props) {
    
    const { id } = useParams() ;
    console.log(id);
    let whatRender = <NoMessage />;
    if( !(id === undefined || id===null) ){
        whatRender = <Discussion />;
    }

    return (
        <div className="body d-flex">
            <main className="main-profile main-chat">
                <h1>Chat</h1>
                <div className="body-posts body-ch d-flex">
                    <Users />
                    {/* <!-- ///////////////////// --> */}
                    {whatRender}

                </div>
            </main>
        </div>
    )
}
//onclick
export default Messanger;