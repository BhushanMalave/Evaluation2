import React from 'react';

import {StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import SignIn from '../screens/SignIn';
import {SignUp} from '../screens/SignUp';

const Tab = createMaterialTopTabNavigator();
const theme = {
  colors: {
    background: "transparent",
  },
};

const PasswordManagerNav = () => {
  return (
    <NavigationContainer theme={theme} >
      <Tab.Navigator 
      screenOptions= {{
        tabBarStyle:{backgroundColor:'#1baaff'},
        tabBarIndicatorStyle:{backgroundColor:"orange",marginLeft:50,width:100,height:4.5},
        tabBarLabelStyle:{color:"white",fontSize:20,fontWeight:"bold"},
        
      }} >
        <Tab.Screen name="SIGN IN" component={SignIn} />
        <Tab.Screen name="SIGN UP" component={SignUp} />
      
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
});
export default PasswordManagerNav;
