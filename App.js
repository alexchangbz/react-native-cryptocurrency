import { View, Text, StatusBar, StyleSheet, Image } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import React from 'react'

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.coinContainer}>
        <Image 
          source={{uri: 'https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579'}} 
          style={{height: 25, width: 25, marginRight: 10, alignSelf: 'center'}} 
        />
        <View>
          <Text style={styles.title}>Bitcoin</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>BTC</Text>
            <Icon 
              name="caretdown" 
              size={15} 
              color="#fff" 
              style={{alignSelf: 'center', marginRight: 5}} 
            />
            <Text style={styles.text}>0.63%</Text>
          </View>
        </View>
        <View style={{marginLeft: 'auto'}}>
          <Text style={styles.title}>56265.09</Text>
          <Text style={styles.text}>MCap 1.076 T</Text>
        </View>
      </View>
      <StatusBar style="light" />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  title: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  },
  text: {
    color: "#fff",
    marginRight: 5
  },
  coinContainer: {
    flexDirection: 'row',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#282828',
    padding: 15
  }
})