import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors, responsiveHeight, heightMobileUI } from '../../utils'
import { ChatItem, InputChatCS } from '../../components'
import { IconKembali } from '../../assets'
import { RFValue } from "react-native-responsive-fontsize";

const ChattingCS = ({navigation}) => {
  return (
    <View style={styles.page}>
    <View style={styles.header}>
    <TouchableOpacity style={styles.icon} onPress={() => navigation.goBack()}>
      <IconKembali/>
    </TouchableOpacity>
      <Text style={styles.title}>Mebel Jaya</Text>
    </View>
    <View style={styles.container}>
      <Text style={styles.date}>Senin, 7 Mei, 2022</Text>
      <ChatItem pelanggan/>
      <ChatItem/>
      <ChatItem pelanggan/>
    </View>
      <InputChatCS/>
    </View>
  )
}

export default ChattingCS

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.keempat
    },
    header: {
        backgroundColor: colors.pertama,
        alignItems: 'center',
        height: responsiveHeight(65),
        flexDirection: 'row'
    },
    icon: {
        marginLeft: 26
    },
    title: {
        fontFamily: 'Montserrat-Bold',
        fontSize: RFValue(17, heightMobileUI),
        color: 'white',
        marginLeft: 16
    },
    container: {
        flex: 1
    },
    date: {
        fontSize: 14,
        fontFamily: 'Montserrat-Medium',
        color: '#817F7F',
        marginTop: 10,
        alignSelf: 'center',
        marginBottom: 15
    }
})