import { StyleSheet, Dimensions } from 'react-native';

const wp = Dimensions.get('window').width;
const wh = Dimensions.get('window').height;
import { color, font } from 'src/Theme';
import {PixcelWidth} from "src/Utils";
const styles = StyleSheet.create({


    container: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        alignContent: "center",
        padding: 10,
    },
    ItemTitle: {
        color: '#313A43',
        fontSize: 16,
        fontFamily: "Roboto",
        fontWeight: "normal",
        lineHeight: 19,
        fontStyle: "normal"
    },

    ItemSales: {
        color: '#313A43',
        fontSize: 12,
        fontFamily: font.robotoRegular,
        borderColor: '#313A43',
        borderWidth: 1,
        borderRadius: 4,
        marginTop: 5,
        paddingHorizontal: 10,
        paddingVertical: 2
    },


    addImgCont:{
        height: PixcelWidth(56),
        width:PixcelWidth(56),
        borderRadius:PixcelWidth(28),
        backgroundColor:'#50A0EA',
        bottom:0,
        position:'absolute'
    },
    plusImg:{
        height: PixcelWidth(25),
        width:PixcelWidth(25),
        alignSelf:'center',
    },

});
export default styles;
