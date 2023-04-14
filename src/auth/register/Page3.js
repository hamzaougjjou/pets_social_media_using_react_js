import React, { useRef, useState } from 'react'
// import './../../assets/css/regProfileImg.css';
import addImgAvatar from './../../assets/img/addImgAvatar.png';

function Page3( {initState , setInitState } ) {

    console.log("page 3 " , initState );

    let fileInputBgRef = useRef();
    let fileInputProfileRef = useRef();
    let imgBgRef = useRef();
    let imgProfileRef = useRef();
    const [bgImg, setBgImg] = useState(addImgAvatar);
    const [profileImg, setProfileImg] = useState(addImgAvatar);

   

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

    return (
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
                    <img ref={imgProfileRef} onClick={selectProfileImage} className="user_img" src={profileImg} alt="user img" />
                    <h1>
                        regState.fullName
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Page3