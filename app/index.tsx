import React, {useEffect, useState} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { ActivityIndicator, View,StyleSheet } from 'react-native'
import Tabs from '@/components/Tabs'
import * as Location from 'expo-location'

import { useGetWeather } from '@/hooks/useGetWeather'
//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

const App = () => {
  const [loading, error, weather] = useGetWeather()
  console.log(loading,error,weather)

  if(weather && weather.list){
    return (
      
        <NavigationContainer independent={true}>
          <Tabs/>
        </NavigationContainer>
      )
    
  }
  
  
    return (
      <View style={styles.container}>
        <ActivityIndicator size={"large"} color={"blue"}/>
      </View>
    )
  

  

  
}

const styles = StyleSheet.create({
  container:{
    justifyContent:"center",
    flex:1
  }
})
export default App