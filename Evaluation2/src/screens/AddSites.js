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

export const AddSites = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.text}>URL</Text>
        <TextInput style={styles.textInput} />
        <Text style={styles.text}>Site Name</Text>
        <TextInput style={styles.textInput} />
        <Text style={styles.text}>Sector/Folder</Text>
        <TextInput style={styles.textInput} />
        <Text style={styles.text}>User Name</Text>
        <TextInput style={styles.textInput} />
        <Text style={styles.text}>Site Password</Text>
        <TextInput style={styles.textInput} />
        <Text style={styles.text}>Notes</Text>
        <TextInput style={styles.textNotes} />
      </View>
      <View style={styles.buttonbody}>
        <Pressable onPress={() => {}} style={styles.button}>
          <Text style={styles.buttontext}>Reset</Text>
        </Pressable>
        <Pressable onPress={() => {}} style={styles.button1}>
          <Text style={styles.buttontext}>Save</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    height: 61,
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
  },
  button1: {
    height: 55,
    width: 195,
    backgroundColor: '#0E85FF',
    marginLeft: 3,
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
});
