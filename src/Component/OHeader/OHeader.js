import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './OHeaderStyle';
import { connect } from 'react-redux';
import { arrowback,menu,home,search } from 'src/assets'
import TextView from '../TextView/TextView';
import { color } from "src/Theme";
import {Header} from 'react-native-elements';

class MainHeader extends React.Component {


    render() {
        const { isMenu, titleCenter, navigation, isSearch } = this.props;
        return (
            <Header
                leftComponent={
                    <TouchableOpacity  onPress={() => {
                        if (isMenu) {
                            this.props.menuPress && this.props.menuPress()
                        } else {
                           this.props.navigation.goBack();
                        }

                    }}>
                    <Image source={isMenu ? menu : arrowback} style={styles.menuImg}
                />
                    </TouchableOpacity>}
                centerComponent={<TextView style={styles.titleTxt}>{titleCenter}</TextView>}
                rightComponent={<Image source={isSearch ? search : ''} style={styles.searchImg} />}
                containerStyle={styles.headerCont}
            >
            </Header>
        );
    }
}

export default MainHeader;
