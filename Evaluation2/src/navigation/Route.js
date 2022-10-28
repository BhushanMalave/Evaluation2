import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PasswordManager} from '../screens/passwordManager';
import {SiteManagerNav} from './siteManagerNav';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();
const theme = {
  colors: {
    background: 'transparent',
  },
};

export const Router = () => {
  const state = useSelector(state => state.userState.userState);
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator>
        {!state ? (
          <Stack.Screen
            name="Password Manager"
            options={{headerShown: false}}
            component={PasswordManager}
          />
        ) : (
          <Stack.Screen
            name="Site Manager"
            options={{headerShown: false}}
            component={SiteManagerNav}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
