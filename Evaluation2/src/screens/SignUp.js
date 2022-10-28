import React, {useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
} from 'react-native';
import {Formik, Field} from 'formik';
import * as yup from 'yup';
import {Buttons} from '../assets/components/Button/Buttons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Feather';
import Toast from 'react-native-simple-toast';
import {useDispatch} from 'react-redux';
import {addUser} from '../redux/Slice';

export const SignUp = ({navigation}) => {
  const signupValidationSchema = yup.object().shape({
    mobileno: yup
      .string()
      .matches(/(\d){10}\b/, 'Enter a valid mobile number')
      .max(10, ({max}) => `mobile number must be${max} of characters`)
      .required('Mobile number is required'),
    mpin: yup
      .string()
      .matches(/(\d){4}\b/, 'mPin must have a number')
      .max(4, ({max}) => `mPin must be${max} of characters`)
      .required('mPin is required'),
    conformmpin: yup
      .string()
      .oneOf([yup.ref('mpin')], 'mPin do not match')
      .required('Confirm mPin is required'),
  });

  const [icon, setIcon] = useState('eye');
  const [secureText, setSecureText] = useState(true);
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <ScrollView>
          <Formik
            validationSchema={signupValidationSchema}
            initialValues={{mobileno: '', mpin: '', conformmpin: ''}}
            onSubmit={async (values, {resetForm}) => {
              // const obj = {
              //   mobileno:values.mobileno,
              //   mpin:values.mpin,
              // }
              // dispatch(addUser(obj))
              // Toast.show(
              //       `Congrats!!! Success \n Signin to access the vault`,
              //       Toast.SHORT,
              //     );
              try {
                const jsonValue = JSON.stringify(values);
                await AsyncStorage.setItem(values.mobileno, jsonValue);
                Toast.show(
                  `Congrats!!! Success \n Signin to access the vault`,
                  Toast.SHORT,
                );
                navigation.navigate('SIGN IN');
                resetForm({initialValues: ''});
              } catch (err) {
                console.log(err);
              }
            }}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              resetForm,
              values,
              errors,
              isValid,
            }) => (
              <>
                <TextInput
                  name="mobileno"
                  placeholder="   Enter Mobile Number"
                  keyboardType="number-pad"
                  placeholderTextColor="grey"
                  onChangeText={handleChange('mobileno')}
                  onBlur={handleBlur('mobileno')}
                  value={values.mobileno}
                  style={styles.field}
                />
                {errors.mobileno && (
                  <Text style={{fontSize: 10, color: 'red'}}>
                    {errors.mobileno}
                  </Text>
                )}
                <TextInput
                  name="mpin"
                  placeholder="   Enter 4 digit Mpin"
                  onChangeText={handleChange('mpin')}
                  placeholderTextColor={'grey'}
                  onBlur={handleBlur('mpin')}
                  value={values.mpin}
                  keyboardType="number-pad"
                  secureTextEntry={secureText}
                  style={styles.field}
                />
                {errors.mpin && (
                  <Text style={{fontSize: 10, color: 'red'}}>
                    {errors.mpin}
                  </Text>
                )}
                <TextInput
                  name="confirmmpin"
                  placeholder="   Re-Enter 4 digit Mpin"
                  onChangeText={handleChange('conformmpin')}
                  placeholderTextColor={'grey'}
                  onBlur={handleBlur('conformmpin')}
                  value={values.conformmpin}
                  keyboardType="number-pad"
                  secureTextEntry={secureText}
                  style={styles.field}
                />
                <Icon
                  name={icon}
                  size={25}
                  color="grey"
                  style={styles.icon}
                  onPress={() => {
                    setSecureText(!secureText);
                    secureText ? setIcon('eye-off') : setIcon('eye');
                  }}
                />
                {errors.conformmpin && (
                  <Text style={{fontSize: 10, color: 'red'}}>
                    {errors.conformmpin}
                  </Text>
                )}

                <View style={styles.button}>
                  <Buttons
                    name="SIGN UP"
                    onPress={initialValues => {
                      handleSubmit();
                    }}
                    disabled={!isValid}
                  />
                </View>
              </>
            )}
          </Formik>
        </ScrollView>
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
    color: 'black',
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
  icon: {
    left: 290,
    bottom: 53,
  },
});
