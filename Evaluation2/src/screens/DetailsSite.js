import React, { useState } from 'react';
import {useRoute} from '@react-navigation/native';

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

export const DetailsSite = ({navigation}) => {

  const route = useRoute();
const [siteDetails,setSiteDetails] = useState(route.params.item);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topbar}>
        <Pressable  onPress={()=>{navigation.navigate('Site')}}>
          <Text style={styles.text1} > {'<-'} </Text>
        {/* <Image source={require('../assets/images/bounds.png')}/> */}
        </Pressable>
         <Text style={styles.text2}> Site Details</Text>
         <Pressable  onPress={()=>{navigation.navigate('Edit Site',siteDetails)}} >
          <Text style={styles.text3}>
            Edit
          </Text>
         </Pressable>
      </View>
      <View style={styles.body}>
        <Text style={styles.text}>URL</Text>
        <TextInput
        value={siteDetails.url}
        style={styles.textInput} 
        />
        <Text style={styles.text}>Site Name</Text>
        <TextInput 
        value={siteDetails.siteName}
        style={styles.textInput} />
        <Text style={styles.text}>Sector/Folder</Text>
        <TextInput 
        value={siteDetails.folder}
        style={styles.textInput} />
        <Text style={styles.text}>User Name</Text>
        <TextInput
         value={siteDetails.userName}
        style={styles.textInput} />
        <Text style={styles.text}>Site Password</Text>
        <TextInput 
        value={siteDetails.sitePassword}
        style={styles.textInput} />
        <Text style={styles.text}>Notes</Text>
        <TextInput 
         multiline
         numberOfLines={4}
        value={siteDetails.notes}
        style={styles.textNotes} />
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
  text3:{
    height:28,
    width:103,
    fontSize:20,
    marginTop:20,
    marginLeft:170,
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
});