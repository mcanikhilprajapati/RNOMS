import { StyleSheet, Dimensions } from "react-native";
import { color,font } from "src/Theme";
import {PixcelWidth} from "src/Utils";
const wp = Dimensions.get('window').width;

const styles = StyleSheet.create({
    headerCont: {
        //height: 90,
        backgroundColor: '#F12761'
    },
    titleTxt:{
        color: '#fff', fontSize: 26, fontWeight: 'bold'
    },
    menuImg:{
        height: PixcelWidth(12),
        width: PixcelWidth(18),
        color: '#fff',
        marginLeft:PixcelWidth(8)
    },
    searchImg:{
        marginRight: 8,
        tintColor:'#FFF',
        height: PixcelWidth(18),
        width: PixcelWidth(18),
    },
});
export default styles;

