import { StyleSheet } from 'react-native';
import {PixcelWidth} from "src/Utils";
import { color, font } from 'src/Theme';
const styles = StyleSheet.create({
    prodCont: {
        flex: 1,
        padding: 15,
        flexDirection: 'row',
        //alignItems: 'center',
        backgroundColor: '#FFFFFF',
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
    addBtn: {
        height: 27,
        width: 27,
        //marginHorizontal: 8,
        alignContent: 'center',
        backgroundColor: '#F12761',
        justifyContent: 'center',
        borderRadius: 5,
    },
    plusBtn: {
        alignSelf: 'center',
        tintColor: '#FFF',
        height: 15, width: 15,
    },
    minusBtn: {
        alignSelf: 'center',
        tintColor: '#FFF',
        height: 17, width: 13,
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
    colseBtn: {
        //marginTop: -7,
        width: 16,
        height: 16, alignSelf: 'flex-end',
    },
});
export default styles;
