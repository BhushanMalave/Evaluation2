import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AddSites } from "../screens/AddSites";
import { EditSites } from "../screens/EditSite";
import { SitesManager } from "../screens/SitesManager";
import { DetailsSite } from "../screens/DetailsSite";

const Stack = createNativeStackNavigator();

export const  SiteManagerNav=() => {
  return (
 
      <Stack.Navigator>
        <Stack.Screen name="Site"  options={{headerShown: false}} component={SitesManager}/>
        <Stack.Screen name="Add Site" options={{headerShown: false}}  component={AddSites}/>
        <Stack.Screen name="Site Details" options={{headerShown: false}}  component={DetailsSite}/>
        <Stack.Screen name="Edit Site" options={{headerShown: false}}   component={EditSites}/>
      </Stack.Navigator>
   
  );
}