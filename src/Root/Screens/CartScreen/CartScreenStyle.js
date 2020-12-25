import { StyleSheet, Dimensions } from 'react-native';

const wp = Dimensions.get('window').width;
const wh = Dimensions.get('window').height;
//import { color, font } from 'scr/Theme';
import {PixcelWidth} from "src/Utils";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        alignContent: 'center',
        margin: 'auto',
        //padding: 15,
        backgroundColor: '#F3F4F5',
        //backgroundColor: 'red',
    },
    titleCont:{
        fontSize:PixcelWidth(16),
       backgroundColor: '#FFF',
       marginTop:PixcelWidth(15),
        padding:15,
    },
    titleTxt:{
        fontSize:PixcelWidth(18),
    },
    couponCont:{
        flexDirection:'row',
        padding:PixcelWidth(15),
        //marginTop: PixcelWidth(15),
    },
    couponInput:{
        backgroundColor:'#FFF',
        borderWidth:0.5,
        width:'55%',
        padding:7,
        borderRadius:PixcelWidth(30),
    },
    applyBtn:{
       backgroundColor:'#332227',
        marginLeft:PixcelWidth(15),
       borderRadius: PixcelWidth(30),
       alignItems:'center',
        justifyContent:'center',
        width: '35%'
    },
    applyBtnTxt:{
        fontSize:PixcelWidth(16),
        color:'#FFF',
    },
    totalCont:{
        flexDirection: 'row',
        padding: PixcelWidth(15),
        //marginLeft:PixcelWidth(20),
    },
    subTotalTxt:{
        fontSize:16,
        color: '#323232',
    },
    bottomCont:{
        marginVertical:20,
        height:PixcelWidth(100),
        backgroundColor:'#FFF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomTxt:{
      fontSize:24,
        marginHorizontal:40,
        textAlign:'center'
    },
    chkoutBtn:{
        backgroundColor:'#332227',
        marginTop: PixcelWidth(15),
        borderRadius: PixcelWidth(30),
        alignItems:'center',
        justifyContent:'center',
        width: '80%'
    },
    chkoutBtnTxt:{
        fontSize:PixcelWidth(18),
        color:'#FFF',
        marginVertical:PixcelWidth(10),
    },


});
export default styles;
