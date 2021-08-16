import AnimatedLottieView from 'lottie-react-native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import styles from './styles'




const VerifiedScreen = () => {
    return (
        <View style={styles.container}>

            <AnimatedLottieView
                 source={require('../../res/assets/lottie/success.json')}
                 style={styles.lottieVerify}
                 loop
                 autoPlay
                
                 
                 
                
            />
            <Text onPress={ () => { setTimeout(() => { console.log("abcd")}, 3000)}} style={styles.text}> Success</Text>

        </View>
    )
}

export default VerifiedScreen


