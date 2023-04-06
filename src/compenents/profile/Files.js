import React, { useEffect, useState } from 'react'
import "./../../assets/css/file.css";
// import profile from "./../../assets/img/profile.jpg";
import cat1 from "./../../assets/img/cat1.jpg";
// import v1 from "./../../assets/videos/v1.mp4";

import axios from 'axios';
import { mainUrl, storageUrl } from '../../API';

function Files() {
  const [showPopUp, setShowPopUp] = useState(false);
  const [currentOverlayImage, setCurrentOverlayImage] = useState(null);
  const [currentOverlayIndex, setCurrentOverlayIndex] = useState(0);

  const [profileImages, setProfileImages] = useState([]);
  const [loadingProfileImages, setLoadingProfileImages] = useState(true);

  const [coverImages, setCoverImages] = useState([]);
  const [loadingCoverImages, setLoadingCoverImages] = useState(true);

  const [postsImages, setPostsImages] = useState([]);
  const [loadingPostsImages, setLoadingPostsImages] = useState(true);


  const [list, setList] = useState([]);

  useEffect(() => {
    const getProfiles = async () => {
      setLoadingProfileImages(true);
      let authInfo = JSON.parse(localStorage.getItem('authInfo'));
      let token = authInfo.token;
      let config = {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      }
      await axios.get(`${mainUrl}/profile/images/profile`, config)
        .then(info => {
          // console.log(info.data);
          setProfileImages(info.data.images);
        }).catch(err => {
          console.log(err);
        }).finally(() => {
          setLoadingProfileImages(false);
        })
    }

    getProfiles();
  }, [])

  useEffect(() => {
    const getProfiles = async () => {
      setLoadingCoverImages(true);
      let authInfo = JSON.parse(localStorage.getItem('authInfo'));
      let token = authInfo.token;
      let config = {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      }
      await axios.get(`${mainUrl}/profile/images/cover`, config)
        .then(info => {
          setCoverImages(info.data.images)
        }).catch(err => {
          console.log(err);
        }).finally(() => {
          setLoadingCoverImages(false);
        })
    }

    getProfiles();
  }, [])

  useEffect(() => {
    const getProfiles = async () => {
      setLoadingPostsImages(true);
      let authInfo = JSON.parse(localStorage.getItem('authInfo'));
      let token = authInfo.token;
      let config = {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      }
      await axios.get(`${mainUrl}/profile/images/posts`, config)
        .then(info => {
          setPostsImages(info.data.images);
        }).catch(err => {
          console.log("Ooop something went wrong");
        }).finally(() => {
          setLoadingPostsImages(false);
        })
    }

    getProfiles();
  }, [])

  const ShowOverlay = (i, src, myList) => {
    setList(myList);
    setCurrentOverlayIndex(i);
    setCurrentOverlayImage(src);
    setShowPopUp(true);
  }

  const hideoveray = () => {
    setCurrentOverlayImage(null);
    setShowPopUp(false);
    setList([]);
  }

  const btnNext = () => {
    let x = currentOverlayIndex + 1;
    setCurrentOverlayIndex(x);
    if (list.length === x) {
      setCurrentOverlayIndex(0);
      setCurrentOverlayImage(`${storageUrl}/${list[0]}`);
    } else {
      setCurrentOverlayIndex(x);
      setCurrentOverlayImage(`${storageUrl}/${list[x]}`);
    }
  }

  const btnPrevius = () => {
    let x = currentOverlayIndex - 1;
    setCurrentOverlayIndex(x);
    if (x === -1) {
      setCurrentOverlayIndex(list.length - 1);
      setCurrentOverlayImage(`${storageUrl}/${list[list.length - 1]}`);
    } else {
      setCurrentOverlayIndex(x);
      setCurrentOverlayImage(`${storageUrl}/${list[x]}`);
    }
  }

  return (
    <>
      {
        showPopUp ?
          <div id="group-item-popup" className="group-item-overlay">
            <i className='fa-solid fa-times btn-close' onClick={hideoveray} ></i>

            <i className='fa-solid fa-next btn-next' onClick={btnNext} >next</i>
            <i className='fa-solid fa-prev btn-prev' onClick={btnPrevius} >prev</i>
            <div className="group-item-popup overlay-content" >
              <img
                src={currentOverlayImage}
                alt="img"
              />
            </div>
          </div>
          :
          null
      }

      <div className="row">
        <h2>profile images</h2>
        <div className="column">
          {
            loadingProfileImages ?
              <>
                <div className='line h100 w100p bo-rad'></div>
                <div className='line h100 w100p bo-rad'></div>
                <div className='line h100 w100p bo-rad'></div>
                <div className='line h100 w100p bo-rad'></div>
              </>
              :
              <>
                {
                  (profileImages.length > 0) ?
                    profileImages.map((image, i) => {
                      let mySrc = `${storageUrl}/${image}`;
                      return <img
                        onClick={() => ShowOverlay(i, mySrc, profileImages)}
                        key={i}
                        src={mySrc}
                        alt="img"
                        style={{
                          minHeight: '100px',
                          minWidth: "100px",
                          cursor: 'zoom-in'
                        }}

                      />
                    })
                    :
                    <h3 className='txt-center'>profiles not found</h3>
                }
              </>
          }
        </div>

        <h2>Cover images</h2>
        <div className="column">
          {
            loadingCoverImages ?
              <>
                <div className='line h100 w100p bo-rad'></div>
                <div className='line h100 w100p bo-rad'></div>
                <div className='line h100 w100p bo-rad'></div>
                <div className='line h100 w100p bo-rad'></div>
              </>
              :
              <>
                {
                  (profileImages.length > 0) ?
                    coverImages.map((image, i) => {
                      let mySrc = `${storageUrl}/${image}`;
                      return <img
                        key={i}
                        src={mySrc}
                        onClick={() => ShowOverlay(i, mySrc, coverImages)}
                        alt="img"
                        style={{
                          minHeight: '100px',
                          minWidth: "100px",
                          cursor: 'zoom-in'
                        }}

                      />
                    })
                    :
                    <h3 className='txt-center'>covers not found</h3>
                }
              </>
          }
        </div>

        <h2>Posts images</h2>
        <div className="column">
          {
            loadingPostsImages ?
              <>
                <div className='line h100 w100p bo-rad'></div>
                <div className='line h100 w100p bo-rad'></div>
                <div className='line h100 w100p bo-rad'></div>
                <div className='line h100 w100p bo-rad'></div>
              </>
              :
              <>
                {
                  (postsImages.length > 0) ?
                    postsImages.map((image, i) => {
                      let mySrc = `${storageUrl}/${image}`;
                      return <img
                        key={i}
                        src={mySrc}
                        onClick={() => ShowOverlay(i, mySrc, postsImages)}
                        alt="img"
                        style={{
                          minHeight: '100px',
                          minWidth: "100px",
                          cursor: 'zoom-in'
                        }}

                      />
                    })
                    :
                    <h3 className='txt-center'>posts images not found</h3>
                }
              </>
          }
        </div>

        {/* <h2>Posts videos</h2>
        <div className="column">
          <video src={v1} controls></video>
        </div> */}


      </div>

      {/* ================================================ */}
    </>
  )
}

export default Files