

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { PasswordManager } from './src/main/passwordManager';
import PasswordManagerNav from './src/navigation/passwordManagerNav';
import { StartScreen } from './src/screens/startScreen';
import { MainComp } from './src/assets/components/MainComponent/MainComp';
import { SitesManager } from './src/screens/SitesManager';
import { AddSites } from './src/screens/AddSites';






const App =() => {
  

  return (
    <SafeAreaView style={styles.container}>
      <AddSites/>
     {/* <SitesManager/> */}
     {/* <PasswordManager/> */}
    </SafeAreaView>
      
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
});

export default App;
