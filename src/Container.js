import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { noInternetConnected, toggleDrawer } from './store/global';
import { Text, View } from 'react-native';
import ProductlistScreen from "./Root/Screens/ProductlistScreen/ProductlistScreen";
import AddProductScreen from "./Root/Screens/AddProductScreen/AddProductScreen";
import CartScreen from "./Root/Screens/CartScreen/CartScreen";
const Stack = createStackNavigator();
//const Tab = createBottomTabNavigator();
console.disableYellowBox = true;
//const Drawer = createDrawerNavigator();


class Containers extends Component {
  _subscription = null;

  constructor(props) {
    super();
    this.state = {
      isConnected: true,
      isUpdateAvailable: false,
      isLogin: false,
      isOpening: true,
    };
  }

  async componentDidMount() {


  }



  render() {
    return (

      <View style={{ flex: 1 }}>
        {/* <Text style={{fontSize:30,}}>{this.props.cartList.length}</Text> */}

        <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen
                  options={{ headerShown: false }}
                  name="AddProductScreen"
                  component={AddProductScreen}
              />
              <Stack.Screen
                  options={{ headerShown: false }}
                  name="CartScreen"
                  component={CartScreen}
              />

              <Stack.Screen
                  options={{ headerShown: false }}
                  name="ProductlistScreen"
                  component={ProductlistScreen}
              />

          </Stack.Navigator>

        </NavigationContainer>

        {/*{this.props.errorMessage != "" &&*/}
        {/*  <Text*/}
        {/*    style={this.props.isError ? { backgroundColor: 'red', padding: 15, color: 'white', bottom: 0, left: 0, right: 0, position: 'absolute', zIndex: 99 } :*/}
        {/*      { backgroundColor: '#15d400', padding: 15, color: 'white', bottom: 0, left: 0, right: 0, position: 'absolute', zIndex: 99 }}>*/}
        {/*    {this.props.errorMessage}</Text>*/}
        {/*}*/}

      </View>

    );
  }
}


const mapActionCreators = {
    noInternetConnected,
    toggleDrawer,
};

const mapStateToProps = state => {
    return {
        isInternetConnected: state.global.isInternetConnected,
        globalLoding: state.global.loading,
        errorMessage: state.global.errorMessage,
        isError: state.global.isError,
        isopenDrawer: state.global.isopenDrawer,
    };
};


export default connect(
    mapStateToProps,
    mapActionCreators,
)(Containers);
