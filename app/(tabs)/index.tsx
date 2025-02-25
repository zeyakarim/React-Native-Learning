import { View, Text, Image, Button, TouchableOpacity, Alert, TouchableHighlight, Pressable } from 'react-native'
import React from 'react';
import '@expo/metro-runtime';

const App = () => {
  const checkPress = () => {
    console.log('Button Pressed !!!!!!!!!!!!')
  }
  return (
    <View>
      <Text>React Native Mobile App</Text>
      <Text>This is my first app</Text>
      <Image 
        source={{uri: 'https://create.microsoft.com/_next/image?url=https%3A%2F%2Fcdn.create.microsoft.com%2Fimages%2Fimage-creator-T02_juice.webp&w=1920&q=90'}}
        style={{width:200, height:500}}
      />
      {/* First Method to add button */}
      <Button title='Press Me'></Button>

      {/* Second Way to Button In UI */}
      {/* Touchable Opacity Provide multiple feature */}
      <TouchableOpacity 
        style={{ padding: 10, backgroundColor:'orange', borderRadius:10, alignItems: 'center', marginTop:10}}
        onPress={checkPress}
      >
        <Text style={{fontWeight:600}}>BUTTON</Text>
      </TouchableOpacity>

      {/* HIGH LIGHT BUTTON */}
      <TouchableHighlight 
        style={{ padding: 10, backgroundColor:'orange', borderRadius:10, alignItems: 'center', marginTop:10}}
        onPress={checkPress}
      >
        <Text style={{fontWeight:600}}>BUTTON HIGHLIGHT</Text>
      </TouchableHighlight>

      {/* ADD BUTTON USING PRESSABLE THIS IS COMMANLY USED */}
      <Pressable
        style={{ padding: 10, backgroundColor:'yellow', borderRadius:10, alignItems: 'center', marginTop:10}}
        onPress={checkPress}
      >
        <Text>BUTTON PRESSABLE</Text>
      </Pressable>
    </View>
  )
}

export default App;