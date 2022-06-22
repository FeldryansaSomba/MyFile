import { Text, StyleSheet, View, ScrollView } from 'react-native'
import React, { Component } from 'react'
import { colors } from '../../utils/colors'
import { Gap, ListProduk, SearchFilter } from '../../components'
import { dummyMebel } from '../../data'
import { connect } from 'react-redux'
import { getUser } from '../../actions/UserAction'

class BerandaCS extends Component {

  constructor(props) {
    super(props)

    this.state = {
      produks: dummyMebel
    }
  }

  // componentDidMount() {
  //   this.props.getUser()
  // }

  render() {
    const { produks } = this.state
    const { navigation, dataUser } = this.props

    console.log("Parameter: ", this.props.route.params)
    return (
      <View style={styles.pages}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.containerAtas}>
        <Text style={styles.text}>Selamat Berbelanja</Text>
        <Gap height={30}/>
        <SearchFilter/>
        </View>
        <View style={styles.listProduk}>
        <ListProduk produks={produks} navigation={navigation}/>
        </View>
        </ScrollView>
      </View>
    )
  }
}

// const mapStatetoProps = (state) => ({
//   dataUser: state.UserReducer.dataUser
// })

export default BerandaCS

const styles = StyleSheet.create({
    pages: {
        backgroundColor: colors.keempat,
        flex: 1,
    },
    containerAtas: {
      paddingTop: 50,
      marginHorizontal: 48
    },
    text: {
        fontSize: 16,
        fontFamily: 'Montserrat-Bold',
        color: colors.kedua
    },
    listProduk: {
      paddingTop: 27,
      marginHorizontal: 48
    },
})