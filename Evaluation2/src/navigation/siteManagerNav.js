import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {EditSites} from '../screens/EditSite';
import {SitesManager} from '../screens/SitesManager';
import {DetailsSite} from '../screens/DetailsSite';
import AddSite from '../screens/AddSite';


const Stack = createNativeStackNavigator();

export const SiteManagerNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Site"
        options={{headerShown: false}}
        component={SitesManager}
      />
      <Stack.Screen
        name="Add Site"
        options={{headerShown: false}}
        component={AddSite}
      />

      <Stack.Screen
        name="Site Details"
        options={{headerShown: false}}
        component={DetailsSite}
      />
      <Stack.Screen
        name="Edit Site"
        options={{headerShown: false}}
        component={EditSites}
      />
    </Stack.Navigator>
  );
};
