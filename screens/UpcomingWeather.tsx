import React from 'react'
import { SafeAreaView, StyleSheet, Text, FlatList,View, StatusBar,Image, ImageBackground } from 'react-native'
import { Feather } from '@expo/vector-icons'
import ListItem from '@/components/ListItem'



const DATA = [
    {
        dt_txt: "2023-02-18 12:00:00",
        main: {
            temp_max: 8.55,
            temp_min: 7.55
        },
        weather: [{
            main: "Clear"
        }]
    },
    {
        dt_txt: "2023-02-18 11:00:00",
        main: {
            temp_max: 8.55,
            temp_min: 7.55
        },
        weather: [{
            main: "UNClear"
        }]
    },
    {
        dt_txt: "2023-02-18 10:00:00",
        main: {
            temp_max: 8.55,
            temp_min: 6.55
        },
        weather: [{
            main: "ClearAsDay"
        }]
    },
]


export default function UpcomingWeather(){
    const renderItem = ({item}:any)=>(
        <ListItem
          condition={item.weather[0].main}
          dt_txt={item.dt_txt}
          min={item.main.temp_min}
          max={item.main.temp_max}
        />
    )

    const {container, image} = styles

    return (
        <SafeAreaView style={container}>
            <ImageBackground 
                source={require('../assets/images/upcoming-background.jpg')}
                style={image}>
            <Text>Upcoming Weather</Text>
            <FlatList 
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.dt_txt}>
            </FlatList>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor:'royalblue'
    },
    
    image:{
        flex:1
    }
    
})