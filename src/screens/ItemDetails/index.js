import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import styles from './styles'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Global from '../../constants/Global'
import DummyDescription from '../../constants/Dummy/DummyDescription'
import NormalButton from '../../components/NormalButton'
import CommandBtn from '../../components/CommandBtn'


const dummy  = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "

const ItemDetails = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <FontAwesome5  name="angle-left"  size={20} style={styles.backBtn}/>
                <FontAwesome5  name="heart" size={20} style={styles.favorite}  color={Global.color.primary} solid />
            </View>

            <View style = {styles.subContainer}>
                <View style={styles.imageHolder}> 
                    <Image
                        source={require('../../res/images/foodItems/spaghetti.jpg')}
                        style={styles.image}
                    
                    />
                    <Text style={styles.rating}>4.9</Text> 
                    <Text> Rating Level </Text>
                    
                </View>

                <Text style={styles.itemName}> Spaghetti</Text>
                <Text style={styles.amount}> N1000</Text>
                <Text style={styles.description}> Description</Text>
                <Text style={styles.descriptions}> {DummyDescription} </Text>


                <NormalButton
                    title={"Buy now "}
                    style={styles.button}
                    _titleStyle={styles.buttonText}
                />

            </View>
        </View>
    )
}


export default ItemDetails

