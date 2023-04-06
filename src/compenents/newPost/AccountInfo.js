import React from 'react'
import { useSelector } from 'react-redux';
import { storageUrl } from '../../API';
import profile from "./../../assets/img/profile.jpg"

function AccountInfo() {

    const { loading, error, user } = useSelector(state => state.getUser);
    let profile_img = user.profile_img === null ? profile : storageUrl + "/" + user.profile_img;

    return (
        <>
            {
                loading ?
                    <div className="image-post" style={{width:'min-content',margin:"30px auto"}}>
                        <div className="image-post" style={{width:'min-content',margin:"0 auto"}}>
                            <p className="bo-rad line square h90 w90p" />
                        </div>
                        <p className="bo-rad line w150p h20" />
                    </div>
                    :
                    <>
                        <div className="image-post">
                            <img src={profile_img} alt="" className="bo-rad" style={{minHeight:'80px'}}/>
                        </div>
                        <h3> {user.name} </h3>
                    </>
            }

        </>
    )
}

export default AccountInfo