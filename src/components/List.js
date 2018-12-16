import React, { Component } from 'react'
import { View, ActivityIndicator, ScrollView } from 'react-native';
import { getProductList } from './../api'
import ListItem from './ListItem'

export default class List extends Component {
  state = {
    products: {},
    isFetch: false,
  }

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts = async () => {
    const data =  await getProductList();
    this.setState({ products: data.result });
    this.setState({ isFetch: data.isFetch });
  }

  renderListItem = () => {
    const { products } = this.state;
    console.log(products)
    return products.map(product => {
      return <ListItem key={product.regionalProductSku} {...product} />
    })
    
    /* imageURL
    priceCents
    name */
     
  }

  render() {
    return (
      <ScrollView>
        { !this.state.isFetch ? (
        <View>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
        ) : (
          this.renderListItem()
        )
      }
      </ScrollView>
    );
  }
}
