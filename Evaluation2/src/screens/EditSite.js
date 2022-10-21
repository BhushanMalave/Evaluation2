import React from 'react';

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
import Icon from 'react-native-vector-icons/Feather';
import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {editSite} from '../redux/Slice';
import Toast from "react-native-simple-toast";

export const EditSites = ({navigation}) => {
  const editSiteValidationSchema = yup.object().shape({
    url: yup.string().required(),
    siteName: yup.string().required(),
    folder: yup.string().required(),
    userName: yup.string().required(),
    sitePassword: yup.string().required(),
    notes: yup.string().required(),
  });
  const route = useRoute();
  const siteDetails = route.params.siteDetails;
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
            navigation.navigate('Site Details', {siteDetails});
          }}
        />
        <Text style={styles.text2}> Edit </Text>
      </View>
      <Formik
        validationSchema={editSiteValidationSchema}
        initialValues={{
          url: siteDetails.url,
          siteName: siteDetails.siteName,
          folder: siteDetails.folder,
          userName: siteDetails.userName,
          sitePassword: siteDetails.sitePassword,
          notes: siteDetails.notes,
        }}
        onSubmit={ values => {
          console.log(values);
          const obj = {
            id: siteDetails.id,
            url: values.url,
            siteName: values.siteName,
            folder: values.folder,
            userName: values.userName,
            sitePassword: values.sitePassword,
            notes: values.notes,
          };
          dispatch(editSite(obj));
          navigation.navigate('Site');
          Toast.show(
            `Updated Successfully`,
            Toast.SHORT,
          );
        }}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          isValid,
        }) => (
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
              <Pressable
                onPress={handleSubmit}
                disabled={!isValid}
                style={styles.button}>
                <Text style={styles.buttontext}>Update</Text>
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
  topbar: {
    backgroundColor: '#0E85FF',
    flexDirection: 'row',
    height: 60,
  },
  iconpassword: {
    left: 300,
    bottom: 40,
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
  icon: {
    marginTop: 20,
    marginLeft: 5,
  },
  buttonbody: {
    marginTop: Platform.OS === 'ios' ? 0 : 7,
  },
  button: {
    height: 55,
    width: '100%',
    backgroundColor: '#0E85FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttontext: {
    height: 28,
    width: 65,
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center',
  },
});
