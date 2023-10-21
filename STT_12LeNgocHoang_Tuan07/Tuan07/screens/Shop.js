import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image, Pressable,style, TextInput} from 'react-native';

const Shop =()=>{
    return(

       <View style={styles.container}>
         <View style={styles.view}>
            <Pressable>
                <Image style={styles.img} source={require('../assets/IMG/back.png')}></Image>
            </Pressable>
            <Image style={styles.img2} source={require('../assets/IMG/tim.png')}></Image>
            <TextInput style={styles.ip} placeholder='Dây cáp usb'>
                        
            </TextInput>
            <Pressable>
                <Image style={styles.img3} source={require('../assets/IMG/shop.png')}></Image>
            </Pressable>
            <Pressable>
                <Image style={styles.img4} source={require('../assets/IMG/more.png')}></Image>
            </Pressable>
        </View>
       </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    view:{
        
        flexDirection:"row",
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor:'#1BA9FF'
        
    },
    img:{
        width:30,
        height:30
    },
    
    ip:{
        
        width:192,
        height:30,
        borderWidth:1,
        padding:10,
        paddingLeft:30,
        backgroundColor:'#fff'
    },
    img2:{
        width:22,
        height:20,
        position:'relative',
        left:47

    },
    img3:{
        width:24,
        height:24,
    },
    img4:{
        width:18,
        height:18,
        resizeMode:'contain',
        
    }
});
export default Shop;