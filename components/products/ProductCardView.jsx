import {View, Text, TouchableOpacity, Image} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import React from 'react'
import styles from './productCardView.style'
import {Ionicons} from '@expo/vector-icons'
import { COLORS } from '../../constants'
import { useNavigation } from '@react-navigation/native'

const ProductCardView = () =>{
  const navigation = useNavigation()
    return (
      <TouchableOpacity onPress={()=>navigation.navigate("ProductDetails")}>
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image 
                source={{uri:"https://th.bing.com/th/id/OIP.Dy2XvNGogygYLM2oHmFftgHaHa?w=219&h=219&c=7&r=0&o=5&pid=1.7"
            }}
            style={styles.image}
            />
            </View>
            <View style={styles.details}>
                <Text style={styles.title}>Product</Text>
                <Text style={styles.seller }>Githurai</Text>
                <Text style={styles.price}>Ksh 6000</Text>
            </View>
            <TouchableOpacity style={styles.addBtn}>
              <Ionicons name='add-circle' size={35} color={COLORS.primary} />

            </TouchableOpacity>
        </View>
      </TouchableOpacity>
    )
}

export default ProductCardView