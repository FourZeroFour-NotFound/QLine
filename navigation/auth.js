import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  TextInput,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: 'Useless Placeholder' };
        this.state = { password: 'Useless Placeholder' };

      }

  static navigationOptions = {
    header: null,
  };

zaid= ()=>{
    console.log(this.state.text)
    console.log(this.state.password)
}


  render() {
    return (
      <View  style={{
        flex: 1,
        backgroundColor: '#fff',
      }} >
        <ScrollView style={{
    flex: 1,
    backgroundColor: '#fff',
    marginTop:300,
  }} >

  <Text> ur email : </Text>
       <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(password) => this.setState({password})}
        value={this.state.password}
      />   
      
  <Text> password : </Text>
       <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />   
<Button   title="sign in" onPress={this.zaid} />



        </ScrollView>

        </View>
    );
  }

  
  
}
