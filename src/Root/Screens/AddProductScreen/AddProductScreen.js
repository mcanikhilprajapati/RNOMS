import React, {Component} from 'react';
import styles from './AddProductScreenStyle';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Input} from "react-native-elements";
import {Container, Content} from 'native-base'
import {OHeader} from 'src/Component';
import {Picker } from 'native-base';
import {toast} from 'src/store/global'
import {connect} from 'react-redux';
class AddProductScreen extends Component {

    render() {
        return (
            <Container>
                <OHeader
                    titleCenter={"Add Product"}
                    navigation={this.props.navigation}
                />


                <Content showsHorizontalScrollIndicator={false}
                         showsVerticalScrollIndicator={false}>
                    <View style={styles.innerContainer}>
                        <Input
                            placeholder='Product Name'
                            inputContainerStyle={[styles.inputBox, {marginTop: 10}]}
                        />
                        <Input
                            placeholder='Small Description'
                            inputContainerStyle={styles.inputBox}
                        />
                        <Input
                            placeholder='Original Price'
                            inputContainerStyle={styles.inputBox}
                        />
                        <Input
                            placeholder='Discounted Price'
                            inputContainerStyle={styles.inputBox}
                        />

                        <View style={styles.imgCont}>
                            <Image style={styles.prodImg}/>
                            <TouchableOpacity style={styles.browseBtn}>
                                <Text style={styles.browseBtnTxt}>Browse</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.pickerStyle}>
                            <Picker
                                mode="dropdown"
                                placeholder={"select"}
                                style={styles.pickerTxt}
                                itemStyle={styles.pickerTxt}
                                // selectedValue={this.state.selected}
                                // onValueChange={this.onValueChange.bind(this)}
                            >
                                <Picker.Item label="Category1"/>
                                <Picker.Item label="Category2"/>
                                <Picker.Item label="Category3"/>
                                <Picker.Item label="Category"/>
                            </Picker>
                        </View>

                        <TouchableOpacity style={styles.button}
                                          onPress={() => this.props.toast(false,"New Product Added")}
                        >
                            <Text style={styles.btnText}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </Content>


            </Container>
        );
    }
}



const mapActionCreators = {
    toast
};

const mapStateToProps = state => {
    return {

    };
};


export default connect(
    mapStateToProps,
    mapActionCreators,
)(AddProductScreen);
