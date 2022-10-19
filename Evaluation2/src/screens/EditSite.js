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
import {Formik, Field} from 'formik';
import * as yup from 'yup';
import Icon from 'react-native-vector-icons/AntDesign';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { editSite } from '../redux/Slice';

export const EditSites = ({navigation}) => {
  const editSiteValidationSchema = yup.object().shape({});
  const route = useRoute();
  const [siteDetails,setSiteDetails] = useState(route.params.siteDetails)
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topbar}>
      <Icon  name="arrowleft"
                size={25}
                color="white"
                style={styles.icon}
                onPress={() => {
                  navigation.navigate('Site Details',{siteDetails});
                }}/>
        <Text style={styles.text2}> Edit </Text>
      </View>
      <Formik
        validationSchema={editSiteValidationSchema}
        initialValues={{
          url: ' ',
          siteName: ' ',
          folder: '',
          userName: '',
          sitePassword: '',
          notes: ' ',
        }}
        onSubmit={async values => {
          console.log(values);
          const obj ={
            id:siteDetails.id,
            url:values.url,
            siteName:values.siteName,
            folder:values.folder,
            userName:values.userName,
            sitePassword:values.sitePassword,
            notes:values.notes,
          };
          dispatch(editSite(obj));
          navigation.navigate("Site")
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
              onBlur={handleBlur('sitePassword')}
              value={values.sitePassword}
              style={styles.textInput}
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
                onPress={
                  handleSubmit
                }
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
  icon:{
    marginTop:20,
    marginLeft:5,
  },
  buttonbody: {
     marginTop:Platform.OS === 'ios' ? 10 : 7,
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
