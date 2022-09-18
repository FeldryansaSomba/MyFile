import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts, responsiveHeight} from '../../../utils';
import { Picker } from '@react-native-picker/picker';

const JenisProduk = ({label, datas, width, height, fontSize, selectedValue, onValueChange}) => {
 

  return (
    <View 
    // style={styles.container}
    >
      <Text 
      // style={styles.label(fontSize)}
      >{label} :</Text>
      <View 
      // style={styles.wrapperPicker}
      >
        <Picker
          selectedValue={selectedValue}
          // style={styles.picker(width, height, fontSize)}
          onValueChange={onValueChange}
          >

          <Picker.Item label="--Pilih--" value="" />
          <Picker.Item label='Meja' value='Meja'/>
          <Picker.Item label='Kursi' value='Kursi'/>
          <Picker.Item label='Pintu' value='Pintu'/>
          <Picker.Item label='Jendela' value='Jendela'/>
         
        </Picker>
      </View>
    </View>
  );
};

export default JenisProduk;

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 10,
//   },
//   label: (fontSize) => ({
//     fontSize: fontSize ? fontSize : 18,
//     // fontFamily: fonts.primary.regular,
//   }),
//   picker: (width, height, fontSize) => ({
//     fontSize: fontSize ? fontSize : 18,
//     // fontFamily: fonts.primary.regular,
//     width: width,
//     height: height ? height : responsiveHeight(46),
//     marginTop: -10,
//     marginBottom: 10
//   }),
//   wrapperPicker: {
//     borderWidth: 1,
//     borderRadius: 5,
//     borderColor: colors.border,
//   }
// });

