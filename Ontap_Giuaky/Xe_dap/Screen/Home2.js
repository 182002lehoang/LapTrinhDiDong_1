import React, { useState } from "react";
import { View, StyleSheet, Text, Image, Pressable, style, FlatList } from "react-native";
import xedap from "../data";
const Home2 = ({navigation}) => {
    const [bike,setBike] = useState(xedap);
    return (
        <View style={styles.container}>
            <Text style={styles.text}>The world’s Best Bike</Text>

            <View style={styles.view}>
                <Pressable style={styles.view1} onPress={()=>{
                    
                    setBike(xedap)    
                    
                }}>
                    <Text style={styles.text1}>All</Text>
                </Pressable>
                <Pressable style={styles.view1} onPress={()=>{
                    const xe = xedap.filter((item)=>{
                        return item.mota=='Pinarello'

                    })
                    setBike(xe)
                }}>
                    <Text style={styles.text1}>Roadbike</Text>
                </Pressable>
                <Pressable style={styles.view1} onPress={()=>{
                    const xe = xedap.filter((item)=>{
                        return item.mota=='Moountain bike'

                    })
                    setBike(xe)
                }}>
                    <Text style={styles.text1}>Mountain</Text>
                </Pressable>
            </View>
            <View style={styles.view4}>
                <FlatList
                    numColumns={2}
                    data={bike}
                    renderItem={({item}) =>(
                            <Pressable onPress={()=>(
                                navigation.navigate('Home3')
                            )} style={styles.view2}>
                                <Image source={require('../assets/IMG/tim1.png')} style={styles.img}></Image>
                                <Image source={item.imgae1} style={styles.img2} ></Image>
                                <View style={styles.view3}>
                                    <Text style={styles.text2}>{item.name}</Text>
                                    <Text style={styles.text2}>{item.money}</Text>
                                </View>
                            </Pressable>
                    )}
                    keyExtractor={item => item.id}
                >
                    
                </FlatList>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    text: {
        fontSize: 25,
        color: 'red',
        fontWeight: 'bold'
    },
    view: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 20

    },
    view1: {
        borderWidth: 1,
        width: 99,
        height: 32,
        borderRadius: 10

    },
    text1: {
        fontSize: 20,
        textAlign: 'center'
    },
    view2:{
        alignItems:'center',
        justifyContent:'space-around',
        margin:30,
        backgroundColor:'pink',
        borderRadius:20,
      
        
    },
    img:{
        width:25,
        height:25,
        left:-50
    },
    img2:{
        width:135,
        height:127,
    },
    view3:{
        justifyContent:'center',
        alignItems:'center',
    },
    text2:{
        fontSize:20,
        textAlign:'center'
    },
    view4:{
        alignItems:'center',
        justifyContent:'space-around',
        
    }
})

export default Home2;