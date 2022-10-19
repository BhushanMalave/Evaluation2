import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
 
  View,
  Image,
} from 'react-native';





 export const StartScreen =() => {
  

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.body} >
        <Image  source={require('../assets/images/logo.png')}/>
        </View>
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({

    container:{
        backgroundColor:'#0E85FF',
        flex:1,
        alignItems:'center',
    },
    body:{
        // marginHorizontal:92,
        // marginVertical:218,
        justifyContent:'center',
        flex:1,
    },
  
});

