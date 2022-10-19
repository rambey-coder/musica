import React from 'react'

const Header = () => {
  return (
    <div className="header-container">
            {/* <div className="logo">
                <img src="/assets/logo.svg" alt="logo" />
            </div> */}

            <div className="search-input">
                <form action="">
                    <i className='bx bx-search'></i>
                    <input type="text" placeholder='Search artists'/>
                </form>
            </div>
    </div>
  )
}

export default Header