import React, { Component } from 'react'
import LinkHere from '../components/LinkHere/LinkHere'
import ProductSearch from '../components/ProductAll/ProductSearch'
export default class ProductSearchPage extends Component {
  render() {
    const url = this.props.match.match.url;
    const {keyword} = this.props.match.match.params
    return (
      <div>
        <LinkHere url={url}></LinkHere>
        <ProductSearch keyword={keyword}></ProductSearch>
      </div>
    )
  }
}

