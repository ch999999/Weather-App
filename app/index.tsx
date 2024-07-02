import React from 'react'
import { View, StyleSheet } from 'react-native'
import CurrentWeather from '@/screens/CurrentWeather'
import UpcomingWeather from '@/screens/UpcomingWeather'
import City from '@/screens/City'

const App = () => {
  return (
    <View style={styles.container}>
      {/* <UpcomingWeather></UpcomingWeather>  */}
      {/* <City></City> */}
      <CurrentWeather></CurrentWeather>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    
    flex:1
  }
})
export default App