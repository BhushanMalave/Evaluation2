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
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {MainComp} from '../assets/components/MainComponent/MainComp';
import {Button2} from '../assets/components/Button/Buttons';
import {Data} from '../assets/data/data';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';
import {useState} from 'react';
import SearchField from '../assets/components/MainComponent/SearchField';

export const SitesManager = ({navigation}) => {
  const [clicked, setClicked] = useState(true);
  const siteData = useSelector(state => state.site.value);
  const renderItem = ({item}) => (
    <MainComp
      title={item.siteName}
      uri={item.icon}
      url={item.siteName}
      onPress={() => navigation.navigate('Site Details',{item})}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bodytop}>
        <Image
          source={require('../assets/images/burger_menu.png')}
          style={styles.image1}
        />
        <Image
          source={require('../assets/images/pass.png')}
          style={styles.image2}
        />
        <Image
          source={require('../assets/images/search.png')}
          style={styles.image3}
        />
        <Image
          source={require('../assets/images/sync_icn.png')}
          style={styles.image4}
        />
        <Image
          source={require('../assets/images/profile.png')}
          style={styles.image5}
        />
      </View>

      <View style={styles.container2}>
        {/* {clicked ? (
          <SearchField/>
        ) : ( */}
          
          <View>
            <View style={styles.bodytop2}>
              <Text style={styles.text1}>Sites</Text>
              <Text style={styles.text2}>Social Media</Text>

              <View style={styles.oval}>
                <Text style={styles.number}>{siteData.length}</Text>
              </View>
              <Pressable>
                <Image
                  source={require('../assets/images/pathcopy.png')}
                  style={styles.image6}
                />
              </Pressable>
            </View>
            <View style={styles.bottomborder}/>
            
            </View> 
        {/* )} */}
        <View>
          <FlatList
            data={siteData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
        <Button2
          onPress={() => {
            navigation.navigate('Add Site');
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 55,
    width: 390,
    borderRadius: 4,
    justifyContent: 'space-between',
    // paddingHorizontal: 10,
    fontWeight: 'bold',
    padding: 10,
    marginTop: 5,
  },
  container2: {
    marginHorizontal: 20,
    marginVertical: 20,
    flex: 2,
  },
  bodytop: {
    height: 55,
    flexDirection: 'row',
    backgroundColor: '#0E85FF',
    // justifyContent: 'space-evenly',
  },
  bodytop2: {
    flexDirection: 'row',
    marginTop: 1,
    height: 40,
  },
  bottomborder: {
    borderBottomWidth: 4,
    height: 3.2,
    width: 30,
    borderBottomColor: '#FFA136',
    borderRadius: 1.6,
    marginBottom:10,
  },
  image1: {
    marginTop: 20,
    marginLeft: 25,
  },
  image2: {
    marginTop: 15,
    marginLeft: 20,
  },
  image4: {
    marginTop: 15,
    marginLeft: 30,
  },
  image3: {
    marginTop: 15,
    marginLeft: 90,
  },
  image5: {
    marginTop: 15,
    marginLeft: 30,
  },
  image6: {
    marginTop: 13,
    marginLeft: 7,
  },
  text1: {
    height: 55,
    widht: 55,
    fontSize: 24,
    textAlign: 'left',
  },
  text2: {
    width: 113,
    height: 27,
    fontSize: 20,
    marginTop: 4,
    marginLeft: 120,
  },
  number: {
    height: 22,
    width: 19,
    color: '#FFFFFF',
    // fontFamily: 'Open Sans',
    fontSize: 16,
    marginLeft: 7,
    marginTop: 2,
  },
  oval: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 29,
    width: 29,
    backgroundColor: '#0E85FF',
    borderRadius: 20,
    marginLeft: 8,
  },
});
