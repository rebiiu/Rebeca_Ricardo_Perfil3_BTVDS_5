import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import Card from '../components/Cards';

const info =[
  {
  image: require('../assets/yopi.jpg'),
  name: 'Rebeca Marcela Hernández Amaya',
  code: '20200248',
  id: 1
  },
  {
    image: require('../assets/tigre.png'),
    name: 'Ricardo Daniel De León Cruz',
    code: '20220039',
    id: 2
    },
]


export default function Pantalla1() {
  return (
    <View style={{alignItems: "center", justifyContent: "center", marginTop:30}}>
      <FlatList
        data={info}
        renderItem={({ item }) => {
          return <Card info={item} />;
        }}
        keyExtractor={(info) => info.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )   
}