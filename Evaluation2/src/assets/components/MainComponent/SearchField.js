import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
const SearchField = ({onChangeText,onPress,}) => {
  return (
    <View style={styles.SectionStyle}>
      <TextInput
        onChangeText={onChangeText}
        style={styles.text}
        placeholder="Type Keywords to search"></TextInput>
      <Icon name="arrow-right" onPress={onPress} size={25} color="#0E85FF" style={styles.icon} />
    </View>
  );
};
export default SearchField;

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 55,
    width: 390,
    borderRadius: 4,
    justifyContent: 'space-between',
    fontWeight: 'bold',
  },
  icon: {
    marginRight: 10,
  },
  text: {
    marginLeft: 20,
    width: 300,
  },
});
