import React from 'react'
import RequestItem from './RequestItem'
import profile from "./../../assets/img/profile.jpg"
import { RequestItemLoading } from '../loading/Index'

function Requests() {
    let requestsData = [
        { userId: '234234', userProfile: { profile }, userName: 'Karina Clark', userType: 'Marketing Manager', reqDate: '10 Mar 2022', reqTime: "9:23 pm" },
        { userId: '453454', userProfile: { profile }, userName: 'Karina Clark', userType: 'Marketing Manager', reqDate: '10 Mar 2022', reqTime: "9:23 pm" },
        { userId: '34534', userProfile: { profile }, userName: 'Karina Clark', userType: 'Marketing Manager', reqDate: '10 Mar 2022', reqTime: "9:23 pm" },
        { userId: '45345345', userProfile: { profile }, userName: 'Karina Clark', userType: 'Marketing Manager', reqDate: '10 Mar 2022', reqTime: "9:23 pm" },
        { userId: '4564545', userProfile: { profile }, userName: 'Karina Clark', userType: 'Marketing Manager', reqDate: '10 Mar 2022', reqTime: "9:23 pm" },
        { userId: '45645456', userProfile: { profile }, userName: 'Karina Clark', userType: 'Marketing Manager', reqDate: '10 Mar 2022', reqTime: "9:23 pm" }
    ]
    return (

        <div className="body-search1" style={{ margin: '10px 20px', padding: '20px' }}>
            <div className="options d-flex">
                <input type="radio" name="opt1" id="allre" />
                <label htmlFor="allre">All requests</label>
                <input type="radio" name="opt1" id="Usersne" />
                <label htmlFor="Usersne">New requests</label>
                <input type="radio" name="opt1" id="Usersol" />
                <label htmlFor="Usersol">Old requests</label>
            </div>

            <div className="option-search1">

                <ul className="req-list">
                    <li>Users</li>

                    {
                        requestsData.map((data, index) => {
                            return <RequestItem key={data.userId} data={data} />;
                        })
                    }
                    <RequestItemLoading />
                    <RequestItemLoading />
                    <RequestItemLoading />



                </ul>

            </div>
        </div>
    )
}

export default Requests