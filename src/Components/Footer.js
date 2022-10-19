import React from 'react'

const Footer = () => {
  return (
    <div className="footer-container">
        <div className="footer">
            <div className='player'>
                <img src="/assets/seasons.png" alt="play" />
                <span>
                    <p>Seasons in</p>
                    <p>James</p>
                </span>
            </div>
            <div className='audio'>
                <audio src="/assets/season.mp3" controls></audio>
            </div>
        </div>
    </div>
  )
}

export default Footer