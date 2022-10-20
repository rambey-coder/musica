import React, { useRef, useEffect } from 'react'
import { gsap, TweenMax, Power3 } from 'gsap'

const SideBar = () => {
    let logo = useRef(null)
    let icons = useRef(null)
    let icon = useRef(null)
    let iconTwo = useRef(null)
    let iconThree = useRef(null)
    let iconFour = useRef(null)

    useEffect(() => {
            TweenMax.fromTo(
                logo,
                {y: -100},
                 {
                    opacity: 1,
                    ease: Power3.easeIn,
                    duration: 1,
                    y: 0,
                    // delay: .1
                }
            )

            TweenMax.fromTo(
                icons,
                {opacity: 0},
                 {
                    opacity: 1,
                    ease: Power3.easeIn,
                    duration: 2,
                    delay: .1,
                    // stagger: 2.4
                }
            )

            TweenMax.staggerFromTo([icon, iconTwo, iconThree, iconFour],
                 .2, 
                 {opacity: 0, x: 40}, 
                 {opacity: 1, x: 0, ease:Power3.easeInOut, duration: 3, delay: .4}, .8)
    }, [])


  return (
    <div className="side-container">
    <div className="side-bar">
            <div className="logo">
                <img src="/assets/logo.svg" alt="logo" 
                    ref={el => logo = el}
                    style={{opacity: 0}}
                />
            </div>

        <div className="play-icon" ref={el => icons = el}>
            <i className="fa-solid fa-house"
                ref={el => icon = el}
            ></i>
            <i className='bx bxs-playlist'
                ref={el => iconTwo = el}
            ></i>
            <i className="fa-solid fa-radio"
                ref={el => iconThree = el}
            ></i>
            <i className="fa-solid fa-clapperboard"
                ref={el => iconFour = el}
            ></i>
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