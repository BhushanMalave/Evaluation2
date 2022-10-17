import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { PasswordManager } from '../screens/passwordManager';
import { SiteManagerNav } from './siteManagerNav';

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen
          name="AuthScreen"
          options={{header: () => null}}
          component={PasswordManager}
        />
        <Stack.Screen
          name="AppScreen"
          component={SiteManagerNav} 
          options={{header: () => null}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;