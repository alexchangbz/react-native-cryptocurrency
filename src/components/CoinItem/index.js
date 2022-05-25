import { View, Text, Image } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import React from 'react'
import styles from './style'

const CoinItem = ({marketCoin}) => {
    const {
            name, 
            current_price, 
            image, 
            market_cap_rank,
            market_cap,
            symbol,
            price_change_percentage_24h
        } = marketCoin

    const normalizeMarketCap = (marketCap) => {
        if (marketCap > 1_000_000_000) {
            return `${(marketCap / 1_000_000_000).toFixed(2)} B`
        } if (marketCap > 1_000_000) {
            return `${(marketCap / 1_000_000).toFixed(2)} M`
        } if (marketCap > 1_000) {
            return `${(marketCap / 1_000).toFixed(2)} K`
        } else {
            return `${(marketCap).toFixed(2)}`
        }
    } 

    const percentColor = price_change_percentage_24h < 0 ? "#ea3943" : "#16c784"

    return (
        <View style={styles.coinContainer}>
            <Image 
            source={{uri: image}} 
            style={{height: 25, width: 25, marginRight: 10, alignSelf: 'center'}} 
            />
            <View>
            <Text style={styles.title}>{name}</Text>
            <View style={{flexDirection: 'row'}}>
                <Text style={styles.rank}>{market_cap_rank}</Text>
                <Text style={styles.text}>{symbol.toUpperCase()}</Text>
                <Icon 
                name={price_change_percentage_24h > 0 ? 'caretup' : 'caretdown'} 
                size={15} 
                color={percentColor}
                style={{alignSelf: 'center', marginRight: 5}} 
                />
                <Text style={{color: percentColor}}>{price_change_percentage_24h.toFixed(2)}%</Text>
            </View>
            </View>
            <View style={{marginLeft: 'auto', alignItems: 'flex-end'}}>
                <Text style={styles.title}>{current_price}</Text>
                <Text style={{color: '#fff'}}>MCap ${normalizeMarketCap(market_cap)}</Text>
            </View>
        </View>
    )
}

export default CoinItem

