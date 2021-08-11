import React , {useState, useRef} from 'react'
import { FlatList, StyleSheet, Text, View , Animated} from 'react-native'
import Data from '../../components/Demo/Data'
import OnboardItem from '../../components/Demo/OnboardItem'
const Demo = () => {
    const scrollx = useRef(new Animated.Value(0)).current
    const [currentIndex, setCurrentIndex] = useState(0)

    const viewableItemsChanged = ({viewableItems, changed}) => {
        console.log(viewableItems);
        setCurrentIndex(viewableItems[0].index)
    }

    const slideRef = useRef(null);
    const viewConfig = useRef({ 
        minimumTime:500,
        itemVisiblePercentThreshold:40,

    }).current
    const viewabilityConfigCallbackPairs = useRef([{ viewableItemsChanged}], ()=>{
        console.log(viewableItemsChanged)
    })
    return (
        <View  style={styles.container}>
            <FlatList 

                data={Data}
                renderItem={({item}) => <OnboardItem item={item} />}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator
                bounces={false}
                keyExtractor={(item) => item.id}
                ref={slideRef}
                onScroll ={
                    Animated.event([{nativeEvent: {contentOffset: {x:scrollx}}}], 
                        {
                            useNativeDriver:false})
                }

               
                viewabilityConfigCallbackPairs = {viewabilityConfigCallbackPairs.current}
                
                viewabilityConfig = {viewConfig}
                scrollEventThrottle={32}

            />
        </View>
    )
}

export default Demo

const styles = StyleSheet.create({
container:{
    flex:1,
    justifyContent:'center', 
    alignItems:'center', 

}
})
