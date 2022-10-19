import React from 'react'

const SideBar = () => {
    return (
        <div className="side-container">
            <div className="side-bar">
                <div className="logo">
                    <i className="fa-solid fa-bars-progress"></i>
                </div>

                <div className="task-icon">
                <i className='bx bx-home-alt-2'></i>
                <i className='bx bx-like'></i>
                <i className='bx bx-plus'></i>
                <i className='bx bx-trash'></i>
                </div>

                <div className="profile-img">
                    <img src="/assets/profile.jpg" alt="profile" />
                </div>
            </div>
        </div>
    )
}

export default SideBar