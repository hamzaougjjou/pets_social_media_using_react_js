import React from 'react'

function Loading() {
    return (
        <div className="flex-center">
            <i style={{ fontSize: '45px' , color: '#0095E8' , padding:"20px"}}
                className="fas fa-spinner fa-pulse">
            </i>
        </div>
    )
}
{/* <i className="fas fa-spinner fa-pulse"></i> */}
export default Loading