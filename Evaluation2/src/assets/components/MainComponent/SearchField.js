import React from "react";
import { TextInput,View ,StyleSheet} from "react-native";
import Icon from 'react-native-vector-icons/AntDesign'
const SearchField=()=>{
    return(
        <View style={styles.SectionStyle}>
            <TextInput
            placeholder="Type Keywords to search">
            </TextInput>
            <Icon name="arrowright" size={25} color="white"/>
        </View>
    )
}
export default SearchField;

const styles=StyleSheet.create({
    
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
        padding:10,
        marginTop:5
      },
})