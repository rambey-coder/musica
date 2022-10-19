import React from 'react'

const SideBar = () => {
    return (
        <div className="side-container">
            <div className="side-bar">
                <div className="play-icon">
                <i class="fa-solid fa-house"></i>
                <i class='bx bxs-playlist'></i>
                <i class="fa-solid fa-radio"></i>
                <i class="fa-solid fa-clapperboard"></i>
                </div>

                <div className="profile-icon">
                <i class="fa-solid fa-user"></i>
                <i class='bx bxs-log-in'></i>
                </div>
            </div>
        </div>
    )
}

export default SideBar