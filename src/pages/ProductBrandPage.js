import React, { Component } from 'react'
import ProductDetail from '../components/ProductDetail/ProductDetail'
import LinkHere from '../components/LinkHere/LinkHere'
import ProductBrand from '../components/ProductAll/ProductBrand';

export default class ProductBrandPage extends Component {
  render() {
    const url = this.props.match.match.url;
    const {id} = this.props.match.match.params

    console.log(id)
    return (
      <div>
        {/* <LinkHere url={url}></LinkHere> */}
        <ProductBrand id={id}></ProductBrand>
      </div>
    )
  }
}