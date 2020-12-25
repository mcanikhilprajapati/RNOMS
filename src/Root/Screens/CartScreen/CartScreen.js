import React, { Component } from 'react'
import {Text, TouchableOpacity, View,TextInput, StyleSheet, FlatList, Image} from 'react-native';
import { Icon } from 'react-native-elements';
import { Container, Content, Tab, Footer, ScrollableTab } from 'native-base';
import styles from './CartScreenStyle';
import {add,  people, minus,plus,shopping} from 'src/assets'
import {TextView,OHeader} from 'src/Component';
import RowItem from "./ProdRowItem";
const data = [{id:1},{id:2},{id:3}]

export class CartScreen extends Component {

    constructor() {
        super()
        this.state = {}
    }
    FlatListItemSeparator = () => {
        return (
            //Item Separator
            <View style={{ height: 10, }} />
        );
    };
    render() {

        return (
            <Container>
                <OHeader
                    //isMenu={true}
                    //isSearch={true}
                    titleCenter={"Cart"}
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
                            placeholderStyle={{marginLeft:5, }}
                            />
                            <TouchableOpacity style={styles.applyBtn}>
                                <TextView style={styles.applyBtnTxt}>Apply</TextView>
                            </TouchableOpacity>
                    </View>
                <FlatList
                    style={{ marginTop:10, }}
                    data={data}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    //ItemSeparatorComponent={this.FlatListItemSeparator}
                    renderItem={({ item, index }) => (
                        <RowItem/>
                    )}

                />
                <View style={styles.totalCont}>
                    <TextView style={styles.subTotalTxt}>Subtotal</TextView>
                    <TextView style={[styles.subTotalTxt,{marginLeft:15}]}>2,456</TextView>
                </View>

                </Content>
                <View style={styles.bottomCont}>
                    <TextView style={styles.bottomTxt} numberOfline={2}>Do you want to play for the goods?</TextView>
                    <TouchableOpacity style={styles.chkoutBtn}>
                        <TextView style={styles.chkoutBtnTxt}>CheckOut</TextView>
                    </TouchableOpacity>
                </View>
            </Container>
        )
    }
}

export default CartScreen;
