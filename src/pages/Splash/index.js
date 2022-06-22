import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { LogoSplash } from '../../assets'
import { colors } from '../../utils/colors'

export default class Splash extends Component {

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.replace('PilihUser')
        }, 3000)
    }

  render() {
    return (
      <View style={styles.pages}>
        <LogoSplash/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.pertama,
  }
})