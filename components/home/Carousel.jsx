import {View, StyleSheet} from 'react-native'
import { SliderBox } from 'react-native-image-slider-box'
import React from 'react'
import { COLORS } from '../../constants'

const Carousel = () =>{
    const slides = [
        "https://th.bing.com/th/id/R.041894a096c426949378c5ae06ea9415?rik=urCRyC6PG0BNrg&riu=http%3a%2f%2fwww.dekalbproduce.com%2fstore33.jpg&ehk=aJ2RK7%2fJdbAbQmF9Klu3K1ENXJ3ykSjJgLJafDp6GBU%3d&risl=&pid=ImgRaw&r=0",
       "https://th.bing.com/th/id/OIP.btaF0gDwNXarub8VbjlzLwHaHa?pid=ImgDet&rs=1",
       "https://th.bing.com/th/id/OIP.abIQLYEvwILyiVKG3X3WaAHaEK?w=316&h=180&c=7&r=0&o=5&pid=1.7",
       "https://th.bing.com/th/id/OIP.8budQ-l4fTTu5jaFYZ5pOQHaHa?w=211&h=211&c=7&r=0&o=5&pid=1.7",
       "https://th.bing.com/th/id/OIP.Dy2XvNGogygYLM2oHmFftgHaHa?w=219&h=219&c=7&r=0&o=5&pid=1.7",
       "https://th.bing.com/th/id/R.4761f31631b0af72b91d7d8851847efb?rik=sTnQ9AMGeYBNcg&riu=http%3a%2f%2fstyloplanet.com%2fwp-content%2fuploads%2f2015%2f10%2fMen-causal-laceup-shoes-6.jpg&ehk=GBMMIf47tM3F82X76o2Jyq09GkoPRvVxY51viaVPeeE%3d&risl=&pid=ImgRaw&r=0"

    ]
    return (
     <View style={styles.carouselContainer}>
        <SliderBox images={slides}
       dotColor={COLORS.primary} 
       inactiveDotColor ={COLORS.secondary}
       ImageComponentStyle={{borderRadius: 15, width:"93%", marginTop: 15}}
       autoplay
       circleLoop
       />
     </View>
    )
}

export default Carousel

const styles = StyleSheet.create({
carouselContainer: {
    flex: 1, alignItems: "center"
}
})