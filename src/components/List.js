import React, { Component } from 'react'
import { View, ActivityIndicator, ScrollView, Image, Text, StyleSheet, Dimensions } from 'react-native';
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
    return products.map(product => {
      return <ListItem key={product.regionalProductSku} {...product} />
    })
  }

  render() {
    const { width } = Dimensions.get('window');
    return (
      <ScrollView>
        { !this.state.isFetch ? (
        <View>
          <ActivityIndicator size="large" color="#ff3300" />
        </View>
        ) : (
          <View style={{ width: width}}>
            <View>
              <Image 
                source={{uri: 'https://images-americanas.b2w.io/spacey/2018/12/10/HOME_NATAL_DESTAQUE_MOBILv2.png'}}
                style={{
                  alignItems: 'stretch',
                  width: width, 
                  height: 200, 
                  flex: 1, 
                  resizeMode: 'cover'
                }} 
              />
            </View>
            
            <View style={styles.listContainer}>
              <Text style={styles.textTitle}>Os mais vendidos</Text>
              {this.renderListItem()}
            </View>
          </View>
        )
      }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    marginVertical: 15,
    marginHorizontal: 5,
   
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    backgroundColor: '#FFFFFF',
  },

  textTitle: {
    fontSize: 24,
    paddingLeft: 10,
    fontWeight: 'bold',
    color: '#333333'
  },
});
