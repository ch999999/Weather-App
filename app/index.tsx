import React from 'react'
import { View, StyleSheet } from 'react-native'
import CurrentWeather from '@/screens/CurrentWeather'
import UpcomingWeather from '@/screens/UpcomingWeather'

const App = () => {
  return (
    <View style={styles.container}>
      <UpcomingWeather></UpcomingWeather> 
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    
    flex:1
  }
})
export default App