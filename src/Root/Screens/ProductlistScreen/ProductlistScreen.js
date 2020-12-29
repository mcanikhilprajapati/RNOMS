import React, {Component} from 'react';
import {FlatList, Image, View} from 'react-native';

import styles from './ProductlistScreenStyle';
import {Container, ScrollableTab, Tab, Tabs} from 'native-base';
import {shopping} from 'src/assets';
import {OHeader} from 'src/Component';
import RowItem from './ProdRowItem';
import {connect} from 'react-redux';
import _ from 'lodash';
import {addItemtoCart, toast} from 'src/store/global';

class ProductlistScreen extends Component {

    render() {
        const {products} = this.props;
        return (

            <Container>
                <OHeader titleCenter={'Products'} navigation={this.props.navigation}/>
                <View style={styles.imgCont}>
                    <Image source={shopping} style={styles.titleImg}/>
                </View>
                <Tabs
                    tabBarUnderlineStyle={styles.tabBarUnderlineStyle}
                    style={{height: 50}}
                    tabContainerStyle={{elevation: 0}}
                    renderTabBar={() => <ScrollableTab style={{borderWidth: 0}}/>}
                >
                    {
                        products.map((data) => {
                            return (
                                <Tab
                                    heading={data.category}
                                    tabStyle={styles.tabStyle}
                                    activeTabStyle={styles.activeTabStyle}
                                    activeTextStyle={styles.activeTextStyle}
                                    textStyle={styles.textStyle}
                                >
                                    <FlatList
                                        style={{paddingVertical: 15, backgroundColor: '#EAECEC'}}
                                        data={data.products}
                                        showsHorizontalScrollIndicator={false}
                                        showsVerticalScrollIndicator={false}
                                        ItemSeparatorComponent={this.FlatListItemSeparator}
                                        renderItem={({item, index}) => (
                                            <RowItem
                                                item={item}
                                                onSelect={(data) => {
                                                    this.props.addItemtoCart(data);
                                                    this.props.toast(false, 'Added to cart');
                                                }}/>
                                        )}

                                    />
                                </Tab>
                            );
                        })
                    }


                </Tabs>

            </Container>

        );
    }
}

const mapActionCreators = {addItemtoCart,  toast,};

const mapStateToProps = state => {
    return {
        products: _.chain(state.global.products)
            .groupBy('category')
            .map((value, key) => ({category: key, products: value}))
            .value(),
    };
};


export default connect(
    mapStateToProps,
    mapActionCreators,
)(ProductlistScreen);

