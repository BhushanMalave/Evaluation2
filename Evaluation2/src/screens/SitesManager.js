import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import {MainComp} from '../assets/components/MainComponent/MainComp';
import {Button2} from '../assets/components/Button/Buttons';

import {useSelector, useDispatch} from 'react-redux';

import {useState} from 'react';
import SearchField from '../assets/components/MainComponent/SearchField';
import {filterSite} from '../redux/Slice';
import {deleteSite} from '../redux/Slice';

export const SitesManager = ({navigation}) => {
  const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();
  const siteData = useSelector(state => state.site.value);
  const renderItem = ({item}) => (
    <MainComp
      title={item.siteName}
      uri={item.icon}
      url={item.url}
      onPress={() => navigation.navigate('Site Details', {item})}
      onLongPress={() => dispatch(deleteSite(item))}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bodytop}>
        <View style={styles.bodytopin1}>
          <Image
            source={require('../assets/images/burger_menu.png')}
            style={styles.image1}
          />
          <Image
            source={require('../assets/images/pass.png')}
            style={styles.image2}
          />
        </View>
        <View style={styles.bodytopin2}>
          <Pressable onPress={() => setClicked(true)}>
            <Image
              source={require('../assets/images/search.png')}
              style={styles.image3}
            />
          </Pressable>
          <Image
            source={require('../assets/images/sync_icn.png')}
            style={styles.image4}
          />
          <Image
            source={require('../assets/images/profile.png')}
            style={styles.image5}
          />
        </View>
      </View>

      {clicked ? (
        <SearchField
          onChangeText={text => dispatch(filterSite(text))}
          onPress={() => setClicked(false)}
        />
      ) : (
        <View>
          <View style={styles.bodytop2}>
            <Text style={styles.text1}>Sites</Text>
            <View style={styles.bodytop2in}>
              <Text style={styles.text2}>Social Media</Text>
              <View style={styles.oval}>
                <Text style={styles.number}>{siteData.length}</Text>
              </View >
              <Pressable>
                <Image
                  source={require('../assets/images/pathcopy.png')}
                  style={styles.image6}
                />
              </Pressable>
            </View>
          </View>
          <View style={styles.bottomborder} />
        </View>
      )}

      <View style={styles.container2}>
        <View>
          <FlatList
            data={siteData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
      <Button2
        onPress={() => {
          navigation.navigate('Add Site');
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  container2: {
    marginHorizontal: 20,
    marginVertical: 10,
    flex: 2,
  },
  bodytop: {
    height: 55,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#0E85FF',
    justifyContent: 'space-between',
  },
  bodytopin1: {
    flexDirection: 'row',
  },
  bodytopin2: {
    flexDirection: 'row',
  },
  bodytop2: {
    flexDirection: 'row',
    marginTop: 1,
    height: 40,
    width: '100%',
    justifyContent: 'space-between',
  },
  bodytop2in:{
    flexDirection:'row',
  },
  bottomborder: {
    borderBottomWidth: 4,
    height: 3.2,
    width: 30,
    borderBottomColor: '#FFA136',
    borderRadius: 1.6,
    marginBottom: 10,
    marginLeft: 17,
  },
  image1: {
    marginTop: 20,
    marginLeft: 20,
  },
  image2: {
    marginTop: 15,
    marginLeft: 20,
  },
  image4: {
    marginTop: 15,
    marginLeft: 20,
  },
  image3: {
    marginTop: 15,
  },
  image5: {
    marginTop: 15,
    marginLeft: 20,
    marginRight: 10,
  },
  image6: {
    marginTop: 22,
    marginLeft: 7,
    marginRight: 10,
  },
  text1: {
    height: 55,
    fontSize: 24,
    textAlign: 'left',
    marginLeft: 17,
    marginTop: 10,
    color:"black",
  },
  text2: {
    height: 27,
    fontSize: 20,
    marginTop: 4,
    marginLeft: 120,
    marginTop: 15,
    color:"black",
  },
  number: {
    height: 22,
    width: 19,
    color: '#FFFFFF',
    // fontFamily: 'Open Sans',
    fontSize: 16,
    marginLeft: Platform.OS === 'ios' ? 7 : 9,
    marginTop: Platform.OS === 'ios' ? 2 : 1,
  },
  oval: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 29,
    width: 29,
    backgroundColor: '#0E85FF',
    borderRadius: 20,
    marginLeft: 10,
    marginTop: 12,
  },
});
