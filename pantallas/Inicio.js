import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Inicio() {
  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
      <Text style={styles.title}>Perfil 3</Text>
      <Text style={styles.text}>Menú de navegación con React Native</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    color: "#111",
    fontWeight: '500'
  },
  text:{
    fontSize: 20,
    color: "#111",
    fontWeight: '400'
  }
})