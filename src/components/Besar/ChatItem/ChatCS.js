import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, responsiveWidth } from '../../../utils'

const ChatCS = () => {
  return (
    <View style={styles.container}>
        <View style={styles.content}>
        <Text style={styles.text}>Hallo selamat berbelanja</Text>
        </View>
      <Text style={styles.date}>4.45 AM</Text>
    </View>
  )
}

export default ChatCS

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        alignItems: 'flex-end',
        paddingRight: 16
    }, 
    content: {
        padding: 12,
        paddingRight: 18,
        backgroundColor: colors.ketiga,
        maxWidth: '70%',
        borderRadius: 24,
        borderTopRightRadius: 0
    },
    text: {
        fontSize: 14,
        color: colors.kedua,
        fontFamily: 'Montserrat-Medium'
    },
    date: {
        fontSize: 11,
        fontFamily: 'Montserrat-Medium',
        color: '#817F7F',
        marginTop: 5
    }
})