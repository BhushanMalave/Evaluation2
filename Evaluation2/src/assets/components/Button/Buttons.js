import React from 'react';
import {Pressable, View, Text, StyleSheet} from 'react-native';

const Buttons = ({onPress, name}) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress} style={styles.button}>
        <Text style={styles.text}>{name}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    color: '#0E85FF',
    width: 74,
    height: 24,
    lineHeight: 24,
    textAlign: 'left',
  },
  button: {
    backgroundColor: '#ffffff',
    width: 130,
    height: 44,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Buttons;