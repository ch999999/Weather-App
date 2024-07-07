import React from 'react'
import {SafeAreaView, Text, StyleSheet,View, ImageBackground, StatusBar} from 'react-native'
import IconText from '@/components/IconText'
import moment from 'moment'

export default function City({weatherData}:any){
    const {rowLayout,riseSetWrapper,riseSetText,container,imageLayout,cityName,countryName,cityText, populationText, populationWrapper} = styles
    const {name, country, population, sunrise, sunset} = weatherData
    return (
      <SafeAreaView style={container}>
        <ImageBackground
          source={require("../assets/images/city-background.jpg")}
          style={imageLayout}
        >
          <Text style={[cityName, cityText]}>{name}</Text>
          <Text style={[countryName, cityText]}>{country}</Text>
          <View style={[populationWrapper, rowLayout]}>
            <IconText
              iconName={"user"}
              iconColor={"red"}
              bodyText={`Population: ${population}`}
              bodyTextStyles={populationText}
            ></IconText>
          </View>
          <View style={[riseSetWrapper, rowLayout]}>
          <IconText
              iconName={"sunrise"}
              iconColor={"white"}
              bodyText={moment(sunrise).format('h:mm:ss a')}
              bodyTextStyles={riseSetText}
            ></IconText>
            <IconText
              iconName={"sunset"}
              iconColor={"white"}
              bodyText={moment(sunset).format('h:mm:ss a')}
              bodyTextStyles={riseSetText}
            ></IconText>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
}

const styles=  StyleSheet.create({
    container:{
        flex:1,
        marginTop:StatusBar.currentHeight
    },
    imageLayout:{
        flex:1
    },
    cityName:{
        fontSize:40,
        
    },
    countryName:{
        fontSize:30,
    },
    cityText:{
        justifyContent:'center',
        alignSelf:"center",
        color:"white",
        fontWeight:"bold"
    },
    populationWrapper:{
        
        justifyContent:"center",
        marginTop:30
    },
    populationText:{
        fontSize:25,
        marginLeft:7.5,
        color:'red',
        
    },
    riseSetWrapper:{
        
        justifyContent:"space-around",
        marginTop:30
    },
    riseSetText:{
        fontSize:20,
        color:"white",
       
    },
    rowLayout:{
        flexDirection:"row",
        alignItems:"center"
    }
})