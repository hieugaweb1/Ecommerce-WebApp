import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class BannerRight extends Component {
  render() {
    return (
      <div className="col-lg-4 col-md-4 text-center pt-xs-30">
        <div className="li-banner">
          <Link tp="#">
            <img src="https://www.mercedes-benz.com.vn/vi/passengercars/mercedes-benz-cars/models/glc/coupe-c253/explore/highlights/_jcr_content/contentgallerycontainer/par/contentgallery/par/contentgallerytile/image.MQ6.8.20190624055013.jpeg" alt="not found" />
          </Link>
        </div>
        <div className="li-banner mt-15 mt-sm-30 mt-xs-30">
          <Link tp="#">
            <img src="https://www.mercedes-benz.com.vn/vi/passengercars/mercedes-benz-cars/models/glc/coupe-c253/explore/design-teaser/_jcr_content/par/teaserbox/teaserelement1/teaserelement/image.MQ6.6.20190624055013.jpeg" alt="not found" />
          </Link>
        </div>
      </div>
    )
  }
}
