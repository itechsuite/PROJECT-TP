import React from 'react'
import { StyleSheet, Text, View, useWindowDimensions, Image, Dimensions } from 'react-native'
import { backgroundColor } from 'styled-system';


const OnboardItem = ({item}) => {
const {width} = useWindowDimensions();

    return (
        <View style={[styles.container, {width} ]}>

            <Image 
                source={item.image}
                style={[styles.image, {width,}]}

            />
            <View style={{flex:0.3}} > 
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}> {item.description}</Text>

            </View>


        </View>
    )
}

export default OnboardItem

const styles = StyleSheet.create({
    container:{
       flex:1,
       alignItems:'center', 
       justifyContent:'center'


    },
    image:{
        justifyContent:'center',
        resizeMode:'contain',
        flex:0.7, 
        

    },
    title:{
        fontWeight:'800',
        fontSize:28,
        marginBottom:10,
        color:'#493d8a', 
        textAlign:'center', 



    }, 
    description:{
        fontWeight:'300',
        color:'#62656b',
        textAlign:'center', 
        paddingHorizontal:64,
    },

})
