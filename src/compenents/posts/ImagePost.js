import React, { useState } from 'react'
import { storageUrl } from '../../API';
function ImagePost(props) {


    let imgStyle = {
        // width: "100%",
        maxWidth: "100%",
        height: "300px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center center",
        marginInline: "auto",
        backgroundImage: `url('${storageUrl}/${props.post.file}')`
    }
    return (
        <div className="content-post w-full">
            <div className="fo-pos">
                {props.post.description}
            </div>
            <div className='img-post-c'>
                <div className="img-cont-pos bo-rad"  style={ imgStyle }></div>
                {/* <img className="img-cont-pos bo-rad" src={`${storageUrl}/${props.post.file}`} style={imgStyle} /> */}
            </div>
        </div>
    )
}



export default ImagePost;