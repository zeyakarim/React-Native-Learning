import { View, Text, Image, Button, TouchableOpacity, TouchableHighlight, Pressable, SafeAreaView, StyleSheet, useColorScheme, ScrollView, FlatList, TextInput } from 'react-native'
import '@expo/metro-runtime';
import { useState } from 'react';

const dummy = [
  { 
    id: 1, 
    name: "Muskan", 
    email: "muskan123@gmail.com", 
    image: 'https://create.microsoft.com/_next/image?url=https%3A%2F%2Fcdn.create.microsoft.com%2Fimages%2Fimage-creator-T02_juice.webp&w=1920&q=90' 
  },
  { 
    id: 2, 
    name: "Anny", 
    email: "anny123@gmail.com", 
    image: 'https://create.microsoft.com/_next/image?url=https%3A%2F%2Fcdn.create.microsoft.com%2Fimages%2Fimage-creator-T02_juice.webp&w=1920&q=90' 
  },
  { 
    id: 3, 
    name: "John", 
    email: "john123@gmail.com", 
    image: 'https://create.microsoft.com/_next/image?url=https%3A%2F%2Fcdn.create.microsoft.com%2Fimages%2Fimage-creator-T02_juice.webp&w=1920&q=90' 
  },
  { 
    id: 4, 
    name: "Harsh", 
    email: "harsh123@gmail.com", 
    image: 'https://create.microsoft.com/_next/image?url=https%3A%2F%2Fcdn.create.microsoft.com%2Fimages%2Fimage-creator-T02_juice.webp&w=1920&q=90' 
  },
  { 
    id: 5, 
    name: "Somu", 
    email: "somu123@gmail.com", 
    image: 'https://create.microsoft.com/_next/image?url=https%3A%2F%2Fcdn.create.microsoft.com%2Fimages%2Fimage-creator-T02_juice.webp&w=1920&q=90' 
  },
  { 
    id: 6, 
    name: "Sarthak", 
    email: "sarthak123@gmail.com", 
    image: 'https://create.microsoft.com/_next/image?url=https%3A%2F%2Fcdn.create.microsoft.com%2Fimages%2Fimage-creator-T02_juice.webp&w=1920&q=90' 
  },
  { 
    id: 7, 
    name: "Rishu", 
    email: "rishu123@gmail.com", 
    image: 'https://create.microsoft.com/_next/image?url=https%3A%2F%2Fcdn.create.microsoft.com%2Fimages%2Fimage-creator-T02_juice.webp&w=1920&q=90' 
  },
  { 
    id: 8, 
    name: "Arin", 
    email: "arin123@gmail.com", 
    image: 'https://create.microsoft.com/_next/image?url=https%3A%2F%2Fcdn.create.microsoft.com%2Fimages%2Fimage-creator-T02_juice.webp&w=1920&q=90' 
  },
  { 
    id: 9, 
    name: "Aryan", 
    email: "aryan123@gmail.com", 
    image: 'https://create.microsoft.com/_next/image?url=https%3A%2F%2Fcdn.create.microsoft.com%2Fimages%2Fimage-creator-T02_juice.webp&w=1920&q=90' 
  },
  { 
    id: 10, 
    name: "Uliha", 
    email: "uliha123@gmail.com", 
    image: 'https://create.microsoft.com/_next/image?url=https%3A%2F%2Fcdn.create.microsoft.com%2Fimages%2Fimage-creator-T02_juice.webp&w=1920&q=90' 
  },
  { 
    id: 11, 
    name: "Anuj", 
    email: "anuj123@gmail.com", 
    image: 'https://create.microsoft.com/_next/image?url=https%3A%2F%2Fcdn.create.microsoft.com%2Fimages%2Fimage-creator-T02_juice.webp&w=1920&q=90' 
  },
  { 
    id: 12, 
    name: "Naman", 
    email: "naman123@gmail.com", 
    image: 'https://create.microsoft.com/_next/image?url=https%3A%2F%2Fcdn.create.microsoft.com%2Fimages%2Fimage-creator-T02_juice.webp&w=1920&q=90' 
  },
  { 
    id: 13, 
    name: "Lolu", 
    email: "lolu123@gmail.com", 
    image: 'https://create.microsoft.com/_next/image?url=https%3A%2F%2Fcdn.create.microsoft.com%2Fimages%2Fimage-creator-T02_juice.webp&w=1920&q=90' 
  },
  { 
    id: 14, 
    name: "Golu", 
    email: "golu123@gmail.com", 
    image: 'https://create.microsoft.com/_next/image?url=https%3A%2F%2Fcdn.create.microsoft.com%2Fimages%2Fimage-creator-T02_juice.webp&w=1920&q=90' 
  },
  { 
    id: 15, 
    name: "Raj", 
    email: "raj123@gmail.com", 
    image: 'https://create.microsoft.com/_next/image?url=https%3A%2F%2Fcdn.create.microsoft.com%2Fimages%2Fimage-creator-T02_juice.webp&w=1920&q=90' 
  },
  { 
    id: 16, 
    name: "Dummy", 
    email: "dummy123@gmail.com", 
    image: 'https://create.microsoft.com/_next/image?url=https%3A%2F%2Fcdn.create.microsoft.com%2Fimages%2Fimage-creator-T02_juice.webp&w=1920&q=90' 
  },
  { 
    id: 17, 
    name: "Akarsh", 
    email: "akarsh123@gmail.com", 
    image: 'https://create.microsoft.com/_next/image?url=https%3A%2F%2Fcdn.create.microsoft.com%2Fimages%2Fimage-creator-T02_juice.webp&w=1920&q=90' 
  },
  { 
    id: 18, 
    name: "Ayush", 
    email: "ayush123@gmail.com", 
    image: 'https://create.microsoft.com/_next/image?url=https%3A%2F%2Fcdn.create.microsoft.com%2Fimages%2Fimage-creator-T02_juice.webp&w=1920&q=90' 
  },
  { 
    id: 19, 
    name: "Ankur", 
    email: "ankur123@gmail.com", 
    image: 'https://create.microsoft.com/_next/image?url=https%3A%2F%2Fcdn.create.microsoft.com%2Fimages%2Fimage-creator-T02_juice.webp&w=1920&q=90' 
  },
  { 
    id: 20, 
    name: "Vedant", 
    email: "vedant123@gmail.com", 
    image: 'https://create.microsoft.com/_next/image?url=https%3A%2F%2Fcdn.create.microsoft.com%2Fimages%2Fimage-creator-T02_juice.webp&w=1920&q=90' 
  },
  { 
    id: 21, 
    name: "Pradeep", 
    email: "pradeep123@gmail.com", 
    image: 'https://create.microsoft.com/_next/image?url=https%3A%2F%2Fcdn.create.microsoft.com%2Fimages%2Fimage-creator-T02_juice.webp&w=1920&q=90' 
  },
  { 
    id: 22, 
    name: "Kittu", 
    email: "kittu123@gmail.com", 
    image: 'https://create.microsoft.com/_next/image?url=https%3A%2F%2Fcdn.create.microsoft.com%2Fimages%2Fimage-creator-T02_juice.webp&w=1920&q=90' 
  }
]

