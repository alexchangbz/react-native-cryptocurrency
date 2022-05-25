import { View, Text } from 'react-native'
import Coin from '../../../assets/data/crypto.json'
import CoinDetailHeader from './components/CoinDetailHeader'
import React from 'react'

const CoinDetailScreen = () => {
    const {
        image: {small}, 
        name, 
        symbol,
        market_data: {market_cap_rank} 
    } = Coin

    return (
        <View>
            <CoinDetailHeader small={small} symbol={symbol} market_cap_rank={market_cap_rank} />
            <Text></Text>
        </View>
    )
}

export default CoinDetailScreen

