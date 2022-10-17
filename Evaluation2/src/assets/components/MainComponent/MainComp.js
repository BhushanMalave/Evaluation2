import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  View,
  Image,
} from 'react-native';

export const MainComp = () => {
  return (
    <View style={styles.body}>
      <View style={styles.bodytop}>
        <Image
          source={require('../../images/Bitmap.png')}
          style={styles.logo}
        />
        <View style={styles.bodyin}>
          <Text style={styles.text1}>Facebook</Text>
          <Text style={styles.text2}>Copy Password</Text>
        </View>
      </View>
      <Text style={styles.text3}>www.facbook.com</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    height: 103,
    width: 320,
    borderRadius: 12.6,
    marginVertical: 20,
    marginHorizontal: 20,
    color: 'white',
    borderRight: 5,
  },
  bodytop: {
    height: 65,
    width: 320,
    flexDirection: 'row',
    color: 'white',
  },
  logo: {
    height: 45,
    weight: 45,
    marginTop: 8,
  },
  bodyin: {
     marginLeft: 180,
    
  },
  text1: {
    height: 24,
    width: 83,
    color: '#0E85FF',
    fontSize: 18,
    lineheight: 24,
    marginTop: 8,
  },
  text2: {
    height: 15,
    weight: 81,
    color: '#0E85FF',
    fontSize: 12,
    marginTop: 8,
  },
  text3: {
    height: 19,
    weight: 132,
    fontSize: 15,
    color: '#3C4857',
    textAlign:'center',
    marginTop: 8,
    marginBottom: 8,
  },
});
