import React from 'react'
import SideBar from './SideBar'
import Header from './Header'

const Collection = () => {
  return (
    <div className="container">
        <SideBar />
        <div className="collection-container">
            <Header />
            <div className="content-container">
                <div className="btn-container">
                    <button>My Collection</button>
                    <button>Likes</button>
                </div>

                <div className="collection-content ">
                    <div className="collection">
                        <span>
                        <span>
                        <p>Limits</p>
                        <p>John Watts</p>
                        <p className='likes'>2.5m likes</p>
                        </span>
                        <img src="/assets/play.svg" alt="play" className='play-img'/>
                        </span>
                    </div>
                    <div className="collection">
                        <span>
                        <span>
                        <p>Limits</p>
                        <p>John Watts</p>
                        <p className='likes'>2.5m likes</p>
                        </span>
                        <img src="/assets/play.svg" alt="play" className='play-img'/>
                        </span>
                    </div>
                    <div className="collection">
                        <span>
                        <span>
                        <p>Limits</p>
                        <p>John Watts</p>
                        <p className='likes'>2.5m likes</p>
                        </span>
                        <img src="/assets/play.svg" alt="play" className='play-img'/>
                        </span>
                    </div>
                </div>

                <div className="fav-container"></div>
            </div>
        </div>
    </div>
  )
}

export default Collection