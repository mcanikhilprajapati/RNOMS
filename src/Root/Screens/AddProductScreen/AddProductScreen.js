import React, {Component} from 'react';
import styles from './AddProductScreenStyle';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Input} from 'react-native-elements';
import {Container, Content, Picker, Footer} from 'native-base';
import {OHeader} from 'src/Component';
import {toast, addProduct} from 'src/store/global';
import {connect} from 'react-redux';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

class AddProductScreen extends Component {
    constructor(props) {
        super();
        this.state = {
            category: '',
            pname: '',
            desc: '',
            oprice: null,
            dprice: null,
            qty: null,
            image:null
        };
    }

    onValueChange(value: string) {
        this.setState({
            category: value,
        });
    }

    onSubmit() {
        const {pname, desc, oprice, dprice, category, qty,image} = this.state;
        if (pname == '') {
            this.props.toast(true, 'Please Type Product Name');
            return;
        }
        if (desc == '') {
            this.props.toast(true, 'Please Type Product Desc');
            return;
        }
        if (oprice == '') {
            this.props.toast(true, 'Please Type Product Price');
            return;
        }
        if (dprice == null) {
            this.props.toast(true, 'Please Type Product Discount Price');
            return;
        }
        if (category == null) {
            this.props.toast(true, 'Please Select Category');
            return;
        }
        if (qty == null) {
            this.props.toast(true, 'Please Select Qty');
            return;
        }

        let product = {
            pname, desc, oprice, dprice, category, qty,image
        };

        this.props.addProduct(product);
        this.props.toast(false, 'Product Added');
        // this.reset();
    }

    reset() {
        this.setState({
            category: '',
            pname: '',
            desc: '',
            oprice: null,
            dprice: null,
        });
    }

    render() {
        const {pname, desc, oprice, dprice, qty,image} = this.state;
        return (
            <Container>
                <OHeader
                    titleCenter={'Add Product'}
                    navigation={this.props.navigation}
                    product
                />


                <Content showsHorizontalScrollIndicator={false}
                         showsVerticalScrollIndicator={false}>

                    <View style={styles.imgCont}>
                        <Image style={styles.prodImg} source={image}/>
                        <TouchableOpacity
                            onPress={() => {
                                launchImageLibrary({
                                    mediaType: 'photo',
                                    includeBase64: false,
                                    maxHeight: 200,
                                    maxWidth: 200,
                                }, (image) => {
                                    this.setState({image})
                                });
                            }}
                            style={styles.browseBtn}>
                            <Text style={styles.browseBtnTxt}>Browse</Text>
                        </TouchableOpacity>
                    </View>
                    <Input
                        value={pname}
                        onChangeText={value => this.setState({pname: value})}
                        placeholder='Product Name'
                        inputContainerStyle={[styles.inputBox, {marginTop: 10}]}
                    />
                    <Input
                        value={desc}
                        onChangeText={value => this.setState({desc: value})}
                        placeholder='Small Description'
                        inputContainerStyle={styles.inputBox}
                    />
                    <Input
                        returnKeyType={'next'}
                        keyboardType="numeric"
                        value={oprice}
                        onChangeText={value => this.setState({oprice: value})}
                        placeholder='Original Price'
                        inputContainerStyle={styles.inputBox}
                    />
                    <Input
                        returnKeyType={'next'}
                        keyboardType="numeric"
                        value={dprice}
                        onChangeText={value => this.setState({dprice: value})}
                        placeholder='Discounted Price'
                        inputContainerStyle={styles.inputBox}
                    /><Input
                    returnKeyType={'next'}
                    keyboardType="numeric"
                    value={qty}
                    onChangeText={value => this.setState({qty: value})}
                    placeholder='qty'
                    inputContainerStyle={styles.inputBox}
                />


                    <View style={styles.pickerStyle}>
                        <Picker
                            placeholder={'select'}
                            style={styles.pickerTxt}
                            itemStyle={styles.pickerTxt}
                            selectedValue={this.state.category}
                            onValueChange={this.onValueChange.bind(this)}
                        >
                            <Picker.Item label="Category1" value={'Category1'}/>
                            <Picker.Item label="Category2" value={'Category2'}/>
                            <Picker.Item label="Category3" value={'Category3'}/>
                            <Picker.Item label="Category4" value={'Category4'}/>
                        </Picker>
                    </View>


                </Content>

                <Footer>
                    <TouchableOpacity style={styles.button}
                                      onPress={() => {
                                          this.onSubmit();
                                      }}
                    >
                        <Text style={styles.btnText}>Submit</Text>
                    </TouchableOpacity>
                </Footer>
            </Container>
        );
    }
}


const mapActionCreators = {
    toast,
    addProduct,
};

const mapStateToProps = state => {
    return {};
};


export default connect(
    mapStateToProps,
    mapActionCreators,
)(AddProductScreen);
