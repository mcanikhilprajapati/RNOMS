import React, {Component, useState} from 'react';
import styles from './ProdRowItemStyle';
import {View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {add, people, minus, plus} from 'src/assets'
import {TextView} from 'src/Component';

const data = [{id: 1}, {id: 2}, {id: 3}]
const RowItem = props => {

    return (
        <TouchableOpacity
            onPress={() => {
                props.onSelect && props.onSelect();
            }}
            style={styles.prodCont}>
            <Image style={styles.imgCont}
                   source={people}
                   resizeMode={'stretch'}/>
            <View style={styles.prodDetails}>
                <TextView style={styles.proTitleTxt}>Catbird Black</TextView>
                <TextView style={styles.proQtyTxt}>Ankle Length Bootie</TextView>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <TextView style={styles.prodPriceTxt}>$47.00</TextView>
                    <TextView style={styles.prodPriceTxt1}>$47.00</TextView>
                </View>
                <View style={{flexDirection: 'row', marginTop: 5}}>
                    <View style={styles.additemCont}>
                        <TouchableOpacity style={styles.addBtn}>
                            <Image
                                style={styles.minusBtn}
                                source={minus}
                                resizeMode={'contain'}
                            />
                        </TouchableOpacity>
                        <TextView style={[styles.addCartTxt, {marginHorizontal: 15}]}>1</TextView>
                        <TouchableOpacity style={styles.addBtn}>
                            <Image
                                style={styles.plusBtn}
                                source={plus}
                                resizeMode={'contain'}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{justifyContent: 'space-between'}}>
                <TouchableOpacity>
                    <Image
                        source={add}
                        resizeMode={'contain'}
                        style={styles.colseBtn}
                    />
                </TouchableOpacity>
                {/* <TextView style={styles.prodPriceTxt}>Rs.{item.price?.product_price}</TextView> */}

            </View>
        </TouchableOpacity>

    );

};


export default RowItem;
