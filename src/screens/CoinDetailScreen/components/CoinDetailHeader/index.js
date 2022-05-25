import { View, Text, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/EvilIcons'
import styles from './style'
import React from 'react'

const CoinDetailHeader = ({ small, symbol, market_cap_rank }) => {
  return (
    <View style={styles.headerContainer}>
        <Icon name="chevron-back-sharp" size={30} color="#fff" />
        <View style={styles.tickerContainer}>
            <Image source={{uri: small}} style={{width: 25, height: 25}} />
            <Text style={styles.tickerTitle}>{symbol.toUpperCase()}</Text>
            <Text style={styles.tickerRank}>#{market_cap_rank}</Text>
        </View>
        <Icon2 name="user" size={30} color="#fff" />
    </View>
  )
}

export default CoinDetailHeader