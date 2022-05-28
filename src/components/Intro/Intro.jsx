import React from 'react'
import './intro.css'
import bg from '../../img/svg/bg.svg'
import logo_l from '../../img/svg/light.svg'
import logo_d from '../../img/svg/dark.svg'
import nav from '../../img/svg/nav.svg'
import scroll from '../../img/svg/scroll.svg'

const Intro = () => {
  return (
    <div className='i' id='intro'>
        <div className="i-nav">
            <div className="i-nav-wrapper" style={{flex: 1.5}}>
              <img src={logo_d} alt="" className="i-nav-logo" />
            </div>
            <div className="i-nav-wrapper r">
                <p className="i-nav-item">Home</p>
                <p className="i-nav-item">Products</p>
                <p className="i-nav-item">About</p>
                <img src={nav} alt="" className="i-nav-menu" />
            </div>
        </div>
        <div className="i-body">
          <img src={bg} alt="" className="i-img" />
          <div className="i-bg"></div>
          <div className="i-body-wrapper">
            {/* <div className="i-body-logo-wrapper"> */}
              {/* <div className="i-body-logo-text">Sheger Cafe</div> */}
              <div className="i-body-logo">
                <img src={logo_l} alt="" className="i-logo-img" />
              </div>
            {/* </div> */}
            <div className="i-body-text-wrapper">
              <h1 className="i-body-heading">
                <p className='i-text'>Your favorite coffeeshop</p>
              </h1>
              <div className="scroll" >
                <img src={scroll} alt="" className='i-scroll' />
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Intro