import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const EdsonHome = () => {
  return (
        <View style={styles.container}>
    <View style={styles.page}>
      <Text style={styles.text}>Edson Ganteng</Text>
      </View>
    </View>
  )
}

export default EdsonHome

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'black',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
        
    },
    container: {
        backgroundColor: 'white',
        padding: 10,
        flex: 1
    },
    text: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'Montserrat-Bold'
    }
})