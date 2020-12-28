import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './OHeaderStyle';
import {connect} from 'react-redux';
import {arrowback, menu, home, cart} from 'src/assets'
import TextView from '../TextView/TextView';
import {color} from "src/Theme";
import {Header} from 'react-native-elements';

class MainHeader extends React.Component {


    render() {
        const {titleCenter, navigation} = this.props;
        return (
            <Header
                backgroundColor="#F12761"
                leftComponent={
                    <TouchableOpacity onPress={() => {
                        navigation && navigation.goBack();
                    }}>
                        <Image source={arrowback} style={styles.menuImg}
                        />
                    </TouchableOpacity>}
                centerComponent={<TextView style={styles.titleTxt}>{titleCenter}</TextView>}
                containerStyle={styles.headerCont}
                rightComponent={<TouchableOpacity onPress={() => {
                    navigation && navigation.navigate("CartScreen")
                }}>
                    <Image source={cart} style={styles.menuImg}
                    />
                </TouchableOpacity>}
            >
            </Header>
        );
    }
}

export default MainHeader;
