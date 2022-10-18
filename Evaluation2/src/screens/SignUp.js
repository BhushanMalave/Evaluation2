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
} from 'react-native';
import {Formik, Field} from 'formik';
import * as yup from 'yup';
import {Buttons} from '../assets/components/Button/Buttons';

export const SignUp = () => {

  const onClickHandler = () => {
     console.log("111");
  }
  

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <TextInput
          name="mobileno"
          placeholder="   Enter Mobile Number"
          keyboardType="numeric"
          placeholderTextColor="grey"
          style={styles.field}
        />
        <TextInput
          // component={CustomInput}
          name="password"
          placeholder="   Enter 4 digit Mpin"
          placeholderTextColor="grey"
          secureTextEntry
          keyboardType="numeric"
          style={styles.field}
        />
        <TextInput
          // component={CustomInput}
          name="confirmPassword"
          placeholder="   Re-Enter 4 digit Mpin"
          placeholderTextColor="grey"
          secureTextEntry
          keyboardType="numeric"
          style={styles.field}
        />

               <View style={styles.button}>
              <Buttons  name='SIGN UP' onPress={()=>{onClickHandler()}}/>
              </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  field: {
    marginVertical: 15,
    width: '100%',
    height: 54,
    backgroundColor: 'white',
    borderRadius: 3,
    fontSize: 16,
  },
  button: {
    backgroundColor: 'white',
    width: 130,
    height: 44,
    marginTop: 32,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    marginTop: 30,
  },
  buttonText: {
    fontSize: 18,
    // fontStyle: 'OpenSans Semibold',
    textAlign: 'center',
    color: '#0E85FF',
  },
});
