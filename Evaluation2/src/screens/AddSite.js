import React, {useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  ScrollView,
} from 'react-native';
import {Formik, Field} from 'formik';
import * as yup from 'yup';
import {addSite} from '../redux/Slice';
import {useSelector, useDispatch} from 'react-redux';
import Facebook from '../assets/images/Bitmap.png';
import Toast from 'react-native-simple-toast';
import Icon from 'react-native-vector-icons/Feather';
import SelectList from 'react-native-dropdown-select-list';
import uuid from 'react-native-uuid';

const AddSite = ({navigation}) => {
  const addSiteValidationSchema = yup.object().shape({
    url: yup.string().required(),
    siteName: yup.string().required(),
    userName: yup.string().required(),
    sitePassword: yup.string().required(),
    notes: yup.string().required(),
  });

  const siteData = useSelector(state => state.site.value);
  const dispatch = useDispatch();
  const [icon, setIcon] = useState('eye');
  const [secureText, setSecureText] = useState(true);
  const [selected, setSelected] = useState('');
  const userId = useSelector(state => state.userId.userId);
  const data = [
    {
      key: 'Social Media',
      value: 'Social Media',
    },
    {
      key: 'Shopping Apps',
      value: 'Shopping Apps',
    },
  ];
  const initialValues = {
    id: uuid.v4(),
    url: ' ',
    siteName: ' ',
    folder: selected,
    userName: '',
    sitePassword: '',
    notes: '',
    icon: Facebook,
  };
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
        initialValues={initialValues}
        onSubmit={values => {
          const obj = {
            id: values.id,
            url: values.url,
            siteName: values.siteName,
            folder: selected,
            userName: values.userName,
            sitePassword: values.sitePassword,
            notes: values.notes,
            icon: Facebook,
            userId: userId,
          };
          dispatch(addSite(obj));
          Toast.show(`Saved Successfully`, Toast.SHORT);
          navigation.navigate('Site');
        }}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          resetForm,
          values,
          isValid,
        }) => (
          <>
            <ScrollView>
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
                <SelectList
                  data={data}
                  setSelected={setSelected}
                  boxStyles={styles.dropDownBox}
                  inputStyles={styles.dropDropInput}
                  dropdownStyles={styles.dropDown}
                  values={selected}
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
                <View style={styles.vieweye}>
                  <TextInput
                    name="sitePassword"
                    onChangeText={handleChange('sitePassword')}
                    secureTextEntry={secureText}
                    onBlur={handleBlur('sitePassword')}
                    value={values.sitePassword}
                    style={styles.textInput1}
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
                </View>
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
            </ScrollView>
            <View style={styles.buttonbody}>
              <Pressable
                onPress={() => resetForm({initialValues})}
                style={styles.button}>
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
    backgroundColor: 'white',
  },
  iconpassword: {
    top: 10,
    left: 40,
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
  vieweye: {
    flexDirection: 'row',
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
    color: 'black',
  },
  textInput1: {
    height: 39,
    width: '80%',

    backgroundColor: '#F5F7FB',

    color: 'black',
  },
  vieweye: {
    backgroundColor: '#F5F7FB',
    height: 41,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#D7D7D7',
    marginVertical: 10,
  },
  dropDownBox: {
    height: 43,

    borderColor: '#D7D7D7',
    backgroundColor: '#F5F7FB',
    borderRadius: 4,
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
  },
  dropDropInput: {
    fontSize: 13,
    fontWeight: '200',
    color: 'bol',
  },
  dropDown: {
    width: 321,
    borderColor: '#D7D7D7',
    backgroundColor: '#F5F7FB',
    borderRadius: 4,
    borderWidth: 1,
    marginHorizontal: 20,
    marginVertical: 10.5,
    padding: 10,
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
    color: 'black',
  },
  buttonbody: {
    flexDirection: 'row',
    width: '100%',
    marginTop: Platform.OS === 'ios' ? -40 : -50,
    flex: 1,
  },
  button1: {
    height: 55,
    width: '50%',
    backgroundColor: '#0E85FF',
    marginLeft: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 55,
    width: '50%',
    backgroundColor: '#0E85FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttontext: {
    height: 28,
    width: 60,
    color: '#FFFFFF',
    fontSize: 20,
  },
  icon: {
    marginTop: 20,
    marginLeft: 5,
  },
});

export default AddSite;
