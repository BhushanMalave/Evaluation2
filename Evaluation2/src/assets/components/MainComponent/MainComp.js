import React from "react";

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
    return(

        <View style={styles.body}>
            <View style={styles.bodytop}>
                <Image source={require('../../images/Bitmap.png')} style={styles.logo} />
                <View style={styles.bodyin}>
                        <Text style={styles.text1}>Facebook</Text>
                        <Text>Copy Password</Text>
                </View>
            </View>
              <Text>fgdfgdfgd</Text>
        </View>
    );
};


const styles =StyleSheet.create({  
body:{
    height:103,
    width:320,
    borderRadius:12.6,
    marginVertical:20,
    marginHorizontal:20,
    color:'white',
},
bodytop:{
    height:65,
    width:320,
    flexDirection:'row',
    color:'white',
    borderWidth:1,
},
logo:{
    height:45,
    weight:45,
    },
bodyin:{
    borderWidth:2,
    marginLeft:150,
}

  

});