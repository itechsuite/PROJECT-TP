import React from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import styles from './styles'
// import styles
import Styles from './styles'

const OnboardingScreen = () => {
    return (
        <View style ={styles.container}>
            <View style={styles.header}> 
                {/* the promise logo */} 
                <Image 
                source={require('../../res/images/logo.png')}
                style ={styles.logoSize}
                resizeMode={'contain'}
                />
            </View>

            <View>
                <FlatList 
                
                />
            </View>
        </View>
    )
}

export default OnboardingScreen


