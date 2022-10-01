import { Text, StyleSheet, View, ScrollView, RefreshControl } from 'react-native'
import React, { Component } from 'react'
import { colors } from '../../utils/colors'
import { Gap, ListProduk, SearchFilter, Filter } from '../../components'
import { connect } from 'react-redux'
import { getProduk } from '../../actions/ProdukAction'
import { getFilter } from '../../actions/FilterAction'
import { RFValue } from 'react-native-responsive-fontsize'
import { heightMobileUI, getData } from '../../utils'

class BerandaCS extends Component {
  constructor(props) {
    super(props)

    this.state = {
      profile: false,
      loading: false   
    }
  }

  updateHalaman = () => {
    this.props.dispatch(getProduk());
  }

  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      const {idFilter, keyword} = this.props
      // do something
      this.props.dispatch(getFilter());
      this.props.dispatch(getProduk(idFilter, keyword));
      this.getUserData();
    });
  }

  getUserData = () => {
    getData('user').then(res => {
      const data = res
      let myData = data.nama.split(" ")
      if(data) {
        this.setState({
          profile: myData[0]
        })
      }else {
        this.props.navigation.replace('MasukCS')
      }
    })
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
    const { navigation } = this.props
    const {profile} = this.state
    return (
      <View style={styles.pages}>
        <View style={styles.containerAtas}>
        <Text style={styles.text}>Hallo, {profile}</Text>
        <Gap height={18}/>
        <SearchFilter page="BerandaCS"/>
        <Text style={styles.filter}>Filter Produk</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Filter />
        </ScrollView>
        <Gap height={10}/>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} 
        refreshControl={
        <RefreshControl
        refreshing={this.state.loading}
        onRefresh={() => this.updateHalaman()}
        />}
        >
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
      paddingTop: 20,
      marginHorizontal: 28
    },
    text: {
        fontSize: RFValue(16, heightMobileUI),
        fontFamily: 'Montserrat-Bold',
        color: colors.kedua,
    },
    listProduk: {
      paddingTop: 10,
      paddingHorizontal: 30
    },
    filter: {
      fontFamily: 'Montserrat-SemiBold',
      color: colors.kedua,
      fontSize: RFValue(15, heightMobileUI),
      marginTop: 16,
      marginBottom: 7
    }
})