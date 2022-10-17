import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  Image,
  View,
} from 'react-native';

import PasswordManagerNav from '../navigation/passwordManagerNav';
import LinearGradient from 'react-native-linear-gradient';

export const PasswordManager = () => {
  return (
    <LinearGradient 
    colors={['#20BBFF', '#0E85FF']}
    style={styles.linearGradient}
    >
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}>
        <Image
          source={require('../assets/images/logopass.png')}
          style={{width: 179, height: 68}}
        />
        </View>
     <View style={styles.nav}>
    <PasswordManagerNav/>
     </View>
    </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  logo: {
    marginTop: 39,
    alignItems: 'center',
    marginBottom:24,
   
  },
  nav:{
     flex:5,
     marginHorizontal:30,
     
  },
  linearGradient:{
    flex:1,
  }
});
