import React, {useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
} from 'react-native';
import {Formik, Field} from 'formik';
import * as yup from 'yup';
import {addSite} from '../redux/Slice';
import {useSelector, useDispatch} from 'react-redux';
import Facebook from '../assets/images/Bitmap.png';
import Toast from 'react-native-simple-toast';
import Icon from 'react-native-vector-icons/Feather';

const AddSite = ({navigation}) => {
  const addSiteValidationSchema = yup.object().shape({
    url: yup.string().required(),
    siteName: yup.string().required(),
    folder: yup.string().required(),
    userName: yup.string().required(),
    sitePassword: yup.string().required(),
    notes: yup.string().required(),
  });
  const siteData = useSelector(state => state.site.value);
  const dispatch = useDispatch();
  const [icon, setIcon] = useState('eye');
  const [secureText, setSecureText] = useState(true);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topbar}>
        <Icon
          name="arrow-left"
          size={25}
          color="white"
          style={styles.icon}
          onPress={() => {
            navigation.navigate('Site');
          }}
        />

        <Text style={styles.text2}> Add Site </Text>
      </View>
      <Formik
        validationSchema={addSiteValidationSchema}
        initialValues={{
          id: siteData.length + 1,
          url: ' ',
          siteName: ' ',
          folder: '',
          userName: '',
          sitePassword: '',
          notes: '',
          icon: Facebook,
        }}
        onSubmit={values => {
          console.log(values);
          dispatch(addSite(values));
          Toast.show(`Saved Successfully`, Toast.SHORT);
          navigation.navigate('Site');
        }}>
        {({handleChange, handleBlur, handleSubmit, values, isValid}) => (
          <>
            <View style={styles.body}>
              <Text style={styles.text}>URL</Text>
              <TextInput
                name="url"
                onChangeText={handleChange('url')}
                onBlur={handleBlur('url')}
                value={values.url}
                style={styles.textInput}
              />
              <Text style={styles.text}>Site Name</Text>
              <TextInput
                name="siteName"
                onChangeText={handleChange('siteName')}
                onBlur={handleBlur('siteName')}
                value={values.siteName}
                style={styles.textInput}
              />
              <Text style={styles.text}>Sector/Folder</Text>
              <TextInput
                name="folder"
                onChangeText={handleChange('folder')}
                onBlur={handleBlur('folder')}
                value={values.folder}
                style={styles.textInput}
              />
              <Text style={styles.text}>User Name</Text>
              <TextInput
                name="userName"
                onChangeText={handleChange('userName')}
                onBlur={handleBlur('userName')}
                value={values.userName}
                style={styles.textInput}
              />
              <Text style={styles.text}>Site Password</Text>
              <TextInput
                name="sitePassword"
                onChangeText={handleChange('sitePassword')}
                secureTextEntry={secureText}
                onBlur={handleBlur('sitePassword')}
                value={values.sitePassword}
                style={styles.textInput}
              />
              <Icon
                name={icon}
                size={20}
                color="grey"
                style={styles.iconpassword}
                onPress={() => {
                  setSecureText(!secureText);
                  secureText ? setIcon('eye-off') : setIcon('eye');
                }}
              />
              <Text style={styles.text}>Notes</Text>
              <TextInput
                multiline
                numberOfLines={4}
                name="notes"
                onChangeText={handleChange('notes')}
                onBlur={handleBlur('notes')}
                value={values.notes}
                style={styles.textNotes}
              />
            </View>
            <View style={styles.buttonbody}>
              <Pressable onPress={() => {}} style={styles.button}>
                <Text style={styles.buttontext}>Reset</Text>
              </Pressable>
              <Pressable
                onPress={handleSubmit}
                disabled={!isValid}
                style={styles.button1}>
                <Text style={styles.buttontext}>Save</Text>
              </Pressable>
            </View>
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconpassword: {
    left: 300,
    bottom: 40,
  },
  body: {
    margin: 20,
  },
  topbar: {
    backgroundColor: '#0E85FF',
    flexDirection: 'row',
    height: 60,
  },
  text1: {
    marginTop: 20,
    marginLeft: 9,
  },
  text2: {
    height: 28,
    width: 103,
    fontSize: 20,
    marginTop: 20,
    marginLeft: 30,
    color: '#FFFFFF',
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
    flexDirection: 'row',
    marginTop: Platform.OS === 'ios' ? -5 : -13,
  },
  button1: {
    height: 55,
    width: 196,
    backgroundColor: '#0E85FF',
    marginLeft: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 55,
    width: 195,
    backgroundColor: '#0E85FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttontext: {
    height: 28,
    width: 52,
    color: '#FFFFFF',
    fontSize: 20,
  },
  icon: {
    marginTop: 20,
    marginLeft: 5,
  },
});

export default AddSite;
