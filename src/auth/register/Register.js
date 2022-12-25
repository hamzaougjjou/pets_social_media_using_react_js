import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Page1 from './Page1';
import Page2 from './Page2';

function Register() {

    let goBackArrow = useRef();

    const [pageNumber, setPageNumber] = useState(1);
    let [whatRender, setWhatRender] = useState(<Page1 />);

    let registerHander = async (e) => {
        e.preventDefault();
        setPageNumber(pageNumber + 1);
        if (pageNumber === 1)
            setWhatRender(<Page1 />)
        else if (pageNumber === 2)
            setWhatRender(<Page2 />)
        console.log(pageNumber);
    }
    let goBackHandler = () => {
        if (pageNumber > 1) {
            setPageNumber(pageNumber - 1);

        }
    }

    useEffect(() => {
        if (pageNumber === 1)
            setWhatRender(<Page1 />)
        else if (pageNumber === 2)
            setWhatRender(<Page2 />)
    }, [pageNumber])

    useEffect(() => {
        if (pageNumber == 1)
            goBackArrow.current.style.opacity = "0";
        else
            goBackArrow.current.style.opacity = "1";
    })

    return (
        <div className="container container-input d-flex po-rel">
            <div className="left-sign-in flex-center">
                <div className="contain-input">

                    <span onClick={goBackHandler} ref={goBackArrow} style={{ cursor: "pointer", opacity: "0" }} className="svg-icon svg-icon-1 m-0">
                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <rect opacity="0.5" x="6" y="11" width="13" height="2" rx="1"
                                fill="currentColor"></rect>
                            <path
                                d="M8.56569 11.4343L12.75 7.25C13.1642 6.83579 13.1642 6.16421 12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75L5.70711 11.2929C5.31658 11.6834 5.31658 12.3166 5.70711 12.7071L11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25C13.1642 17.8358 13.1642 17.1642 12.75 16.75L8.56569 12.5657C8.25327 12.2533 8.25327 11.7467 8.56569 11.4343Z"
                                fill="currentColor"></path>
                        </svg>
                    </span>

                    <div className="titl">
                        <h2>Register</h2>
                        <span>Create acccout to contact with beutiful pets</span>
                    </div>

                    <form action="" className="form-inp">

                        {whatRender}

                        <button type="submit" onClick={registerHander}>
                            {/* <Link to="./" className="button-ok butt-inpt w-full"> */}
                            {/* Continue Registration */}
                            {/* </Link> */}
                            Next
                        </button>

                    </form>

                    <div className="sign-up">
                        i have Account? <Link to="/auth">Login</Link>
                    </div>
                </div>
            </div>
            <div className="right-sign-in">
                <img src="image/img-input.jpg" alt="" />
                <div className="icon-log po-abs">
                    <img src="image/icons8_bing_256.png" alt="" />
                    <span>Slash Pets</span>
                </div>
            </div>
        </div>
    )
}

export default Register