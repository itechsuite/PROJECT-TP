import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import {NativeBaseProvider,Center, Button} from 'native-base'
import Global from '../constants/Global'

const {width, height} = Dimensions.get('screen')
const CommandBtn = ({title, style , onPress}) => {
    return (
                <View  style={[ styles.commandBtn,style]} >
                   <NativeBaseProvider>
                        <Button
                            width={width}
                            height={height}
                            bg={Global.color.primary}
                            style={[styles.commandBtn,   ]}
                            _text={style}
                            onPress ={onPress}
                        >

                            {title}                            
                        </Button>
                    </NativeBaseProvider> 
                </View>

    )
}

export default CommandBtn

const styles = StyleSheet.create({
    commandBtn:{
    }, 
    CommandText:{
        textTransform:'uppercase',
        color: Global.color.white, 
        fontWeight:'bold',

    }, 
})
