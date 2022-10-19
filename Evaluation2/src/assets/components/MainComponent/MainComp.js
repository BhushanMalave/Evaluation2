import React from 'react';

import {StyleSheet, Text, Pressable, View, Image} from 'react-native';

export const MainComp = ({
  title = 'Facebook',
  url = 'www.facebook.com',
  uri,
  onPress,
}) => {
  return (
    <View style={styles.body}>
      <Pressable onPress={onPress}>
        <View style={styles.bodytop}>
          <Image source={uri ? uri : imgUrl} style={styles.logo} />
          <View style={styles.bodyin}>
            <Text style={styles.text1}>{title}</Text>
            <Text style={styles.text2}>Copy Password</Text>
          </View>
        </View>
        <View style={styles.view}>
          <Pressable>
            <Text style={styles.text3}>{url}</Text>
          </Pressable>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    height: 120,
    width: 345,
    borderRadius: 12.6,
    marginTop: 10,
    borderRight: 5,
    backgroundColor: '#FFFFFF',
    shadowOpacity: 0.5,
    paddingEnd: 15,
  },
  bodytop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logo: {
    marginTop: 10,
    marginLeft: 5,
  },
  bodyin: {
    marginVertical: 10,
  },
  text1: {
    height: 24,
    width: 83,
    color: '#0E85FF',
    fontSize: 18,
    lineheight: 24,
    marginTop: 8,
  },
  view: {
    backgroundColor: '#FAFAFA',
    width: 345,
  },
  text2: {
    height: 15,
    weight: 81,
    color: '#0E85FF',
    fontSize: 12,
    marginTop: 8,
  },
  text3: {
    fontSize: 15,
    color: '#3C4857',
    textAlign: 'center',
    backgroundColor: '#FAFAFA',
    paddingTop: 15,
    paddingBottom: 13,
  },
});
