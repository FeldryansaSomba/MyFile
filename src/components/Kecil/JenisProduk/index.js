import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../utils';
import { Picker } from '@react-native-picker/picker';
import Gap from '../Gap';

const JenisProduk = ({label, width, height, fontSize, selectedValue, onValueChange}) => {
 

  return (
    <View style={styles.container} >
      <Text style={styles.label(fontSize)}>{label} :</Text>
      <Gap height={5}/>
      <View style={styles.wrapperPicker}>
        <Picker
          selectedValue={selectedValue}
          style={styles.picker(width, height, fontSize)}
          onValueChange={onValueChange}
          >

          <Picker.Item label="-- Pilih --" value="" />
          <Picker.Item label='Meja' value='Meja'/>
          <Picker.Item label='Kursi' value='Kursi'/>
          <Picker.Item label='Pintu' value='Pintu'/>
          <Picker.Item label='Jendela' value='Jendela'/>
          <Picker.Item label='Lemari' value='Lemari'/>
         
        </Picker>
      </View>
    </View>
  );
};

export default JenisProduk;

const styles = StyleSheet.create({
  container: {
    
  },
  label: (fontSize) => ({
    fontSize: fontSize ? fontSize : RFValue(14),
    fontFamily: 'Montserrat-Medium',
    color: colors.kedua
  }),
  picker: (width, height, fontSize) => ({
    fontSize: fontSize ? fontSize : RFValue(14),
    fontFamily: 'Montserrat-SemiBold',
    width: width,
    height: height,
    color: colors.kedua,
    marginTop: -10,
    marginBottom: 10,
  }),
  wrapperPicker: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.kedua,
  }
});

