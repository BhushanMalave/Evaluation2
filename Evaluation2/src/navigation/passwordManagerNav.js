import React from 'react';

import {StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SignIn from '../screens/SignIn';
import {SignUp} from '../screens/SignUp';

const Tab = createMaterialTopTabNavigator();
const theme = {
  colors: {
    background: 'transparent',
  },
};

const PasswordManagerNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backfaceVisibility: 'visible',
        },
        tabBarIndicatorStyle: {
          backgroundColor: 'orange',
          height: 4.5,
          borderRadius: 2,
          justifyContent:'center',
        },
        tabBarLabelStyle: {color: 'white', fontSize: 20, fontWeight: 'bold'},
      }}>
      <Tab.Screen name="SIGN IN" component={SignIn} />
      <Tab.Screen name="SIGN UP" component={SignUp} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
});
export default PasswordManagerNav;
