

import React from 'react'
import LeftAside from './LeftAside'
import VideoItem from './posts/videos/VideoItem'
import Posts from './posts/Posts'
import RightAside from './RightAside'

function Home() {

    return (

        <div className="body d-flex">
            <LeftAside />
            <main>
                <Posts />
                <VideoItem />
                <Posts />
                <Posts />
                <VideoItem />
                <Posts />
            </main>
            <RightAside />
        </div>
    )
}

export default Home;