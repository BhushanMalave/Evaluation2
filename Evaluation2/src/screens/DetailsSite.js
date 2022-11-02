import React, {useState} from 'react';
import {useRoute} from '@react-navigation/native';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export const DetailsSite = ({navigation}) => {
  const route = useRoute();
  const [siteDetails, setSiteDetails] = useState(route.params.item);
  const [icon, setIcon] = useState('eye');
  const [secureText, setSecureText] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topbar}>
        <View style={styles.topbarin}>
          <Icon
            name="arrow-left"
            size={25}
            color="white"
            style={styles.icon}
            onPress={() => {
              navigation.navigate('Site', {siteDetails});
            }}
          />
          <Text style={styles.text2}> Site Details</Text>
        </View>
        <Pressable
          onPress={() => {
            navigation.navigate('Edit Site', {siteDetails});
          }}>
          <Text style={styles.text3}>Edit</Text>
        </Pressable>
      </View>
      <ScrollView>
        <View style={styles.body}>
          <Text style={styles.text}>URL</Text>
          <TextInput value={siteDetails.url} style={styles.textInput} />
          <Text style={styles.text}>Site Name</Text>
          <TextInput value={siteDetails.siteName} style={styles.textInput} />
          <Text style={styles.text}>Sector/Folder</Text>
          <TextInput value={siteDetails.folder} style={styles.textInput} />
          <Text style={styles.text}>User Name</Text>
          <TextInput value={siteDetails.userName} style={styles.textInput} />
          <Text style={styles.text}>Site Password</Text>
          <View style={styles.vieweye}>
            <TextInput
              value={siteDetails.sitePassword}
              secureTextEntry={secureText}
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
            value={siteDetails.notes}
            style={styles.textNotes}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  iconpassword: {
    left: 40,
    top: 10,
  },
  textInput1: {
    height: 39,
    width: '80%',
    backgroundColor: '#F5F7FB',
    color: '#3C4858',
    paddingLeft:25,
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
  topbar: {
    backgroundColor: '#0E85FF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
  },
  topbarin: {
    flexDirection: 'row',
  },
  text1: {
    marginTop: 20,
    marginLeft: 9,
  },
  text2: {
    height: 28,
    width: 103,
    fontSize: 20,
    marginLeft: 15,
    marginTop: 20,
    color: '#FFFFFF',
  },
  text3: {
    height: 28,
    width: 103,
    fontSize: 20,
    marginTop: 20,
    marginLeft: 170,
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
    color: '#3C4858',
    paddingLeft:25,
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
    color: '#3C4858',
    paddingLeft:25,
    paddingTop:10,
  },
  icon: {
    marginTop: 20,
    marginLeft: 5,
  },
});
