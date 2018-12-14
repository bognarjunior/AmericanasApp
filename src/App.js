import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';

import {getProductList} from './api';


export default class App extends Component {
  
  
  

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts = async () => {
    const data =  await getProductList();
    console.log(data)
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Lista Produtos Americanas</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
