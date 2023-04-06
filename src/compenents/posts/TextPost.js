import React from 'react'

function TextPost(props) {
    return (
        <div className="content-post">
            <div className="fo-pos" style={{wordBreak:"break-word"}}>
                {props.post.description}
            </div>
        </div>
    )
}



export default TextPost;