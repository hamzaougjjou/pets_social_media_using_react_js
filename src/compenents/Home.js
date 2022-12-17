

import React from 'react'
import LeftAside from './LeftAside'
import VideoItem from './videos/VideoItem'
import Posts from './posts/Posts'
import RightAside from './RightAside'

function Home() {
    return (

        <div className="body d-flex">
            <LeftAside />
            <main>
                <Posts show='0' />
                <VideoItem />
                <Posts show='1' />
                <Posts show='0' />
                <VideoItem />
                <Posts show='0' />
            </main>
            <RightAside />
        </div>
    )
}

export default  Home;