import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import styles from './styles'

const Onboard = ({image, title, description}) => {
    return (
        <View style={styles.container}>
            <Image 
                
                source={image}
                style={styles.image}
            />
            <Text style={styles.title}> {title} </Text>
            <Text style={styles.description} > {description}</Text>
        </View>
    )
}

export default Onboard

