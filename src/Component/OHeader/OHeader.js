import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import styles from './OHeaderStyle';
import {arrowback, cart,list} from 'src/assets';
import TextView from '../TextView/TextView';
import {Header} from 'react-native-elements';

class MainHeader extends React.Component {


    render() {
        const {titleCenter, navigation, product} = this.props;
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
                    if(product)
                    navigation && navigation.navigate('ProductlistScreen');
                    else
                    navigation && navigation.navigate('CartScreen');
                }}>
                    <Image source={product?list:cart} style={styles.menuImg}
                    />
                </TouchableOpacity>}
            >
            </Header>
        );
    }
}

export default MainHeader;
