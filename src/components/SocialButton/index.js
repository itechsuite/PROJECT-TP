import React from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import SvgUri from 'react-native-svg-uri'
import { style } from 'styled-system';

const win = Dimensions.get('screen');

const SocialButton = ({image, title, onpress}) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onpress}

        >
            <View style={styles.button}>

                <Image 
                    source={image}
                    style={styles.image}
                
                />

                <Text 
                    style={styles.title}> 
                    {title}
                </Text>

            </View>

        </TouchableOpacity>
    )
}

export default SocialButton

const styles = StyleSheet.create({
    container:{
        resizeMode:'contain',

    },
    button:{
        flexDirection:'row',
        width: win.width -40,
        backgroundColor:'#E4E4E5', 
        padding:20,
        margin:20,
        borderRadius:8,
        alignItems:'center',


    },
    image:{
        width:30,
        height:30,
    },
    title:{
        marginStart:10,
        fontWeight:'bold',
        fontSize:15,
    },
})
