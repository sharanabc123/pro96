import * as React from 'react';
import { Text, View, StyleSheet,TextInput,TouchableOpacity,Image} from 'react-native';
import * as Speech from 'expo-speech';
import {Header} from 'react-native-elements';

export default class App extends React.Component{
  constructor(){
    super();
    this.state={
      name:" ",
    }
  }
  speak=()=>{
    var thingsToSay=this.state.name;
    Speech.speak(thingsToSay);
  }
  render(){
    return(
      <View>
      <Header
      backgroundColor={'green'}
      centerComponent={{
            text: 'Text to Speech',
            style: { color: '#fff', fontSize: 20,fontWeight:'bold'},
          }}/>
      <Image style={styles.imageIcon}
          source={{
            uri:
              'https://cdn0.iconfinder.com/data/icons/artificial-intelligence-1-5/66/72-512.png',
          }}/>
      <TextInput style={styles.inputbox}
      onChangeText={name=>{
        this.setState({ name: name });
      }}
      value={this.state.name}/>
      <TouchableOpacity style={styles.goButton}
      onPress={(this.speak)}>
      <Text style={styles.txt}>Click Here</Text>
      </TouchableOpacity>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  inputbox:{
    marginTop: 100,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
  },
  goButton:{
    backgroundColor:'#913d88',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '60%',
    height: 50,
    margin: 10,
    marginTop:50,
    borderRadius: 20,
  },
  txt:{
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color:'white'
  },
  imageIcon: {
    marginTop:20,
    width: 150,
    height: 150,
    marginLeft: 95,
  },
})