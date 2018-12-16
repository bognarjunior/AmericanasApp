import React from 'react'
import { View, Image, Text } from 'react-native'
import { numeroParaMoeda } from './../utils'

export default (props) => {
  console.log(props)
  const {imageURL, name, priceCents} = props;
  
  return (
    <View>
      <Image source={{uri: imageURL}}
       style={{width: 100, height: 100}} />
       <Text numberOfLines={1} ellipsizeMode='tail'>{name}</Text>
       <Text>R$ {numeroParaMoeda(priceCents / 100)}</Text>
    </View>
  )
}
