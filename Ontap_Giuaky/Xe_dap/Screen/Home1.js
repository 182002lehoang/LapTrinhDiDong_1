import React from "react";
import { View, StyleSheet, Text, Image, Pressable } from "react-native";

const Home1 = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.view}>
                <Text style={styles.text}> A premium online store for sporter and their stylish choice</Text>
            </View>

            <View style={styles.view1}>
                <Image style={styles.img} source={require('../assets/IMG/xanh1.png')}></Image>

            </View>

            <View style={styles.view2}>
                <Text style={styles.text1}>POWER BIKE
                    SHOP</Text>

            </View>

            <View style={styles.view3}>
                <Pressable onPress={()=>(
                    navigation.navigate('Home2')
                )}>
                    <Text style={styles.text2}>Get Started</Text>
                </Pressable>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'

    },
    view: {

        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 11

    },
    text: {
        fontSize: 26,
        fontWeight: 400,
        textAlign: 'center'
    },
    view1: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'pink',
        borderRadius: 20,
        width: 360,
        height: 388

    },
    img: {
        width: 292,
        height: 270,


    },
    view2:{
        justifyContent:'center',
        alignItems:'center',
        
        
    },
    text1:{
        fontSize:26,
        fontWeight:700,
        width:200,
        textAlign:'center',
        paddingTop:12

    },
    view3:{
        width:340,
        height:60,
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20

    },
    text2:{
        fontSize:25,
        fontWeight:100,
        color :'white',
        textAlign:'center'
    }


})

export default Home1;