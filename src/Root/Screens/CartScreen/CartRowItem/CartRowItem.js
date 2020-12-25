import React, { Component, useState } from 'react';
import styles from './CartRowItemStyle';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import {add,  people, minus,plus,close} from 'src/assets'
import {TextView} from 'src/Component';

const data = [{id:1},{id:2},{id:3}]
const RowItem = props => {

    return (
        <View style={styles.prodCont}>
            <Image style={styles.imgCont}
                   source={people}
                   resizeMode={'stretch'} />
            <View style={styles.prodDetails}>
                <TextView style={styles.proTitleTxt}>Catbird Black</TextView>
                <TextView style={styles.proQtyTxt}>Ankle Length Bootie</TextView>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <TextView style={styles.prodPriceTxt}>$47.00</TextView>
                    <TextView style={styles.prodPriceTxt1}>$47.00</TextView>
                </View>

                <TouchableOpacity style={styles.colseBtn}>
                    <Image
                        source={close}
                        resizeMode={'contain'}
                        style={styles.colseBtnImg}
                    />

                </TouchableOpacity>
            </View>
            <View style={{ justifyContent: 'space-between' }}>

                {/* <TextView style={styles.prodPriceTxt}>Rs.{item.price?.product_price}</TextView> */}

            </View>
        </View>

    );

};


export default RowItem;
