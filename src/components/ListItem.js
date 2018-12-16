import React from 'react'
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native'
import { numeroParaMoeda } from './../utils'

export default (props) => {
  const {imageURL, name, priceCents} = props;
  
  return (
    <View style={styles.item}>
      <Image 
        source={{uri: imageURL}}
        style={{
          alignItems: 'stretch',
          
          width: 120, 
          height: 120, 
          flex: 1, 
          resizeMode: 'contain'
        }} 
      />
      <View style={styles.itemsLabes}>
        <Text numberOfLines={2} ellipsizeMode='tail' style={styles.textName}>{name}</Text>
        <Text style={styles.textPrice}>R$ {numeroParaMoeda(priceCents / 100)}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    marginVertical: 2,
    paddingHorizontal: 15,
    flexDirection: 'row',
    width: Dimensions.get('window').width,
  },

  itemsLabes: {
    flex: 2,
    paddingLeft: 10,
    flexDirection: 'column',
    justifyContent: 'center'
  },

  textName: {
    fontSize: 14,
    color: '#333333'
  },

  textPrice: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ff3333'
  }
});

