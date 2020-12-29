import React, {Component, useState} from 'react';
import styles from './ProdRowItemStyle';
import {View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {add, people, minus, plus} from 'src/assets'
import {TextView} from 'src/Component';

const data = [{id: 1}, {id: 2}, {id: 3}]
const RowItem = props => {

    return (
        <TouchableOpacity

            style={styles.prodCont}>
            <Image style={styles.imgCont}
                   source={people}
                   resizeMode={'stretch'}/>
            <View style={styles.prodDetails}>
                <TextView style={styles.proTitleTxt}>{props.item.pname}</TextView>
                <TextView style={styles.proQtyTxt}>{props.item.desc}</TextView>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <TextView style={styles.prodPriceTxt}>${props.item.oprice}</TextView>
                    <TextView style={styles.prodPriceTxt1}>${props.item.dprice}</TextView>
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
                        <TextView style={[styles.addCartTxt, {marginHorizontal: 15}]}>{props.item.qty}</TextView>
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
                <TouchableOpacity onPress={() => {
                    props.onSelect && props.onSelect(props.item);
                }}>
                    <Image
                        source={add}
                        resizeMode={'contain'}
                        style={styles.colseBtn}
                    />
                </TouchableOpacity>


            </View>
        </TouchableOpacity>

    );

};


export default RowItem;
