import React from 'react'
import './VideoButton.css'
function VideoButton({title}) {
  return (
    <div>
        <button className='videoButton'>{title}</button>
    </div>
  )
}

export default VideoButton