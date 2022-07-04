import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../../../utils/colors'
import { IconBeranda,
        IconBerandaActive,
        IconObrolan,
        IconObrolanActive,
        IconPesanan, 
        IconPesananActive, 
        IconProfile, 
        IconProfileActive 
        } from '../../../assets'

const TabItemCS = ({isFocused, onLongPress, onPress, label}) => {
    const Icon = () => {
        if(label === "Beranda") {
            return isFocused ? <IconBerandaActive/> : <IconBeranda/>
        }

        if(label === "Obrolan") {
          return isFocused ? <IconObrolanActive/> : <IconObrolan/>
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
        <Icon/>
      <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  )
}

export default TabItemCS

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