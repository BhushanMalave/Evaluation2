import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Pressable,
  TextInput,
  Image,
} from 'react-native';

export const SitesManager = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bodytop}>
        <Image
          source={require('../assets/images/burger_menu.png')}
          style={styles.image1}
        />
        <Image
          source={require('../assets/images/pass.png')}
          style={styles.image2}
        />
        <Image
          source={require('../assets/images/search.png')}
          style={styles.image3}
        />
        <Image
          source={require('../assets/images/sync_icn.png')}
          style={styles.image4}
        />
        <Image
          source={require('../assets/images/profile.png')}
          style={styles.image5}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bodytop: {
    height: 55,
    flexDirection: 'row',
    backgroundColor: '#0E85FF',
    // justifyContent: 'space-evenly',
  },
  image1:{
    marginTop:20,
    marginLeft:25,
  },
  image2:{
     marginTop:15,
     marginLeft:20,
  },
  image4:{
    marginTop:15,
    marginLeft:30,
 },
 image3:{
    marginTop:15,
    marginLeft:90,
 },
 image5:{
    marginTop:15,
    marginLeft:30,
 },
});
