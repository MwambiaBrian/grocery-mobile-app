import {View,FlatList, Text} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { SIZES } from '../../constants'
import React from 'react'
import ProductCardView from './ProductCardView'
import styles from './productRow.style'

const ProductRow = () =>{
    const products = [1,2,3]
    return (
  <View style={styles.container}>
        <FlatList 
      data={products}
      renderItem={({item})=>(<ProductCardView />)}
      horizontal
      contentContainerStyle={{columnGap: SIZES.medium}}
      />
  </View>
    )
}

export default ProductRow