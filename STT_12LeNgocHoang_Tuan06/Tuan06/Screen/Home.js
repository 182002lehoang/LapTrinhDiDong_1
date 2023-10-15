import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, Pressable} from 'react-native';



const Home =()=>{
    return(
        <View style={styles.container}>
            <View style={styles.view}>
             <Image
                 source={require('../assets/BlackPhone.png')}
                style={styles.img1}
             ></Image>
            </View>
            <View style={styles.view1}>
                <Text style={styles.text}>
                     Điện Thoại Vsmart Joy 3 - Hàng chính hãng
              </Text>
            </View>
            <View style={styles.group1}>
                <Image
                 source={require('../assets/star.png')}
                 style={styles.img2}
                ></Image>
                 <Image
                 source={require('../assets/star.png')}
                 style={styles.img2}
                ></Image>
                 <Image
                 source={require('../assets/star.png')}
                 style={styles.img2}
                ></Image>
                 <Image
                 source={require('../assets/star.png')}
                 style={styles.img2}
                ></Image>
                 <Image
                 source={require('../assets/star.png')}
                 style={styles.img2}
                ></Image>
                 <Text style={styles.text1}>(Xem 200 đánh giá)</Text>
            </View>
            <view style={styles.group2}>
                <text style={styles.text2} > 1.790.000đ</text>
                <text style={styles.text3}>1.790.000đ</text>
            </view>
            <view style={styles.group3}>
                <text style={styles.text4}> Ở đâu rẻ hơn hoàn tiền</text>
                <Image
                 source={require('../assets/question.png')}
                 style={styles.img3}
                ></Image>
            </view>
            <View style={styles.group4}>
                <Pressable style={styles.Pre} onPress={() => handleChoose()}>
                <Text style={styles.text5}>Chọn màu mong muốn</Text>
                <Image
                    source={require("../assets/RightArrow.png")}
                     style={styles.img4}
                 ></Image>
                </Pressable>
             </View>
             <View style={styles.group5}>
                 <Pressable style={styles.btnchon} onPress={() => alert('Xác nhận mua thành công!')}>
                 <Text style={styles.textBtn}>CHỌN MUA</Text>
                 </Pressable>
            </View>


        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    view:{
        flex : 1,
        alignItems:'center'
        
    },
    img1:{
        flex:1,
        width: 300,
        height:300,
        alignItems:'center',
    },
    view1:{
        alignItems:'flex-start',
    },
    text:{
        flex:1,
        fontSize:15,

    },
    text1: {
        padding: 10,
        paddingRight: 20,
        fontSize: 18,
    },
    text2:{
        padding: 50,
        paddingRight: 100,
        fontSize:15,
        left:-100,
        fontWeight:"bold",
        
    },
    text3:{
        padding: 30,
        paddingRight: 50,
        fontSize:15,
        right:100,
    },
    text4:{
       
        color:"red",
        fontSize:20,
        textAlign:'left',

    },
    text5:{
        fontSize:20,
        textAlign:'center',
    },
    group1: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
   
    group2:{
        flexDirection:'row',
    },
    group3:{
        flexDirection:'row',
    },
    group4:{
        flexDirection:'row',
    },
    group5:{
        
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
    },
    img2:{
        flex:1,
        width:15,
        height:15,
        marginTop:15,
    },
    img3:{
        width:15,
        height:15,
        marginRight:10,
        alignItems: "center",

    },
    img4:{
        width: 12,
        height: 14,
        position: "absolute",
        margin: 5,
        marginLeft: 250,
    
    },
    btnchon: {
        height: 50,
        width: 370,
        backgroundColor: "red",
        borderRadius: 20,
      },
    textBtn:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
        marginTop:10,
    },
    Pre: {
        borderWidth: 1,
        borderRadius: 20,
        height: 50,
        width: 300,
        padding: 10,
      },

      
  });
  export default Home;