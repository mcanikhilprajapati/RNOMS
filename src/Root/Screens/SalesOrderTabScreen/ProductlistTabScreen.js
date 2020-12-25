import React, { Component } from 'react'
import {Text, TouchableOpacity, View, StyleSheet, FlatList, Image} from 'react-native';
import { Icon } from 'react-native-elements';
import { Container, Content, Tab, Tabs, ScrollableTab } from 'native-base';
import styles from './ProductlistTabScreenStyle';
import {add,  people, minus,plus,shopping} from 'src/assets'
import {TextView,OHeader} from 'src/Component';
import RowItem from "./ProdRowItem";
const data = [{id:1},{id:2},{id:3}]

export class ProductlistTabScreen extends Component {

    constructor() {
        super()
        this.state = {}
    }
    FlatListItemSeparator = () => {
        return (
            //Item Separator
            <View style={{ height: 15, }} />
        );
    };
    render() {

        return (
            <Content>
                <FlatList
                    style={{ paddingVertical: 15,backgroundColor:'#EAECEC' }}
                    data={data}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={this.FlatListItemSeparator}
                    renderItem={({ item, index }) => (
                        <RowItem/>
                    )}

                />
            </Content>
        )
    }
}

export default ProductlistTabScreen;
