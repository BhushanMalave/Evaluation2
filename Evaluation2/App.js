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

import {PasswordManager} from './src/screens/passwordManager';
import PasswordManagerNav from './src/navigation/passwordManagerNav';
import {StartScreen} from './src/screens/startScreen';
import {MainComp} from './src/assets/components/MainComponent/MainComp';
import {SitesManager} from './src/screens/SitesManager';
import AddSite from './src/screens/AddSite';
import {EditSites} from './src/screens/EditSite';
import {Router} from './src/navigation/Route';
import { Store } from './src/redux/Store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Provider store={Store}>
        <Router />
      </Provider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
