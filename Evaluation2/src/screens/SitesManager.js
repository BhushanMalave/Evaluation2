import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {MainComp} from '../assets/components/MainComponent/MainComp';
import {Button2} from '../assets/components/Button/Buttons';

import {useSelector, useDispatch} from 'react-redux';
import Modal from 'react-native-modal';

import {useState} from 'react';
import SearchField from '../assets/components/MainComponent/SearchField';
import {filterSite} from '../redux/Slice';
import {deleteSite} from '../redux/Slice';
import {filterDropDownSite} from '../redux/Slice';
import { changeUserState } from '../redux/userStateSlice';

export const SitesManager = ({navigation}) => {
  const [clicked, setClicked] = useState(false);
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const siteData = useSelector(state => state.site.value);
  const sitesFolder = ['All', 'Social Media', 'Shopping Apps'];
  const [title, setTitle] = useState('All');
  const [modalVisiblity, setModalVisiblity] = useState(false);


  const setDropDown = () => {
    setVisible(!visible);
  };

  const handleFolders = folder => {
    setTitle(folder);
    dispatch(filterDropDownSite(folder));
    setVisible(false);
  };

  const renderDropDown = () => {
    if (visible) {
      return (
        <View style={styles.dropdownContainer}>
          {sitesFolder.map(folder => (
            <TouchableOpacity
              onPress={() => {
                handleFolders(folder);
              }}
              key={folder}>
              <Text style={styles.dropdownText}>{folder}</Text>
            </TouchableOpacity>
          ))}
        </View>
      );
    }
  };

  const handleToggle = () => {
    setModalVisiblity(!modalVisiblity);
  };
  const changeState = () => {
         dispatch(changeUserState())
  }

  const renderItem = ({item}) => (
    <MainComp
      title={item.siteName}
      uri={item.icon}
      url={item.url}
      password={item.sitePassword}
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
          <TouchableOpacity onPress={handleToggle}>
            <Image
              source={require('../assets/images/sync_icn.png')}
              style={styles.image4}
            />
          </TouchableOpacity >
          <TouchableOpacity onPress={changeState}>
          <Image
            source={require('../assets/images/profile.png')}
            style={styles.image5}
          />
          </TouchableOpacity>
        </View>
        <Modal isVisible={modalVisiblity} coverScreen={true}>
          <TouchableOpacity onPress={handleToggle}>
            <View style={styles.imageContainer}>
              <Text style={styles.modalText}>Data Sync in Progress</Text>
              <Text style={styles.modalText}>Please wait</Text>
            </View>
            <Image
              source={require('../assets/images/AsyncData.png')}
              style={styles.dataSyncimage}
            />
          </TouchableOpacity>
        </Modal>
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
              <Text style={styles.text2}>{title}</Text>
              <View style={styles.oval}>
                <Text style={styles.number}>{siteData.length}</Text>
              </View>
              <Pressable onPress={setDropDown}>
                <Image
                  source={require('../assets/images/pathcopy.png')}
                  style={styles.image6}
                />
              </Pressable>
            </View>
          </View>
          <View style={styles.bottomborder} />
          {renderDropDown()}
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
  bodytop2in: {
    flexDirection: 'row',
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
  dropdownContainer: {
    marginVertical: 10,
    alignSelf: 'flex-end',
    marginEnd: 15,
    borderRadius: 5,
    borderWidth: 0.2,
    borderColor: '#0E85FF',
    backgroundColor: '#FFFFFF',
  },
  dropdownText: {
    padding: 5,
  },
  text1: {
    height: 55,
    fontSize: 24,
    textAlign: 'left',
    marginLeft: 17,
    marginTop: 10,
    color: 'black',
  },
  text2: {
    height: 27,
    fontSize: 20,
    marginTop: 4,
    marginLeft: 120,
    marginTop: 15,
    color: 'black',    
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
  modalText: {
    alignSelf: 'center',
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  dataSyncimage: {
    alignSelf: 'center',
    height: 40,
    width: 42,
  },
  dataSyncContainer: {
    justifyContent: 'center',
  },
  imageContainer: {
    marginVertical: 33,
  },
});
