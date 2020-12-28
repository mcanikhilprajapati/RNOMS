import { StyleSheet, Dimensions } from 'react-native';

const wp = Dimensions.get('window').width;
const wh = Dimensions.get('window').height;
//import { color, font } from 'scr/Theme';
import {PixcelWidth} from "src/Utils";
const styles = StyleSheet.create({
    imgCont:{
        height:wp/2,
        width:'100%',
        backgroundColor:'grey'
    },
    titleImg:{
        height:wp/1.7,
        resizeMode:'contain',
        alignSelf:'center'
    },
    tabStyle: {
        backgroundColor: '#fff',
        height: 50,
    },
    activeTabStyle: {
        backgroundColor: '#fff',
        height: 50,
    },
    textStyle: {
        color: "#313A43",
        fontSize: 16,
        // fontFamily: "Roboto",
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 19,
        opacity: 0.5,
    },
    activeTextStyle: {
        color: '#000',
        fontSize: PixcelWidth(16),
        // fontFamily: "Roboto",
        fontWeight: "bold",
        fontStyle: "normal",
        //lineHeight: 19,
    },
    tabBarUnderlineStyle: {
        backgroundColor: '#F12761',
        height: 3,
        // width: 92,
        // marginHorizontal: 20,
    },
    addImgCont:{
        height: PixcelWidth(56),
        width:PixcelWidth(56),
        borderRadius:PixcelWidth(28),
        backgroundColor:'#50A0EA',
        alignItems:'center',
        justifyContent:'center',
        bottom:30,
        right:20,
        position:'absolute'
    },
    plusImg:{
        height: PixcelWidth(25),
        width:PixcelWidth(25),
        alignSelf:'center',
    },

});
export default styles;
