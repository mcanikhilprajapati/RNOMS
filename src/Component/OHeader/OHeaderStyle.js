import {Dimensions, StyleSheet} from "react-native";
import {PixcelWidth} from "src/Utils";

const styles = StyleSheet.create({
    headerCont: {
        backgroundColor: '#F12761'
    },
    titleTxt:{
        color: '#fff', fontSize: 26, fontWeight: 'bold'
    },
    menuImg:{
        height: PixcelWidth(25),
        width: PixcelWidth(25),
        color: '#fff',
        margin:PixcelWidth(8)
    },
    searchImg:{
        marginRight: 8,
        tintColor:'#FFF',
        height: PixcelWidth(18),
        width: PixcelWidth(18),
    },
});
export default styles;

