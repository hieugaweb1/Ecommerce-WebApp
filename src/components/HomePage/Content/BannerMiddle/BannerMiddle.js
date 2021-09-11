import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class BannerMiddle extends Component {
  render() {
    return (
      <div className="li-static-banner" style={{marginTop: -50}}>
        <div className="container">
          <div className="row">
            {/* Begin Single Banner Area */}
            <div className="col-lg-4 col-md-4 text-center">
              <div className="single-banner">
                <Link to="#">
                  <img src="https://xetot365.com/wp-content/uploads/2019/05/logo-mercedes-giai-ma-bi-an-dang-sau-ngoi-sao-3-canh-2.jpg" alt="Li's Static Banner" />
                </Link>
              </div>
            </div>
            {/* Single Banner Area End Here */}
            {/* Begin Single Banner Area */}
            <div className="col-lg-4 col-md-4 text-center pt-xs-30">
              <div className="single-banner">
                <Link to="#">
                  <img src="https://2.bp.blogspot.com/-BaRk2olgr0U/V6f3oLB6OcI/AAAAAAAAATk/lV-QakOvPEAyoWITzcLTTH0Dm2apAQP8QCEw/s1600/Ferrari-emblem-720x540.jpg" alt="Li's Static Banner" />
                </Link>
              </div>
            </div>
            {/* Single Banner Area End Here */}
            {/* Begin Single Banner Area */}
            <div className="col-lg-4 col-md-4 text-center pt-xs-30">
              <div className="single-banner">
                <Link to="#">
                  <img src="https://logoeps.com/wp-content/uploads/2011/08/lamborghini-logo.jpg" alt="Li's Static Banner" />
                </Link>
              </div>
            </div>
            {/* Single Banner Area End Here */}
          </div>
        </div>
      </div>

    )
  }
}
