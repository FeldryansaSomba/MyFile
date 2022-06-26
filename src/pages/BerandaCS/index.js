import { Text, StyleSheet, View, ScrollView } from 'react-native'
import React, { Component } from 'react'
import { colors } from '../../utils/colors'
import { Gap, ListProduk, SearchFilter, Filter } from '../../components'
import { dummyMebel } from '../../data'
import { connect } from 'react-redux'
import { getUser } from '../../actions/UserAction'
import { getFilter } from '../../actions/FilterAction'

class BerandaCS extends Component {

  constructor(props) {
    super(props)

    this.state = {
      produks: dummyMebel
    }
  }

  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      // do something
      this.props.dispatch(getFilter());
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  render() {
    const { produks } = this.state
    const { navigation, dataUser } = this.props

    console.log("Parameter: ", this.props.route.params)
    return (
      <View style={styles.pages}>
        <View style={styles.containerAtas}>
        <Text style={styles.text}>Selamat Berbelanja</Text>
        <Gap height={22}/>
        <SearchFilter/>
        <Text style={styles.filter}>Filter Produk</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Filter />
        </ScrollView>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
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

export default connect()(BerandaCS)

const styles = StyleSheet.create({
    pages: {
        backgroundColor: colors.keempat,
        flex: 1,
    },
    containerAtas: {
      paddingTop: 50,
      marginHorizontal: 28
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
    filter: {
      fontFamily: 'Montserrat-SemiBold',
      color: colors.kedua,
      fontSize: 15,
      marginTop: 16,
      marginBottom: 7
    }
})