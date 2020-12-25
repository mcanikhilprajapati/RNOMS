import React, { Component, useState } from 'react';
import styles from './AddProductScreenStyle';
import { View, Text, Image, Picker, TextInput, Button, TouchableOpacity } from 'react-native';
import {arrowdown,radioChecked,radioUnchecked,arrowback} from 'src/assets'
import {Header, Icon, CheckBox, Input} from "react-native-elements";
import {Container,Content} from 'native-base'
import {TextView,OHeader} from 'src/Component';
// import {Icon} from 'react-native-vector-icons/FontAwesome';


class AddProductScreen extends Component {

    render() {
        return (
            <Container>

            <View style={styles.container}>
                <OHeader
                    //isMenu={true}
                    //isSearch={true}
                    titleCenter={"Add Product"}
                />

                <Content  showsHorizontalScrollIndicator={false}
                          showsVerticalScrollIndicator={false}>
                <View style={styles.innerContainer}>
                    <Input
                        placeholder='Product Name'
                        inputContainerStyle={[styles.inputBox,{marginTop:10}]}
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
                        <Image  style={styles.prodImg} />
                        <TouchableOpacity style={styles.browseBtn}>
                            <Text style={styles.browseBtnTxt}>Browse</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.pickerStyle}>
                        <Picker
                            //mode="dropdown"
                            style={styles.pickerTxt}
                            itemStyle={styles.pickerTxt}
                            // selectedValue={this.state.selected}
                            // onValueChange={this.onValueChange.bind(this)}
                        >
                            <Picker.Item label="Category1"  />
                            <Picker.Item label="Category2"  />
                            <Picker.Item label="Category3"  />
                            <Picker.Item label="Category"  />
                        </Picker>
                    </View>

                    <TouchableOpacity style={styles.button}
                                      onPress={()=> this.props.navigation.navigate("ProductlistScreen")}
                    >
                        <Text style={styles.btnText}>Submit</Text>
                    </TouchableOpacity>
                </View>
                </Content>
            </View>


            </Container>
        );
    }
}



export default AddProductScreen;
