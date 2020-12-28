import {StyleSheet} from 'react-native';
import {PixcelWidth} from "src/Utils";
import {font} from 'src/Theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        margin: 'auto',
        backgroundColor: '#FCFCFC'
    },
    innerContainer: {
        padding: 15,
        backgroundColor: '#ffffff',

    },
    title: {
        color: '#50A2EC',
        // fontFamily: 'Arial',
        fontWeight: 'bold',
        fontSize: 36,
        marginBottom: 6,
    },
    line: {
        width: 70,
        height: 2.5,
        backgroundColor: '#50A2EC',
        marginBottom: 30
    },
    inputBox: {
        fontSize: PixcelWidth(16),
        // fontFamily: font.robotoRegular,
        borderColor: '#32394320'
    },
    pickerStyle: {
        marginLeft: 10,
        borderBottomWidth: 1,
        width: '95%',
        borderColor: '#DDDDDD',
        //marginTop: 10,
    },
    pickerTxt: {
        color: '#313A4380',
        //fontWeight:'bold',
        fontSize: PixcelWidth(16),
    },
    imgCont: {
        marginTop: PixcelWidth(10),
        alignItems: 'center',
    },
    prodImg: {
        height: PixcelWidth(150),
        backgroundColor: 'grey',
        borderRadius: 8,
        width: PixcelWidth(250),
    },
    browseBtn: {
        marginTop: PixcelWidth(15),
        paddingHorizontal: 10,
        borderRadius: 5,
        backgroundColor: "#F12761"
    },
    browseBtnTxt: {
        color: '#fff',
        fontSize: 16,
        // fontFamily: font.robotoBold,
        textAlign: 'center',
        margin: 10,
    },
    button: {
        marginTop: PixcelWidth(40),
        marginHorizontal: 10,
        borderRadius: 20,
        backgroundColor: "#332228"
    },
    btnText: {
        color: '#fff',
        fontSize: 16,
        // fontFamily: font.robotoBold,
        textAlign: 'center',
        marginVertical: 12,
    }
});
export default styles;
