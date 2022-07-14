import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../../../utils/colors'
import { IconBeranda,
    IconBerandaActive,
    IconKerja,
    IconKerjaActive,
    IconPesanan, 
    IconPesananActive, 
    IconProfile, 
    IconProfileActive 
    } from '../../../assets'

const ContohTab = ({isFocused, onLongPress, onPress, label}) => {
    const IconMebel = () => {
        if(label === "Beranda") {
            return isFocused ? <IconBerandaActive/> : <IconBeranda/>
        }

        if(label === "Pesanan") {
            return isFocused ? <IconPesananActive/> : <IconPesanan/>
        }

        if(label === "Profil") {
            return isFocused ? <IconProfileActive/> : <IconProfile/>
        }

        return <IconBeranda/>
    }
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <IconMebel/>
      <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  )
}

export default ContohTab

const styles = StyleSheet.create({
    container: { 
        alignItems: 'center',
    },
    text: (isFocused) => ({
        color: isFocused ? colors.kedua : colors.keenam,
        fontFamily: 'Montserrat-Medium',
        fontSize: 11,
        marginTop: 2
    })
})