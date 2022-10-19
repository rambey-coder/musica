import React from 'react'

const MainPage = () => {
    return (
        <div className="mainpage-container">
            <div className="side-container">
                <div className="side-bar">
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

            <div className="content-container">
                <div className="top-content">
                    <div className="banner">
                      <div className="banner-content">
                      <div className="right-content">
                            <p>Currated playlist</p>
                            <h2>R & B Hits</h2>
                            <p> All mine, Lie again, Petty call me everyday, Out of time, No love, Bad habit, and so much more </p>
                            <span>
                                <img src="./assets/profile.svg" alt="" />
                                <span>
                                    <i class='bx bxs-heart'></i>
                                    <p>33K Likes</p>
                                </span>
                            </span>
                        </div>

                        <div className="left-content">
                            <img src="/assets/artist.png" alt="artist" />
                        </div>
                      </div>
                    </div>

                    <div className="charts">
                        <h4>Top Charts</h4>
                        <div className="album">
                            <img src="/assets/golden-album.png" alt="album" />
                            <span>
                                <p className="music">Golden age of 80s</p>
                                <p className="name">sean swadder</p>
                                <p className="time">2:45:45</p>
                            </span>
                            <span>
                            <i class='bx bx-heart'></i>
                            </span>
                        </div>

                        <div className="album">
                            <img src="/assets/golden-album.png" alt="album" />
                            <span>
                                <p className="music">Golden age of 80s</p>
                                <p className="name">sean swadder</p>
                                <p className="time">2:45:45</p>
                            </span>
                            <span>
                            <i class='bx bx-heart'></i>
                            </span>
                        </div>

                        <div className="album">
                            <img src="/assets/golden-album.png" alt="album" />
                            <span>
                                <p className="music">Golden age of 80s</p>
                                <p className="name">sean swadder</p>
                                <p className="time">2:45:45</p>
                            </span>
                            <span>
                            <i class='bx bx-heart'></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPage