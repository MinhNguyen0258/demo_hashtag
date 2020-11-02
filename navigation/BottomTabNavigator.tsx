import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, Image, Alert, View, Text } from 'react-native';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import MenuScreen from '../screens/MenuScreen';
import DemoScreen from '../screens/DemoScreen';
import Home from '../components/Home';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{ activeTintColor: 'red' }}>
      <BottomTab.Screen
        name="Trang chủ"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => <Fontisto name="hashtag" size={20} style={{ marginBottom: -3 }} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Mua hàng"
        component={ProductScreen}
        options={{
          tabBarIcon: ({ color }) => <Image style={{width:19, height:18}} source={require('../assets/images/cart.png')}/>,
        }}
      />
      <BottomTab.Screen
        name= 'Tài khoản'
        component={MenuScreen}
        options={{
          tabBarIcon: ({ color }) => <Image style={{width:19, height:20}} source={require('../assets/images/account.png')} />,
        }}
      />
      <BottomTab.Screen
        name= 'Demo'
        component={DemoScreen}
        options={{
          tabBarIcon: ({ color }) => <Image style={{width:19, height:20}} source={require('../assets/images/account.png')} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}
