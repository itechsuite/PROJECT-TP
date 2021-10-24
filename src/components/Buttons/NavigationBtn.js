import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Global from '../../constants/Global'

const NavigationBtn = (props) => {
    return (
        <>
            <Text  style={styles.button}> {props.title} </Text>
        </>
    )
}

export default NavigationBtn

const styles = StyleSheet.create({
    button:{    
        borderRadius:5, 
        padding:4, 
        color:Global.color.primary,
        margin:10, 
        borderWidth:1, 
        borderColor:Global.color.primary,
        textTransform:'uppercase', 
        

    }, 

})
