import React from 'react'

const SideBar = () => {
  return (
    <div className="side-container">
    <div className="side-bar">
            <div className="logo">
                <img src="/assets/logo.svg" alt="logo" />
            </div>

        <div className="play-icon">
            <i className="fa-solid fa-house"></i>
            <i className='bx bxs-playlist'></i>
            <i className="fa-solid fa-radio"></i>
            <i className="fa-solid fa-clapperboard"></i>
        </div>

        <div className="profile-icon">
            <i className="fa-solid fa-user"></i>
            <i className='bx bxs-log-in'></i>
        </div>
    </div>
</div>
  )
}

export default SideBar