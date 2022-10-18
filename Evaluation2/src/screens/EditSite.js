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

export const EditSites = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topbar}>
        <Pressable  onPress={()=>{navigation.navigate('Site Details')}}>
          <Text style={styles.text1} > {'<-'} </Text>
        {/* <Image source={require('../assets/images/bounds.png')}/> */}
        </Pressable>
         <Text style={styles.text2}> Edit </Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.text}>URL</Text>
        <TextInput style={styles.textInput} />
        <Text style={styles.text}>Site Name</Text>
        <TextInput style={styles.textInput} />
        <Text style={styles.text}>Sector/Folder</Text>
        <TextInput style={styles.textInput} />
        <Text style={styles.text}>User Name</Text>
        <TextInput style={styles.textInput} />
        <Text style={styles.text}>Site Password</Text>
        <TextInput style={styles.textInput} />
        <Text style={styles.text}>Notes</Text>
        <TextInput 
         multiline
         numberOfLines={4}
        style={styles.textNotes} />
      </View>
      <View style={styles.buttonbody}>
        <Pressable onPress={() => {}} style={styles.button}>
          <Text style={styles.buttontext}>Update</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topbar:{
    backgroundColor:'#0E85FF',
    flexDirection:'row',
    height:60,
    
 },
 text1:{
   marginTop:20,
   marginLeft:9,
 },
 text2:{
  height:28,
  width:103,
  fontSize:20,
  marginTop:20,
  marginLeft:30,
  color:'#FFFFFF',
},
  body: {
    margin: 20,
  },
  textInput: {
    height: 41,
    weight: 321,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#F5F7FB',
    borderColor: '#D7D7D7',
    marginTop: 10,
    marginBottom: 10,
  },
  text: {
    height: 24,
    color: '#949CA5',
    fontSize: 18,
    marginTop: 5,
  },
  textNotes: {
    height: 90,
    weight: 321,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#F5F7FB',
    borderColor: '#D7D7D7',
    marginTop: 10,
    marginBottom: 10,
  },
  buttonbody: {
    alignItems:'baseline',
    marginTop:10,
  },
  button: {
    height: 55,
    width:'100%',
    backgroundColor: '#0E85FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttontext: {
    height: 28,
    width: 65,
    color: '#FFFFFF',
    fontSize: 20,
    textAlign:'center',
  },
});