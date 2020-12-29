import React, {Component} from 'react';
import {FlatList, TextInput, TouchableOpacity, View} from 'react-native';
import {Container, Content} from 'native-base';
import styles from './CartScreenStyle';
import {OHeader, TextView} from 'src/Component';
import RowItem from './CartRowItem';
import {connect} from 'react-redux';
import {createSelector} from 'reselect';
import {removeProductByID} from 'src/store/global'
class CartScreen extends Component {

    FlatListItemSeparator = () => {
        return (
            <View style={{height: 10}}/>
        );
    };

    render() {


        return (
            <Container>
                <OHeader
                    navigation={this.props.navigation}
                    titleCenter={'Cart'}
                />
                <Content style={styles.container}
                         showsHorizontalScrollIndicator={false}
                         showsVerticalScrollIndicator={false}
                >
                    <TextView style={styles.titleCont}>YOUR ORDERS</TextView>
                    <View style={styles.couponCont}>
                        <TextInput
                            placeholder="Coupon Number"
                            style={styles.couponInput}
                            placeholderStyle={{marginLeft: 5}}
                        />
                        <TouchableOpacity style={styles.applyBtn}>
                            <TextView style={styles.applyBtnTxt}>Apply</TextView>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        style={{marginTop: 10}}
                        data={this.props.cart}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        renderItem={({item, index}) => (
                            <RowItem item={item} onRemove={(item) => {
                               this.props.removeProductByID(item)
                            }}/>
                        )}

                    />

                </Content>
                <View style={styles.bottomCont}>
                    <TextView
                        style={[styles.subTotalTxt, {margin: 10}]}>Subtotal ${this.props.total}</TextView>
                    <TextView style={styles.bottomTxt} numberOfline={2}>Do you want to pay for the goods?</TextView>
                    <TouchableOpacity style={styles.chkoutBtn}>
                        <TextView style={styles.chkoutBtnTxt}>CheckOut</TextView>
                    </TouchableOpacity>
                </View>
            </Container>
        );
    }
}


const mapActionCreators = {removeProductByID};

const mapStateToProps = state => {
    const shopItemsSelector = state => state.global.cart;
    const subtotalSelector = createSelector(
        shopItemsSelector,
        cart => cart.reduce((oprice, item) => oprice + (Number(item.oprice) * Number(item.qty)), 0),
    );
    return {
        cart: state.global.cart,
        total: subtotalSelector(state),
    };
};


export default connect(
    mapStateToProps,
    mapActionCreators,
)(CartScreen);

