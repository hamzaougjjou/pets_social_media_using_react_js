import React from 'react'
import RequestItem from './RequestItem'

function Requests() {
    let requestsData = [
        { userId: '234234', userProfile: "./image/image1.jpg", userName: 'Karina Clark', userType: 'Marketing Manager', reqDate: '10 Mar 2022', reqTime: "9:23 pm" },
        { userId: '453454', userProfile: "./image/image2.jpg", userName: 'Karina Clark', userType: 'Marketing Manager', reqDate: '10 Mar 2022', reqTime: "9:23 pm" },
        { userId: '34534', userProfile: "./image/image3.jpg", userName: 'Karina Clark', userType: 'Marketing Manager', reqDate: '10 Mar 2022', reqTime: "9:23 pm" },
        { userId: '45345345', userProfile: "./image/image4.jpg", userName: 'Karina Clark', userType: 'Marketing Manager', reqDate: '10 Mar 2022', reqTime: "9:23 pm" },
        { userId: '4564545', userProfile: "./image/image5.jpg", userName: 'Karina Clark', userType: 'Marketing Manager', reqDate: '10 Mar 2022', reqTime: "9:23 pm" },
        { userId: '45645456', userProfile: "./image/image6.jpg", userName: 'Karina Clark', userType: 'Marketing Manager', reqDate: '10 Mar 2022', reqTime: "9:23 pm" }
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
                           return <RequestItem key={data.userId} data={data} /> ;
                        })
                    }


 

                </ul>

            </div>
        </div>
    )
}

export default Requests