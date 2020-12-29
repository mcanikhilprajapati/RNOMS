import React, {Component, useState} from 'react';
import styles from './CartRowItemStyle';
import {View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {add, people, minus, plus, close} from 'src/assets';
import {TextView} from 'src/Component';


const RowItem = props => {

    return (
        <View style={styles.prodCont}>
            <Image style={styles.imgCont}
                   source={people}
                   resizeMode={'stretch'}/>
            <View style={styles.prodDetails}>
                <TextView style={styles.proTitleTxt}>{props.item.pname}</TextView>
                <TextView style={styles.proQtyTxt}>{props.item.desc}</TextView>
                <TextView style={styles.proQtyTxt}>Qty: {props.item.qty}</TextView>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <TextView style={styles.prodPriceTxt}>${props.item.oprice}</TextView>
                    <TextView style={styles.prodPriceTxt1}>${props.item.dprice}</TextView>
                </View>

                <TouchableOpacity
                    onPress={() => {
                        props.onRemove && props.onRemove(props.item);
                    }}
                    style={styles.colseBtn}>
                    <Image
                        source={close}
                        resizeMode={'contain'}
                        style={styles.colseBtnImg}
                    />

                </TouchableOpacity>
            </View>

        </View>

    );

};


export default RowItem;
