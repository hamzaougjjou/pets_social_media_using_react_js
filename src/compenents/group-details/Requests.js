import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { mainUrl } from '../../API';
import { RequestItemLoading } from '../loading/Index'
import RequestItem from './RequestItem'

function Requests({ groupId }) {

    const [loading, setLoading] = useState(true);
    const [requests, setRequests] = useState([]);
    const [requestsExists, setRequestsExists] = useState(false);

    useEffect(() => {
        const getAllRequests = async () => {
            let authInfo = JSON.parse(localStorage.getItem('authInfo'));
            let token = authInfo.token;
            let config = {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            }
            await axios.get(mainUrl + `/group/${groupId}/requests`, config)
                .then(info => {
                    setRequestsExists(true);
                    setRequests(info.data.MembersRequests);
                    setLoading(false);
                    console.log( info.data );
                })
        }
        getAllRequests();
    }, [])

    return (
        <div className="body d-flex">
            <div className="right-Freind-side main-box flex-1">
                <h3>Join Group Requests</h3>

                <ul className="req-list">

                    {
                        loading ?
                            <>
                                <RequestItemLoading />
                                <RequestItemLoading />
                            </>

                            :
                            <>
                                {
                                    (requests.length > 0) ?
                                        requests.map((request, i) => {
                                            return <RequestItem groupId={groupId} request={request} key={i} />
                                        })
                                        :
                                        <div style={{ textAlign: 'center',color:'yellowgreen',padding:'20px 10px'}}>
                                            <h2>there is not a requests to join group</h2>
                                        </div>
                                }

                            </>

                    }
                </ul>

            </div>
        </div>
    )
}

export { Requests as GroupRequests }