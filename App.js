import { View, Text, Platform } from 'react-native';
import React from 'react';
import { Inicio, Pantalla1, Pantalla2 } from './pantallas';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel:false,
  headerShown:false,
  tabBarStyle:{
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    background: "#fff"
  }
}
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen 
          name="Pantalla1" 
          component={Pantalla1} 
          options={{
            tabBarIcon: ({focused})=>{
              return (
                <View style={{alignItems: "center", justifyContent: "center"}}> 
                  <MaterialCommunityIcons name="tag-faces" size={24} color={focused ? "#DF8FD7": "#111"} />
                  <Text style={{fonSize: 12, color:focused ? "#DF8FD7": "#111"}}>Nosotros</Text>
                </View>
              )
            }
          }}
        />
        <Tab.Screen 
          name="Inicio" 
          component={Inicio}
          options={{
            tabBarIcon: ({focused})=>{
              return (
                <View
                 style={{
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#DF8FD7",
                  width: Platform.OS == "ios" ? 50 : 60,
                  height: Platform.OS == "ios" ? 50 : 60,
                  top: Platform.OS == "ios" ? -10 : -20,
                  borderRadius: Platform.OS == "ios" ? 25 : 30
                 }}
                >
                  <Entypo name="home" size={24} color={focused ? "#fff": "#111"} />
                </View>
              )
            }
           }}
        />
        <Tab.Screen 
          name="Pantalla2" 
          component={Pantalla2} 
          options={{
            tabBarIcon: ({focused})=>{
              return (
                <View style={{alignItems: "center", justifyContent: "center"}}> 
                  <Ionicons name="fast-food" size={24} color={focused ? "#DF8FD7": "#111"} />
                  <Text style={{fonSize: 12, color:focused ? "#DF8FD7": "#111"}}>Comidita Fav</Text>
                </View>
              )
            }
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}