import { View, FlatList } from 'react-native'
import CoinItem from '../../components/CoinItem'
import cryptocurrencies from '../../../assets/data/cryptocurrencies.json'
import React from 'react'

const HomeScreen = () => {
  return (
    <View>
      <FlatList 
        data={cryptocurrencies}
        renderItem={({item}) => <CoinItem marketCoin={item} />}
      />
    </View>
  )
}

export default HomeScreen