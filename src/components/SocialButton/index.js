import React from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
const win = Dimensions.get('window');

const SocialButton = ({image, title, onpress}) => {
    return (
        <TouchableOpacity
            onPress={onpress}

        >
            <Image source={image} style={styles.image} />
            <Text style={styles.title}> {title}</Text>

        </TouchableOpacity>
    )
}

export default SocialButton

const styles = StyleSheet.create({
    container:{
        width: win.width,
        flexDirection:'row',


    },
    image:{
        
    },
    title:{

    },
})
