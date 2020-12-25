import { StyleSheet } from 'react-native';
import {PixcelWidth} from "src/Utils";
import { color, font } from 'src/Theme';
const styles = StyleSheet.create({
    prodCont: {
        flex: 1,
        padding: 15,
        //marginTop:10,
        flexDirection: 'row',
        //alignItems: 'center',
        backgroundColor: '#F3F4F5',
    },
    imgCont: {
        height: PixcelWidth(120),
        width:PixcelWidth(100),
        borderRadius: 5,
        overflow:'hidden',
        //backgroundColor: 'red',
    },
    prodDetails: {
        flex: 1,
        marginTop:PixcelWidth(5),
        marginLeft: PixcelWidth(20),
        //width: '50%'
    },
    proTitleTxt: {
        fontSize: PixcelWidth(18),
        //flexWrap: 'wrap',
        color: '#3D3D3D',
        fontWeight: '500',
        fontFamily: font.robotoMedium
    },
    proQtyTxt: {
        //fontFamily: font.poppinsMedium,
        fontSize: PixcelWidth(16),
        color: '#BABABA'
    },
    additemCont: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 5,
        alignItems: 'center',
        //justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        //padding: 10,
    },

    addCartTxt: {
        fontSize: 16,
        //fontFamily: font.poppinsSemibold,
    },
    prodPriceTxt: {
        fontSize: PixcelWidth(16),
        color: '#2ac1ec',
        //fontFamily: font.poppinsSemibold,
    },
    prodPriceTxt1: {
        marginTop:PixcelWidth(2),
        marginLeft: PixcelWidth(8),
        fontSize: PixcelWidth(12),
        color: '#ada9a8',
        //fontFamily: font.poppinsSemibold,
    },
    colseBtn:{
        height: PixcelWidth(28),
        width: PixcelWidth(28),
        right:5,
        position:'absolute',
        marginTop: 10,
        alignContent: 'center',
        backgroundColor: 'grey',
        justifyContent: 'center',
        borderRadius:PixcelWidth(14),
    },
    colseBtnImg: {
        //marginTop: -7,
        tintColor:'#FFF',
        alignSelf:'center',
        width: PixcelWidth(12),
        height: PixcelWidth(12),
    },
});
export default styles;
