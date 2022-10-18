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
import { MainComp } from '../assets/components/MainComponent/MainComp';
import { Button2 } from '../assets/components/Button/Buttons';

export const SitesManager = ({navigation}) => {
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
      <View style={styles.container2}>
      <View style={styles.bodytop2}>
        <Text style={styles.text1}>Sites</Text>
        <Text style={styles.text2}>Social Media</Text>
        <View style={styles.oval}>
          <Text style={styles.number}>07</Text>
        </View>
        <Pressable>
        <Image source={require('../assets/images/pathcopy.png')}   style={styles.image6}/>
        </Pressable>
      </View>
      <View style={styles.bottomborder}/>
      <View>
        <Pressable onPress={()=>{navigation.navigate('Site Details')}}>
        <MainComp></MainComp>
        </Pressable>
        <MainComp></MainComp>
        <MainComp></MainComp>
        <MainComp></MainComp>
        <MainComp></MainComp>
      </View>
      <Button2 onPress={()=>navigation.navigate('Add Site')}/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#FAFAFA',
  },
  container2:{
    marginHorizontal:20,
    marginVertical:20,
   
  },
  bodytop: {
    height: 55,
    flexDirection: 'row',
    backgroundColor: '#0E85FF',
    // justifyContent: 'space-evenly',
  },
  bodytop2:{
    flexDirection:'row',
    marginTop:1,
    height:40,
  },
  bottomborder:{
    borderBottomWidth:4,
    height:3.2,
    width:30,
    borderBottomColor:'#FFA136',
    borderRadius:1.6,
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
 image6:{
  marginTop:13,
  marginLeft:7,

 },
 text1:{
  height:55,
  widht:55,
  fontSize:24,
  textAlign:'left',
 },
 text2:{
  width:113,
  height:27,
  fontSize:20,
  marginTop:4,
  marginLeft:120,
 },
 number:{
  height: 22,
  width: 19,
  color: '#FFFFFF',
  fontFamily: "Open Sans",
  fontSize: 16,
  marginLeft:0,
},
oval:{
  alignItems: 'center',
  justifyContent:'center',
  height: 29,
  width: 29,
  backgroundColor: '#0E85FF',
  borderRadius:20,
  marginLeft:8,
},
});
