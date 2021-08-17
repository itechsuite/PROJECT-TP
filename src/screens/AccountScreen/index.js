import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-vector-icons/Icon'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import styles from './styles'

const AccountScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <FontAwesome5  size={30} color={"#333"} name={"times"} />


                {/* <Icon name="home" /> */}
                <Text style={styles.headerText}> Account</Text>
                <FontAwesome5 size={30} name={"check"} color={'#32BEA6'} />

            </View>
            <View style={styles.profileInfo}>
                <View style={styles.imageHolder}>
                    

                </View>
                
                <Text style={styles.headerText}> John Doe</Text>


            </View>


        </View>
    )
}

export default AccountScreen

