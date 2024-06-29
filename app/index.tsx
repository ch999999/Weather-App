import React from 'react'
import { View, StyleSheet } from 'react-native'
import CurrentWeather from '@/components/CurrentWeather'
import UpcomingWeather from '@/components/UpcomingWeather'

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