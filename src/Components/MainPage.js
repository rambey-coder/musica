import React, {useRef, useEffect} from 'react'
import Header from './Header';
import { TweenMax, Power3, } from 'gsap'
import TopCharts from './TopCharts';
import SideBar from './SideBar';

const MainPage = () => {
    let artist = useRef(null)
    let headText = useRef(null)
    let textArea = useRef(null)
    let spanArea = useRef(null)
    let text = useRef(null)

    useEffect(() => {
        TweenMax.fromTo(
            artist, .5, 
            {autoAlpha: 0, y: 1000,},
            {autoAlpha: 1, y: 0, duration: 5, ease: Power3.easeInOut, delay: .7}
        )

        TweenMax.fromTo(
            text, 5, 
            {autoAlpha: 0, x: 20},
            {autoAlpha: 1, x: 0, duration: 3, delay: .9}
        )


        TweenMax.to(
            [headText, textArea],
            {
                'clip-path': 'polygon(0 100%, 100% 100%, 100% 0, 0 0)',
                opacity: 1,
                y: 0,
                duration: 2.2
            }
        )

        TweenMax.fromTo(
            spanArea, .7,
            {'clip-path': 'polygon(0% 100%, 100% 100%, 44% 100%, 9% 100%)', y: 20},
            {
                'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
                y: 0,
                duration: 3,
                delay: .3,
                ease: Power3.inOut
            },
        )
    })

    return (
        <div className="container">
        <SideBar />
        <div className="mainpage-container">
            <Header /> 
            <div className="content-container">
                <div className="top-content">
                    <div className="banner">
                      <div className="banner-content">
                      <div className="right-content">
                            <p ref={el => text = el}>Currated playlist</p>
                            <h2 ref={el => headText = el}>R & B Hits</h2>
                            <p ref={el => textArea = el}> All mine, Lie again, Petty call me everyday, Out of time, No love, Bad habit, and so much more </p>
                            <span ref={el => spanArea = el}>
                                <img src="./assets/profile.svg" alt="" />
                                <span>
                                    <i className='bx bxs-heart'></i>
                                    <p>33K Likes</p>
                                </span>
                            </span>
                        </div>

                        <div className="left-content">
                            <img src="/assets/artist.png" alt="artist" ref={el => artist = el}/>
                        </div>
                      </div>
                    </div>

                    <TopCharts />

                    {/* <div className="charts">
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
                    </div> */}
                </div>

                <div className="down-content">
                    <div className="new-release">
                    <h4>New releases</h4>
                        <div className="release-container">
                        <div className="cover">
                            <img src="/assets/bubble.png" alt="cover" />
                            <p>Life in a bubble</p>
                            <p>The van</p>
                        </div>

                        <div className="cover">
                            <img src="/assets/mountain.png" alt="cover" />
                            <p>Mountain</p>
                            <p>Krisx</p>
                        </div>

                        <div className="cover">
                            <img src="/assets/limits.png" alt="cover" />
                            <p>Limits</p>
                            <p>John Dillon</p>
                        </div>

                        <div className="cover">
                            <img src="/assets/everything.png" alt="cover" />
                            <p>Everything's Black</p>
                            <p>Ameed</p>
                        </div>

                        <div className="cover">
                            <img src="/assets/bubble.png" alt="cover" />
                            <p>Life in a bubble</p>
                            <p>The van</p>
                        </div>

                        <div className="cover">
                            <img src="/assets/cancle.png" alt="cover" />
                            <p>Cancelled</p>
                            <p>Enimen</p>
                        </div>

                        <div className="cover">
                            <img src="/assets/nomod.png" alt="cover" />
                            <p>Nomad</p>
                            <p>Makrol ell</p>
                        </div>

                        <div className="cover">
                            <img src="/assets/blind.png" alt="cover" />
                            <p>Blind</p>
                            <p>Wiz zee</p>
                        </div>
                        </div>
                    </div>
                    
                    <div className="popular">
                    <h4>New releases</h4>
                        <div className="release-container">
                        <div className="cover">
                            <img src="/assets/bubble.png" alt="cover" />
                            <p>Life in a bubble</p>
                            <p>The van</p>
                        </div>

                        <div className="cover">
                            <img src="/assets/mountain.png" alt="cover" />
                            <p>Mountain</p>
                            <p>Krisx</p>
                        </div>

                        <div className="cover">
                            <img src="/assets/limits.png" alt="cover" />
                            <p>Limits</p>
                            <p>John Dillon</p>
                        </div>

                        <div className="cover">
                            <img src="/assets/everything.png" alt="cover" />
                            <p>Everything's Black</p>
                            <p>Ameed</p>
                        </div>

                        <div className="cover">
                            <img src="/assets/bubble.png" alt="cover" />
                            <p>Life in a bubble</p>
                            <p>The van</p>
                        </div>

                        <div className="cover">
                            <img src="/assets/cancle.png" alt="cover" />
                            <p>Cancelled</p>
                            <p>Enimen</p>
                        </div>

                        <div className="cover">
                            <img src="/assets/nomod.png" alt="cover" />
                            <p>Nomad</p>
                            <p>Makrol ell</p>
                        </div>

                        <div className="cover">
                            <img src="/assets/blind.png" alt="cover" />
                            <p>Blind</p>
                            <p>Wiz zee</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default MainPage