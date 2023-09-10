import {View, TouchableOpacity, Image,Text} from 'react-native'
import React, {useState} from 'react'
import {Ionicons, SimpleLineIcons,Fontisto, MaterialCommunityIcons} from '@expo/vector-icons'
import styles from './productDetails.style'
import { COLORS, SIZES } from '../constants'

const ProductDetails = ({navigation}) =>{
    const [count, setCount]= useState(1)
    const decrement =()=>{
        if(count>1){
            setCount(count-1)
        }
        
    }
    const increment =()=>{
        setCount(count+1)
    }
    return (
        <View style={styles.container}>
            <View style={styles.upperRow}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Ionicons name='chevron-back-circle' size={30} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{}}>
                    <Ionicons name='heart' size={30}color={COLORS.primary}/>
                </TouchableOpacity>
            </View>
            <Image 
            source={{uri: "https://th.bing.com/th/id/OIP.Dy2XvNGogygYLM2oHmFftgHaHa?w=219&h=219&c=7&r=0&o=5&pid=1.7"}}
            style={styles.image}
            />
            <View style={styles.details}>
                <View style={styles.titleRow}>
                    <Text style={styles.title}>Product</Text>
                    <View style={styles.priceWrapper}>
                    <Text style={styles.price}>Ksh 6000</Text>

                    </View>

                </View>
                <View style={styles.ratingRow}>
                    <View style={styles.rating}>
                        {[1,2,3,4,5].map((index) => (
                            <Ionicons 
                            key={index}
                            name='star'
                            size={24}
                            color="gold"
                            />
                        ))}

                        <Text style={styles.ratingText}>(4.9)</Text>
                    </View>
                    <View style={styles.rating}>
                     <TouchableOpacity onPress={()=>increment()}>
                        <SimpleLineIcons 
                        name='plus' size={20}
                        />
                     </TouchableOpacity>

                       
                     <Text style={styles.ratingText}>{count}</Text>
                     <TouchableOpacity onPress={()=>decrement()}>
                        <SimpleLineIcons 
                        name='minus' size={20}
                        />
                     </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.descriptionWrapper}>
                    <Text style={styles.description}>Description</Text>
                    <Text style={styles.descText}>Lorem 
                    ipsum dolor sit amet consectetur adipisicing elit. 
                    Dolorem commodi sapiente facere ab
                     molestiae rem error tempore omnis delectus earum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nihil, architecto explicabo 
                     dignissimos inventore hic non quisquam rerum rem et.</Text>
                </View>
                <View style={{marginBottom: SIZES.small}}>
                    <View style={styles.location}>
                       <View style={{flexDirection: "row"}}>
                       <Ionicons name='location-outline' size={20}/>
                        <Text>Githurai</Text>
                       </View>
                       <View style={{flexDirection: "row"}}>
                       <MaterialCommunityIcons name='truck-delivery-outline' size={20}/>
                        <Text>  Free delivery </Text>
                       </View>
                    </View>
                </View>
                <View style={styles.cartRow}>
                    <TouchableOpacity onPress={()=>{}} style={styles.cartBtn}>
                        <Text style={styles.cartTitle}>BUY NOW</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>{}} style={styles.addCart}>
           <Fontisto name='shopping-bag' size={22} color={COLORS.lightWhite}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default ProductDetails