import React, {Component} from 'react';
import {FlatList, Image, View} from 'react-native';

import styles from './ProductlistScreenStyle'
import {Container, ScrollableTab, Tab, Tabs} from 'native-base';
import {shopping} from "src/assets";
import {OHeader} from 'src/Component';
import RowItem from "./ProdRowItem";
const data = [{id:1},{id:2},{id:3}]
export class ProductlistScreen extends Component {
    render() {
        return (

            <Container>
                <OHeader titleCenter={"Products"}/>
                <View style={styles.imgCont}>
                    <Image source={shopping} style={styles.titleImg}/>
                </View>
                <Tabs
                    tabBarUnderlineStyle={styles.tabBarUnderlineStyle}
                    style={{height: 50}}
                    tabContainerStyle={{elevation: 0}}
                    renderTabBar={() => <ScrollableTab style={{borderWidth: 0}}/>}
                >
                    <Tab
                        heading="Boots T-Shirt"
                        tabStyle={styles.tabStyle}
                        activeTabStyle={styles.activeTabStyle}
                        activeTextStyle={styles.activeTextStyle}
                        textStyle={styles.textStyle}
                    >
                        <FlatList
                            style={{paddingVertical: 15, backgroundColor: '#EAECEC'}}
                            data={data}
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                            ItemSeparatorComponent={this.FlatListItemSeparator}
                            renderItem={({item, index}) => (
                                <RowItem onSelect={() => {
                                    this.props.navigation.navigate("CartScreen")
                                }}/>
                            )}

                        />
                    </Tab>
                    <Tab
                        heading="Sunglasses"
                        tabStyle={styles.tabStyle}
                        activeTabStyle={styles.activeTabStyle}
                        activeTextStyle={styles.activeTextStyle}
                        textStyle={styles.textStyle}
                    >
                        <FlatList
                            style={{paddingVertical: 15, backgroundColor: '#EAECEC'}}
                            data={data}
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                            ItemSeparatorComponent={this.FlatListItemSeparator}
                            renderItem={({item, index}) => (
                                <RowItem onSelect={() => {
                                    this.props.navigation.navigate("CartScreen")
                                }}/>
                            )}

                        />
                    </Tab>
                    <Tab
                        heading="Tos & Tunics"
                        tabStyle={styles.tabStyle}
                        activeTabStyle={styles.activeTabStyle}
                        activeTextStyle={styles.activeTextStyle}
                        textStyle={styles.textStyle}
                    >
                        <FlatList
                            style={{paddingVertical: 15, backgroundColor: '#EAECEC'}}
                            data={data}
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                            ItemSeparatorComponent={this.FlatListItemSeparator}
                            renderItem={({item, index}) => (
                                <RowItem onSelect={() => {
                                    this.props.navigation.navigate("CartScreen")
                                }}/>
                            )}

                        />
                    </Tab>

                </Tabs>

            </Container>

        )
    }
}

export default ProductlistScreen;
