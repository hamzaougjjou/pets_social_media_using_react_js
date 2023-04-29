import React, { useEffect, useState } from 'react'
import RequestItem from './RequestItem'
// import profile from "./../../assets/img/profile.jpg"
import { RequestItemLoading } from '../loading/Index'
import axios from 'axios';
import { mainUrl } from '../../API';
import ReqNotExists from './ReqNotExists';
import { useSelector } from 'react-redux';

function Requests() {
    // =============AUTH================
    let refreshLogin = useSelector(state => state.refreshLogin);
    let token = refreshLogin.token;
    let loadingToken = refreshLogin.loading;
    // =============================
    const [loading, setLoading] = useState(true);
    const [requests, setRequests] = useState([]);
    const [requestsExists, setRequestsExists] = useState(false);

    useEffect(() => {
        const getAllRequests = async () => {
            let config = {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            }
            if (!loadingToken)
                await axios.get(mainUrl + "/friends/requests/all", config)
                    .then(info => {
                        console.log(info.data);
                        if (info.data.success === true) {
                            setRequests(info.data.requests);
                            if (info.data.requests.length === 0) {
                                setRequestsExists(false);
                            }
                        }
                        setLoading(false);
                    })
        }
        getAllRequests();
    }, [])

    return (
        <div className="body-search1" style={{ margin: '10px 20px', padding: '20px' }}>
            {/* <div className="options d-flex">
                <input type="radio" name="opt1" id="allre" />
                <label htmlFor="allre">All requests</label>
                <input type="radio" name="opt1" id="Usersne" />
                <label htmlFor="Usersne">New requests</label>
                <input type="radio" name="opt1" id="Usersol" />
                <label htmlFor="Usersol">Old requests</label>
            </div> */}

            <div className="option-search1">

                <ul className="req-list">
                    {/* <li></li> */}

                    {
                        loading ?
                            <>
                                <RequestItemLoading />
                                <RequestItemLoading />
                                <RequestItemLoading />
                                <RequestItemLoading />
                                <RequestItemLoading />
                            </>
                            :
                            requests.length === 0 ?
                                <ReqNotExists />
                                :
                                requests.map((request, i) => {
                                    return <RequestItem key={i} data={request} />;
                                })
                    }



                </ul>

            </div>
        </div>
    )
}

export default Requests