const App = () => {
  const [text, setText] = useState('')
  const [submittedText, setSubmittedText] = useState('')

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
  const handleSubmit = () => {
    setSubmittedText(text)
    setText('')
  }

  return (
    <View 
      // contentContainerStyle={{gap:5}} 
      // // using this horizontal this will scroll horizontally
      // horizontal
      style={styles.container}
    >
      {/* <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
      <View style={[styles.box2,  {backgroundColor:'skyblue'}]} /> */}
      {/* <FlatList 
        data={dummy}
        renderItem={({item}) => (
          <View style={styles.card}>
            <Image 
              source={{uri:'https://create.microsoft.com/_next/image?url=https%3A%2F%2Fcdn.create.microsoft.com%2Fimages%2Fimage-creator-T02_juice.webp&w=1920&q=90' }}
              style={{ width:40, height:40, borderRadius: 50}}
            />
              <Text>name:</Text>
              <Text>email:</Text>
          </View>
        )}
        keyExtractor={item => item?.id}
        // with the help of this add gap
        ItemSeparatorComponent={<View style={{height:10}} />}
        numColumns={2}
        columnWrapperStyle={{gap:10}}
        // extraData={} 
        // horizontal
      /> */}
      <TextInput 
        style={styles.input} 
        placeholder='Enter a text here' 
        value={text}
        // onChangeText={(text) => setText(text)}
        onChangeText={setText}
        // this will allow to write long text in multiline
        multiline
        // like paragraph
        numberOfLines={4}
        // keyboardType='number-pad'
        // inputMode='numeric'
      />

      <Text numberOfLines={2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam maxime adipisci odit labore consequuntur ab iure nulla nihil nesciunt itaque. Assumenda omnis necessitatibus reprehenderit et quo. Consequuntur minus iusto ipsum.</Text>
      <Button title='submit' onPress={handleSubmit}></Button>

      {submittedText && <Text>Result: {submittedText}</Text>}
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
    width:'100%', 
    height:'100%',
    // display:'flex',
    // justifyContent:'center',
    // alignItems:'center',
    // flexDirection: 'column',
    backgroundColor: '#dadada',
    gap: 5,
    // flex: 1,
    // flexWrap:'wrap',
    // paddingTop:10,
    paddingVertical: 10,
    paddingHorizontal: 5
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
    // flex: 1,
    width: 80,
    height: 80,
    backgroundColor: 'red',
    borderRadius:50
  },
  box2: {
    // flex: 2,
    width: 80,
    height: 80,
    backgroundColor: 'yellow',
    borderRadius:50
  },
  box3: {
    // flex: 3,
    width: 80,
    height: 80,
    backgroundColor: 'green',
    borderRadius:50
  },
  card: {
    width: 80,
    height: 80,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    width: '100%',
    padding: 5,
    borderRadius:5,
    borderWidth: 1
  }
})