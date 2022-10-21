import { React, useState } from 'react'
import axios from 'axios'

const TopCharts = () => {


    return (
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
                            <i className='bx bx-heart'></i>
                            </span>
                        </div>

            <div className="album">
                            <img src="/assets/rEggae-album.png" alt="album" />
                            <span>
                                <p className="music">Reggae "n" blues</p>
                                <p className="name">Dj Yk mule</p>
                                <p className="time">1:02:45</p>
                            </span>
                            <span>
                            <i className='bx bx-heart'></i>
                            </span>
                        </div>

            <div className="album">
                            <img src="/assets/tunes-album.png" alt="album" />
                            <span>
                                <p className="music">Tomorrow's tunes</p>
                                <p className="name">Obi Datti</p>
                                <p className="time">2:01:25</p>
                            </span>
                            <span>
                            <i className='bx bx-heart'></i>
                            </span>
                        </div>
        </div>
    )
}

export default TopCharts