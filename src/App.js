import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import List from './components/List';

export default class App extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        <List />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d9d9d9',
  }
});
