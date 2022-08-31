import { Text, StyleSheet, View, ScrollView } from 'react-native'
import React, { Component } from 'react'
import { colors } from '../../utils/colors'
import { Gap, ListProduk, SearchFilter, Filter } from '../../components'
import { connect } from 'react-redux'
import { getProduk, getProdukByFilter } from '../../actions/ProdukAction'
import { getFilter } from '../../actions/FilterAction'

class BerandaCS extends Component {

  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      const {idFilter, keyword} = this.props
      console.log("id filterr:",idFilter)
      // do something
      this.props.dispatch(getFilter());
      this.props.dispatch(getProduk(idFilter, keyword));
      // this.props.dispatch(getProdukByFilter(filterProduk))
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  componentDidUpdate(prevProps) {
    const { idFilter, keyword } = this.props

    if(idFilter && prevProps.idFilter !== idFilter)
    {
      this.props.dispatch(getProduk(idFilter, keyword));
    }

    if(keyword && prevProps.keyword !== keyword)
    {
      this.props.dispatch(getProduk(idFilter, keyword));
    }
}

  render() {
    const { navigation, namaProduk, keyword } = this.props
    return (
      <View style={styles.pages}>
        <View style={styles.containerAtas}>
        <Text style={styles.text}>Selamat Berbelanja</Text>
        <Gap height={22}/>
        <SearchFilter page="BerandaCS"/>
        <Text style={styles.filter}>Filter Produk</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Filter />
        </ScrollView>
        <Gap height={10}/>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.listProduk}>
        <ListProduk  navigation={navigation}/>
        </View>
        </ScrollView>
      </View>
    )
  }
}

const mapStatetoProps = (state) => ({
  idFilter: state.ProdukReducer.idFilter,
  namaProduk: state.ProdukReducer.namaProduk,
  keyword: state.ProdukReducer.keyword
})

export default connect(mapStatetoProps, null)(BerandaCS)

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
      paddingTop: 10,
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