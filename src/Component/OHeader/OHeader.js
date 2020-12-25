import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './OHeaderStyle';
import {connect} from 'react-redux';
import {arrowback, menu, home, search} from 'src/assets'
import TextView from '../TextView/TextView';
import {color} from "src/Theme";
import {Header} from 'react-native-elements';

class MainHeader extends React.Component {


    render() {
        const {titleCenter} = this.props;
        return (
            <Header
                backgroundColor="#F12761"
                leftComponent={
                    <TouchableOpacity onPress={() => {
                        this.props.menuPress && this.props.menuPress()
                    }}>
                        <Image source={arrowback} style={styles.menuImg}
                        />
                    </TouchableOpacity>}
                centerComponent={<TextView style={styles.titleTxt}>{titleCenter}</TextView>}
                containerStyle={styles.headerCont}
            >
            </Header>
        );
    }
}

export default MainHeader;
