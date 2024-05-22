import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import Card from '../components/Cards';

const foodfav = [
  {
    image: require('../assets/arro_lecche.jpeg'),
    name: 'Arrocito con lechita',
    code: 'Postre cremoso hecho con arroz, leche, azúcar y canela, servido frío o caliente (Riquisisisimo 10/10).',
    id: 1
  },
  {
    image: require('../assets/atolito.jpeg'),
    name: 'Atolito de elotito',
    code: 'Bebida espesa y dulce preparada con granos de elote, leche, y azúcar, popular en Centroamérica (Perfecta creación 9.7/10).',
    id: 2
  },
  {
    image: require('../assets/cevichito.jpeg'),
    name: 'Cevichito lindote',
    code: 'Bebida espesa y dulce preparada con granos de elote, leche, y azúcar, popular en Centroamérica (Lo más lindo del mundo si no sos alérgico 10/10).',
    id: 3
  },
  {
    image: require('../assets/hambuguesita.jpeg'),
    name: 'Hamburguesitas del amor',
    code: 'Sándwich de carne molida asada, servida en pan con lechuga, tomate, queso, y otros condimentos (deli 10/10).',
    id: 4
  },
  {
    image: require('../assets/pastita.jpg'),
    name: 'Pastita Alfredo ',
    code: 'Pasta con una salsa cremosa de mantequilla, crema y queso parmesano, a menudo con pollo o camarones (Wow, que maravilla 10/10).',
    id: 5
  },
  {
    image: require('../assets/pollito.jpg'),
    name: 'Pollito en salsa de hongos',
    code: 'Pollo cocido en una rica salsa de hongos, crema, y vino, servido con acompañamientos variados (Okay, okay 8/10).',
    id: 6
    },
    {
      image: require('../assets/sopita_garrobo.png'),
      name: 'Rica sopita de garrobo',
      code: 'Sopa tradicional salvadoreña hecha con carne de iguana, vegetales y especias (Los gustos de Ricardo son terribles 0/10).',
      id: 6
      },
]

export default function Pantalla2() {
  return (
    <View style={{ alignItems: "center", justifyContent: "center", marginTop: 30 }}>
      <FlatList
        data={foodfav}
        renderItem={({ item }) => {
          return <Card info={item} />;
        }}
        keyExtractor={(foodfav) => foodfav.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}