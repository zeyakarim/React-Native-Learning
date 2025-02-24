import { View, Text, Image } from 'react-native'
import React from 'react';
import '@expo/metro-runtime';

const App = () => {
  return (
    <View>
      <Text>React Native Mobile App</Text>
      <Text>This is my first app</Text>
      <Image 
        source={{uri: 'https://create.microsoft.com/_next/image?url=https%3A%2F%2Fcdn.create.microsoft.com%2Fimages%2Fimage-creator-T02_juice.webp&w=1920&q=90'}}
        style={{width:200, height:200}}
      />
    </View>
  )
}

export default App;