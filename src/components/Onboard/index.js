import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import styles from './styles'

const       Onboard = ({image, title, description}) => {
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

  {/* <View key="1">
                        <Onboard 
                            image={require('../../res/images/burger.png')}
                            title="Tasty Meals"
                            description="Our Delivery system has been optimized to
                             service multiple orders in a very short time"
                        />

                    </View>

                    <View key="2">
                        <Onboard 
                            image={require('../../res/images/payment.png')}
                            title="Fast Payment"
                            description="Get Done with Payment with few easy steps"
                        />

                    </View>

                    <View key="3">
                        <Onboard 
                            image={require('../../res/images/favorite.png')}
                            title="Order Your Favorites"
                            description="Our Delivery System  has been optimized to service 
                            multiple orders in a very short time"
                        />

                    </View> */}
