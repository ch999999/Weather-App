import React from 'react'
import {SafeAreaView, Text, StyleSheet,View, ImageBackground, StatusBar} from 'react-native'
import IconText from '@/components/IconText'

export default function City(){
    const {rowLayout,riseSetWrapper,riseSetText,container,imageLayout,cityName,countryName,cityText, populationText, populationWrapper} = styles
    return (
      <SafeAreaView style={container}>
        <ImageBackground
          source={require("../assets/images/city-background.jpg")}
          style={imageLayout}
        >
          <Text style={[cityName, cityText]}>KL</Text>
          <Text style={[countryName, cityText]}>M'sia</Text>
          <View style={[populationWrapper, rowLayout]}>
            <IconText
              iconName={"user"}
              iconColor={"red"}
              bodyText={"90000"}
              bodyTextStyles={populationText}
            ></IconText>
          </View>
          <View style={[riseSetWrapper, rowLayout]}>
          <IconText
              iconName={"sunrise"}
              iconColor={"white"}
              bodyText={"10:46:45am"}
              bodyTextStyles={riseSetText}
            ></IconText>
            <IconText
              iconName={"sunset"}
              iconColor={"white"}
              bodyText={"17:38:45pm"}
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