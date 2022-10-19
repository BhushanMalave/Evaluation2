import React from 'react';
import {
  Pressable,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

const Buttons = ({onPress, name}) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress} style={styles.button}>
        <Text style={styles.text}>{name}</Text>
      </Pressable>
    </View>
  );
};

const Button2 = ({onPress, name}) => {
  return (
    <TouchableOpacity style={styles.touchableOpacity} onPress={onPress}>
      <Image
        source={require('../../images/add_btn.png')}
        style={styles.floatingButton}
      />
    </TouchableOpacity>
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
  touchableOpacity: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 15,
    bottom: 50,
  },

  floatingButton: {
    resizeMode: 'contain',
    width: 48,
    height: 48,
  },
});

export {Buttons, Button2};
