
import axios from 'axios';
import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { mainUrl, storageUrl } from '../../API';
// import './../../assets/css/regProfileImg.css';
import addImgAvatar from './../../assets/img/addImgAvatar.png';

function ChangeProfile({ setShowPopUp }) {
    // =============AUTH================
    let refreshLogin = useSelector(state => state.refreshLogin);
    let token = refreshLogin.token;
    let loadingToken = refreshLogin.loading;
    // =============================

    const { loadingUser, user, errorUser } = useSelector(state => state.getUser);

    let cover_img = user.cover_img != null ? storageUrl + "/" + user.cover_img : addImgAvatar;
    let profile_img = user.profile_img != null ? storageUrl + "/" + user.profile_img : addImgAvatar;

    let fileInputBgRef = useRef();
    let fileInputProfileRef = useRef();
    let imgBgRef = useRef();
    let imgProfileRef = useRef();
    const [bgImg, setBgImg] = useState(cover_img);
    const [profileImg, setProfileImg] = useState(profile_img);
    const [uploadLoading, setUploadLoading] = useState(false);

    const readImage = (file) => {
        return new Promise((rs, rj) => {
            const fileReader = new FileReader();
            fileReader.onload = () => rs(fileReader.result);
            fileReader.onerror = () => rj(fileReader.error);
            fileReader.readAsDataURL(file);
        });
    };
    const onSelectBgImage = async (e) => {
        const file = e.target.files[0];
        const imgData = await readImage(file);
        setBgImg(imgData);
    }
    const onSelectProfileImage = async (e) => {
        const file = e.target.files[0];
        const imgData = await readImage(file);
        setProfileImg(imgData);
    }
    const selectProfileImage = () => {
        if (fileInputProfileRef.current) fileInputProfileRef.current.click();
    }
    const selectBgImage = () => {
        if (fileInputBgRef.current) fileInputBgRef.current.click();
    };
    function hidePopUp() {
        setShowPopUp(false);
        fileInputProfileRef.current.value = '';
        fileInputBgRef.current.value = '';
    }

    const uploadProfile = async () => {
        let coverImg = fileInputBgRef.current.files[0];
        let profileImg = fileInputProfileRef.current.files[0];

        if (coverImg === undefined && profileImg === undefined) {
            alert("please select a image")
            return false;
        }

        let formDta = new FormData();
        if (coverImg != undefined)
            formDta.append("cover_img", coverImg)
        if (profileImg != undefined)
            formDta.append("profile_img", profileImg)

        let config = {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }
        setUploadLoading(true);
        if (!loadingToken)
            await axios.post(`${mainUrl}/profile/profile/change`, formDta, config)
                .then(info => {
                    console.log(info);
                    window.location.href = '/profile'
                })
                .catch(err => {
                    alert("Ooop Somthing went wromg")
                    console.log(err);
                })
                .finally(() => {
                    setUploadLoading(false);
                })
    }

    return (
        <div id="group-item-popup" className="group-item-overlay" >
            <div className="group-item-popup" >
                <div className='sub-reg-c'>
                    <div className="main_container">
                        <div className="profile_container">

                            <input
                                style={{ display: 'none' }}
                                type="file"
                                ref={fileInputBgRef}
                                onChange={onSelectBgImage}
                            />
                            <img onClick={selectBgImage} ref={imgBgRef} className="background_img" src={bgImg} alt="background" />
                            <input
                                style={{ display: 'none' }}
                                type="file"
                                ref={fileInputProfileRef}
                                onChange={onSelectProfileImage}
                            />
                            <img ref={imgProfileRef}
                                onClick={selectProfileImage} className="user_img"
                                src={profileImg} alt="user img" />
                            <h1>
                                hamza ougjjou
                            </h1>
                        </div>
                    </div>
                    <div className='group-item-popup-btns flex-between w-full'>
                        {
                            uploadLoading ?
                                <button className="button-ok bot-req bot-fr bot-gro" style={{ padding: "10px 20px", opacity: '0.5' }}>
                                    Save changes
                                    &nbsp;&nbsp;&nbsp;
                                    <i className="fas fa-spinner fa-pulse"></i>
                                </button>
                                :
                                <button onClick={uploadProfile} className="button-ok bot-req bot-fr bot-gro" style={{ padding: "10px 20px" }}>
                                    Save changes
                                </button>
                        }
                        <button onClick={hidePopUp} className="button-cancel bot-req bot-fr bot-gro" style={{ padding: "10px 20px" }}>
                            Cancel
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ChangeProfile