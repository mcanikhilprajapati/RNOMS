import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'
import { Header } from 'react-native-elements';
import styles from './ProductlistScreenStyle'
import { Container, Content, Tab, Tabs, ScrollableTab } from 'native-base';
import ProductlistTabScreen from "../SalesOrderTabScreen";
import {shopping} from "src/assets";
import {TextView,OHeader} from 'src/Component';
export class ProductlistScreen extends Component {
    render() {
        return (

                <Container>
                    <View style={styles.imgCont}>
                            <Image source={shopping} style={styles.titleImg} />
                    </View>
                    <Tabs
                        tabBarUnderlineStyle={styles.tabBarUnderlineStyle}
                        style={{ height: 50 }}
                        tabContainerStyle={{ elevation: 0 }}
                        renderTabBar={() => <ScrollableTab style={{ borderWidth: 0 }} />}
                    >
                        <Tab
                            heading="Boots T-Shirt"
                            tabStyle={styles.tabStyle}
                            activeTabStyle={styles.activeTabStyle}
                            activeTextStyle={styles.activeTextStyle}
                            textStyle={styles.textStyle}
                        >
                            <ProductlistTabScreen />
                        </Tab>
                        <Tab
                            heading="Sunglasses"
                            tabStyle={styles.tabStyle}
                            activeTabStyle={styles.activeTabStyle}
                            activeTextStyle={styles.activeTextStyle}
                            textStyle={styles.textStyle}
                        >
                            <ProductlistTabScreen />
                        </Tab>
                        <Tab
                            heading="Tos & Tunics"
                            tabStyle={styles.tabStyle}
                            activeTabStyle={styles.activeTabStyle}
                            activeTextStyle={styles.activeTextStyle}
                            textStyle={styles.textStyle}
                        >
                            <ProductlistTabScreen />
                        </Tab>

                    </Tabs>

                </Container>

        )
    }
}

export default ProductlistScreen;
