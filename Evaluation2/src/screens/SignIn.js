import React, {useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  View,
  Image,
  ScrollView,
} from 'react-native';

import {Formik} from 'formik';
import * as yup from 'yup';
import {Buttons} from '../assets/components/Button/Buttons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Feather';
import Toast from 'react-native-simple-toast';
import {changeUserState} from '../redux/userStateSlice';
import {useDispatch} from 'react-redux';
import {assignUserId} from '../redux/userIdSlice';

const SignIn = ({navigation}) => {
  const signinValidationSchema = yup.object().shape({
    mobileno: yup
      .string()
      .matches(/(\d){10}\b/, 'Enter a valid mobile number')
      .max(10, ({max}) => `mobile number must be${max} of characters`)
      .required('Phone number is required'),
    mpin: yup
      .string()
      .matches(/(\d){4}\b/, 'mPin must have a number')
      .max(4, ({max}) => `mPin must be${max} of characters`)
      .required('mPin is required'),
  });

  const [icon, setIcon] = useState('eye');
  const [secureText, setSecureText] = useState(true);
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <ScrollView>
          <Formik
            validationSchema={signinValidationSchema}
            initialValues={{mobileno: '', mpin: ''}}
            onSubmit={async (values, {resetForm}) => {
              try {
                const jsonValue = await AsyncStorage.getItem(values.mobileno);
                if (jsonValue != null) {
                  parseValue = JSON.parse(jsonValue);
                  dispatch(assignUserId(parseValue));
                  if (
                    values.mobileno === parseValue.mobileno &&
                    values.mpin === parseValue.mpin
                  ) {
                    Toast.show(`Congrats!!! Success `, Toast.SHORT);
                    dispatch(changeUserState());
                    resetForm({initialValues: ''});
                  } else {
                    Toast.show(
                      `Enter Correct Mobile Number and MPin `,
                      Toast.SHORT,
                    );
                  }
                } else {
                  Toast.show(
                    `User dont have account \n       Please SignUp`,
                    Toast.SHORT,
                  );
                }
              } catch (err) {
                console.log(err);
              }
            }}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              isValid,
            }) => (
              <>
                <TextInput
                  name="mobileno"
                  placeholder="     Mobile Number"
                  placeholderTextColor={'grey'}
                  style={styles.textInput}
                  onChangeText={handleChange('mobileno')}
                  onBlur={handleBlur('mobileno')}
                  value={values.mobileno}
                  keyboardType="number-pad"
                />
                {errors.mobileno && (
                  <Text style={{fontSize: 10, color: 'red'}}>
                    {errors.mobileno}
                  </Text>
                )}
                <View style={styles.mpinView}>
                  <TextInput
                    name="mpin"
                    placeholder="    MPin"
                    style={styles.textInput1}
                    onChangeText={handleChange('mpin')}
                    placeholderTextColor={'grey'}
                    onBlur={handleBlur('mpin')}
                    value={values.mpin}
                    keyboardType="number-pad"
                    secureTextEntry={secureText}
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
                </View>
                {errors.mpin && (
                  <Text style={{fontSize: 10, color: 'red'}}>
                    {errors.mpin}
                  </Text>
                )}

                <Pressable style={{}}>
                  <Text style={styles.text}>Forgot your Password?</Text>
                </Pressable>
                <View style={styles.button}>
                  <Buttons
                    name="SIGN IN"
                    onPress={handleSubmit}
                    disabled={!isValid}
                  />
                </View>

                <View style={styles.finger}>
                  <Image
                    source={require('../assets/images/fingerprinticon.png')}
                  />
                </View>
                <View style={styles.textbox}>
                  <Text style={styles.text1}>OR</Text>
                  <Text style={styles.text3}>
                    USE YOUR FINGERPRINT TO LOGIN
                  </Text>
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
  textInput: {
    marginVertical: 15,
    width: '100%',
    height: 54,
    backgroundColor: 'white',
    borderRadius: 3,
    fontSize: 16,
    color: '#3C4858',
    paddingLeft:20,
  },
  textInput1: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 3,
    fontSize: 16,
    color: '#3C4858',
    height: 54,
    paddingLeft:25,
  },
  form: {
    marginTop: 30,
  },
  finger: {
    marginTop: 85,
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    color: 'white',
    // fontStyle: 'EMprint Semibold',
  },
  mpinView: {
    flexDirection: 'row',
    backgroundColor: 'white',
    width: '100%',
    marginVertical: 10,
    borderRadius: 3,
    height: 54,
  },
  icon: {
    top: 15,
    left: 20,
  },
  textbox: {
    flexDirection: 'row',
    marginTop: 15,
    alignContent: 'center',
    justifyContent: 'center',
  },
  text1: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    height: 24,
    width: 40,
    // fontStyle: 'OpenSans-bold',
  },
  text2: {
    width: 27,
    hight: 24,
    color: 'white',
    fontSize: 18,
    // fontStyle: 'OpenSans-Bold',
  },
  text3: {
    fontSize: 13,
    lineHeight: 25,
    color: '#FFFFFF',
    height: 21,
    width: 219,
    // fontStyle: 'EMprint-Semibold',
  },
  button: {
    backgroundColor: 'white',
    width: 130,
    height: 44,
    marginTop: 45,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SignIn;
