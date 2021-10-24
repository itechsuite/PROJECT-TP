import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import CommandBtn from '../../components/CommandBtn'
import Header from '../../components/Header'
import Global from '../../constants/Global'
import styles from './styles'


const NoData = ( props) => {
    return (
        <View style={styles.nodata}>
            <Image   
                source={require('../../res/images/favorite.png')}
                style={[styles.nodataImage]}    
            
                />
             <Text style={{color:'#000'}}> Any order you make will appear here</Text>

        </View> 


    )
}

const HistoryScreen = ({navigation}) => {
    return (
        <View style={Global.styles.container}>
            <Header 
                headerName={"History"}
                headerStyle={{ marginStart:100, }}
                onPress={() => navigation.goBack()}
            />

            <View style={styles.subContainer}>
                <NoData />


            <View style={styles.button} > 
            <CommandBtn 
                 title={"Go to Menu"}
                 style={{color:'white',  }}
                />
            </View>
              

            </View>

        </View>
    )
}

export default HistoryScreen


