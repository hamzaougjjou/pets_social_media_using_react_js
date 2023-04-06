import React from 'react'
import { PostItemLoading } from '../../loading/Index'
import VideoItem from './VideoItem'

function Videos() {
  return (
    <div className='body2 body' style={{ marginInline: "auto", padding: "20px" }}>

      {/* <VideoItem />
      <VideoItem />
      <VideoItem />
      <VideoItem />
      <VideoItem />
      <VideoItem />
      <VideoItem />
      <VideoItem />
      <VideoItem />
      <VideoItem />
      <VideoItem /> */}
      <PostItemLoading />
      <PostItemLoading />
      <PostItemLoading />
      <PostItemLoading />
    
    </div>
  )
}

export default Videos