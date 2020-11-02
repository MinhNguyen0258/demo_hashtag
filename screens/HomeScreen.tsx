import * as React from 'react';
import { StyleSheet, SafeAreaView, Image, Alert, Text, View } from 'react-native';

//import EditScreenInfo from '../components/EditScreenInfo';
import HeaderScreen from '../components/Header';
import Home from '../components/Home';
// import { HeaderBackButton } from '@react-navigation/stack';
// import { FontAwesome, SimpleLineIcons } from '@expo/vector-icons'; 
// import { TouchableOpacity } from 'react-native-gesture-handler';

export default function HomeScreen() {
  return (  
    <SafeAreaView>
        <View><HeaderScreen/></View>
        <View><Home/></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
      backgroundColor: 'black',
  },
});
