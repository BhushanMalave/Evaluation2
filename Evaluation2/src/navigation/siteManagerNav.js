import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AddSites } from "../screens/AddSites";
import { EditSites } from "../screens/EditSite";
import { SitesManager } from "../screens/SitesManager";

const Stack = createNativeStackNavigator();

export const  SiteManagerNav=() => {
  return (
 
      <Stack.Navigator>
        <Stack.Screen name="Site" component={SitesManager}/>
        <Stack.Screen name="Add Site" component={AddSites}/>
        <Stack.Screen name="Edit Site" component={EditSites}/>
      </Stack.Navigator>
   
  );
}