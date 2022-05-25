import React from 'react'
import { View, StatusBar, StyleSheet } from 'react-native'
import HomeScreen from './src/screens/HomeScreen'
import CoinDetailScreen from './src/screens/CoinDetailScreen'

const App = () => {
  return (
    <View style={styles.container}>
      <CoinDetailScreen />
      <StatusBar style="light" />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  }
})