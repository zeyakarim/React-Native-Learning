import { View, Text, Image, Button, TouchableOpacity, TouchableHighlight, Pressable, SafeAreaView, StyleSheet, useColorScheme } from 'react-native'
import React from 'react';
import '@expo/metro-runtime';

const App = () => {
  const checkPress = () => {
    console.log('Button Pressed !!!!!!!!!!!!')
  }

  const theme = useColorScheme();
  const isDarkMode = theme === 'dark';

  const backgroundColor = isDarkMode ? "black" : "white";
  const textColor = isDarkMode ? "white" : "black"

  // return (
  //   <SafeAreaView style={[styles.container, {backgroundColor: backgroundColor}]}>
  //     <Text style={[styles.text, {color: textColor}]}>React Native Mobile App</Text>
  //     <Text>This is my first app</Text>
  //     <Image 
  //       source={{uri: 'https://create.microsoft.com/_next/image?url=https%3A%2F%2Fcdn.create.microsoft.com%2Fimages%2Fimage-creator-T02_juice.webp&w=1920&q=90'}}
  //       style={{width:200, height:500}}
  //     />
  //     {/* First Method to add button */}
  //     <Button title='Press Me'></Button>

  //     {/* Second Way to Button In UI */}
  //     {/* Touchable Opacity Provide multiple feature */}
  //     <TouchableOpacity 
  //       style={{ padding: 10, backgroundColor:'orange', borderRadius:50, alignItems: 'center', marginTop:10}}
  //       onPress={checkPress}
  //     >
  //       <Text style={{fontWeight:600}}>BUTTON</Text>
  //     </TouchableOpacity>

  //     {/* HIGH LIGHT BUTTON */}
  //     <TouchableHighlight 
  //       style={{ padding: 10, backgroundColor:'orange', borderRadius:50, alignItems: 'center', marginTop:10}}
  //       onPress={checkPress}
  //     > 
  //       <Text style={{fontWeight:600}}>BUTTON HIGHLIGHT</Text>
  //     </TouchableHighlight>

  //     {/* ADD BUTTON USING PRESSABLE THIS IS COMMANLY USED */}
  //     <Pressable
  //       style={styles.buttonPressable}
  //       onPress={checkPress}
  //     >
  //       <Text style={styles.buttonText}>BUTTON PRESSABLE</Text>
  //     </Pressable>
  //   </SafeAreaView>
  // )
  return (
    <View style={styles.container}>
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
    </View>
  )
}

export default App;
// find the sum of box1, box2 and box3
// 1 + 2 + 3 = 6
// box1 take space 1/6
// box2 take space 2/6
// box3 take space 3/6

// based on flexDirection : justifyContent and alignItems will work

// alignSelf: "center"

const styles = StyleSheet.create({
  container: {
    // width:'100%', 
    // height:'100%',
    // display:'flex',
    // justifyContent:'center',
    // alignItems:'center',
    // backgroundColor: '#000',
    // gap: 5,
    flex: 1
  },
  text: {
    // color:'orange',
    fontSize:30,
    fontWeight:500
  },
  buttonPressable: {
    // padding: 10,
    width: 200, 
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor:'yellow', 
    borderRadius:50, 
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:10,
    borderWidth: 2,
    borderBottomColor: 'red'
  },
  buttonText: {
    fontWeight:600
  },
  box1: {
    flex: 1,
    backgroundColor: 'red'
  },
  box2: {
    flex: 2,
    backgroundColor: 'yellow'
  },
  box3: {
    flex: 3,
    backgroundColor: 'green'
  }
})