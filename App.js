import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { Freshchat, FreshchatConfig } from 'react-native-freshchat-sdk';

export default class FreshchatTest extends React.Component {
  _chat(){
    alert("Hi");
  }
  render(){
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.btn} onPress={()=>this._chat()}>
          <Text style={{color:"white",textAlign:"center"}}>Chat</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn:{
    backgroundColor:"blue",
    color:"white",
    width:100,
    height:40,
    justifyContent:"center"
  }
});
