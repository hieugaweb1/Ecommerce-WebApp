import React, { Component } from 'react'

export default class SliderLeft extends Component {
  render() {
    return (
      <div className="col-lg-8 col-md-8">
        <div className="slider-area">
          <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src="https://www.mercedes-benz.com.vn/vi/passengercars/mercedes-benz-cars/models/amg-gt/coupe-c190/explore/design-teaser/_jcr_content/par/teaserbox/teaserelement2/teaserelement/image.MQ6.6.20210409113928.jpeg" alt="First slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="https://www.mercedes-benz.com.vn/vi/passengercars/mercedes-benz-cars/models/s-class/saloon-w222/explore/comfort-teaser/_jcr_content/par/productinfotextimage/media2/slides/videoimageslide/image.MQ6.7.20190617135123.jpeg" alt="Second slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="https://www.mercedes-benz.com.vn/vi/passengercars/mercedes-benz-cars/models/e-class/saloon-w213-fl/explore/comfort-teaser/_jcr_content/par/productinfotextimage/media2/slides/videoimageslide/image.MQ6.7.20200529183242.jpeg" alt="Third slide" />
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    )
  }
}
