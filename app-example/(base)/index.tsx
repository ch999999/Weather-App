// import { Image, StyleSheet, Platform, View, Text } from 'react-native';
// import { HelloWave } from '@/components/HelloWave';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';
// import { green } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';

// export default function HomeScreen() {

//   const message = "helll"

//   return (
//     <>
//       <View style={{height: 100, width:100, backgroundColor:"green"}}>
//         <Text>{message}</Text>
//       </View>
//     </>
//   )
//   // return (
//   //   <ParallaxScrollView
//   //     headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
//   //     headerImage={
//   //       <Image
//   //         source={require('@/assets/images/partial-react-logo.png')}
//   //         style={styles.reactLogo}
//   //       />
//   //     }>
      
//   //     <ThemedView style={styles.titleContainer}>
//   //       <ThemedText type="title">Welcome!</ThemedText>
//   //       <HelloWave />
//   //     </ThemedView>
//   //     <ThemedView style={styles.stepContainer}>
//   //       <ThemedText type="subtitle">Step 1: Try it</ThemedText>
//   //       <ThemedText>
//   //         Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
//   //         Press{' '}
//   //         <ThemedText type="defaultSemiBold">
//   //           {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
//   //         </ThemedText>{' '}
//   //         to open developer tools.
//   //       </ThemedText>
//   //     </ThemedView>
//   //     <ThemedView style={styles.stepContainer}>
//   //       <ThemedText type="subtitle">Step 2: Explore</ThemedText>
//   //       <ThemedText>
//   //         Tap the Explore tab to learn more about what's included in this starter app.
//   //       </ThemedText>
//   //     </ThemedView>
//   //     <ThemedView style={styles.stepContainer}>
//   //       <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
//   //       <ThemedText>
//   //         When you're ready, run{' '}
//   //         <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
//   //         <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
//   //         <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
//   //         <ThemedText type="defaultSemiBold">app-example</ThemedText>.
//   //       </ThemedText>
//   //     </ThemedView>
//   //   </ParallaxScrollView>
//   // );
// }

// const styles = StyleSheet.create({
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
//   reactLogo: {
//     height: 178,
//     width: 290,
//     bottom: 0,
//     left: 0,
//     position: 'absolute',
//   },
// });


import React from "react"
import {View, Text, SafeAreaView, StyleSheet} from "react-native"
import { Feather } from "@expo/vector-icons"

const App = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
    <View style={styles.container}>
      <Feather name="sun" size={100}></Feather>
      <Text>Current Weather</Text>
      <Text style={styles.temp}>6</Text>
      <Text style={styles.feels}>Feels like 5</Text>
        <View style={styles.highLowWrapper}>
          <Text style={styles.highLow}>High: 8</Text>
          <Text style={styles.highLow}>Low: 6</Text>
        </View>
    </View>
    <View style={styles.bodyWrapper}>
          <Text style={styles.description}>Its sunny</Text>
          <Text style={styles.message}>Its perfect T-shirt weather</Text>
        </View>
    </SafeAreaView>
  )
}

const styles=StyleSheet.create({
  wrapper:{
    backgroundColor: "cyan",
    flex:1
  },
  container:{
    justifyContent:"center",
    flex:1,
    marginTop: 25,
    alignItems:"center"
  },
  temp:{
    color:'black',
    fontSize:48
  },
  feels:{
    fontSize:30,
    color:'black'
  },
  highLow:{
    color:'black',
    fontSize:20
  },
  highLowWrapper:{
    flexDirection: 'row'
  },
  bodyWrapper:{
    justifyContent: 'flex-end',
    alignItems:'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  description:{
    fontSize:48
  },
  message:{
    fontSize:30
  }
})

export default App