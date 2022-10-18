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

import {Formik} from 'formik';
import * as yup from 'yup';
import {Buttons} from '../assets/components/Button/Buttons';



const SignIn = ({navigation}) => {
  // const loginValidationSchema = yup.object().shape({
  //   mobileno: yup
  //     .string()
  //     .email('Please enter valid email')
  //     .required('Email Address is Required'),
  //   mpin: yup
  //     .string()
  //     .matches(/\d/, 'Password must have a number')
  //     .min(4, ({min}) => `Password must be${min} characters`)
  //     .max(4,({max})=>'')
  //     .required('Password is required'),
  // });

  const onClickHandler = () => {
    navigation.navigate('Site Manager')
 }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
       
              <TextInput
                name="mobileno"
                placeholder="     Mobile Number"
                placeholderTextColor={'grey'}
                style={styles.textInput}
                // onChangeText={handleChange('mobileno')}
                // onBlur={handleBlur('mobileno')}
                // value={mobileno}
                keyboardType="number-pad"
              />
              <TextInput
                name="mpin"
                placeholder="    MPin"
                style={styles.textInput}
                // onChangeText={handleChange('mpin')}
                placeholderTextColor={'grey'}
                // onBlur={handleBlur('mpin')}
                // value={values.password}
                secureTextEntry
              />
              <Pressable style={{ }}>
                <Text style={styles.text}>Forgot your Password?</Text>
              </Pressable>
              {/* <Pressable style={styles.button} onPress={()=>{}}>
                <Text
                  style={styles.buttonText}
                  
                  >
                  SIGN IN
                </Text>
              </Pressable> */}
              <View style={styles.button}>
              <Buttons  name='SIGN IN' onPress={()=>{onClickHandler()}}/>
              </View>
             
         
       
        <View style={styles.finger}>
                <Image source={require('../assets/images/fingerprinticon.png')}/>
                </View>
                <View
          style={{
            flexDirection: 'row',
            marginTop: 15,
            alignContent: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: '#FFFFFF',
              height: 24,
              width: 40,
              fontStyle:'OpenSans-bold',
            }}>
            OR
          </Text>
          <Text
            style={{
              fontSize: 13,
              lineHeight: 25,
              color: '#FFFFFF',
              height: 21,
              width: 219,
              fontStyle:'EMprint-Semibold',
            }}>
            USE YOUR FINGERPRINT TO LOGIN
          </Text>
          </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    marginVertical: 15,
    width: '100%',
    height: 54,
    backgroundColor: 'white',
    borderRadius: 3,
    fontSize:16,
  },
  form: {
    marginTop: 30,
  },
  finger:{
    marginTop:85,
    alignItems:'center',
  },
  text:{
    fontSize:14,
    color:'white',
    fontStyle:'EMprint Semibold',
  },
  text2:{
        width:27,
        hight:24,
        color:'white',
        fontSize:18,
        fontStyle:'OpenSans-Bold',
  },
  button:{
    backgroundColor:'white',
    width:130,
    height:44,
    marginTop:45,
    borderRadius:3,
    justifyContent:'center',
    alignItems:'center',
  },
  
  
});

export default SignIn;
