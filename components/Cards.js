// Importamos los componentos necesarios de react-native
import { View, Text, StyleSheet, Dimensions, Image, FlatList } from 'react-native'
import React from 'react'

// Definimos el componente InfoCard que recibe 'info' como propiedad
const InfoCard =  ({info}) =>{

// Desestructuramos 'info' para obtener 'image', 'name' y 'code'
const {image, name, code} = info;

    // Retornamos el JSX que define cómo se verá el componente en la pantalla
    return(
        <View style={styles.container}>
        <View style={styles.cardContainer}>
             <Image style={styles.imageStyle} source={image} />
            <View style={styles.infoStyle}>
                <Text style={styles.cardName}>{name}</Text>
                <Text style={styles.cardCode}>{code}</Text>
            </View>
        </View>
        </View>
    )
}

// Obtenemos el ancho del dispositivo
const deviceWidth = Math.round(Dimensions.get('window').width)

// Definimos un offset
const offset = 40;

// Definimos los estilos que se usarán en el componente
const styles = StyleSheet.create({
    container: {
        width: deviceWidth - 30,
        alignItems: 'center',
        marginTop: 25,
        marginBottom:25
      },
    cardContainer: {
        width: '100%',
        minHeight: 230, // Cambiamos 'height' a 'minHeight'
        backgroundColor: '#F6FFF8',
        borderRadius: 25,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 8 },
        shadowOpacity: 0.75,
        shadowRadius: 10.32,
        elevation: 5,
    },
    cardName: {
        color: 'black',
        fontSize: 18,
        fontWeight: '200',
        flexWrap: 'wrap',
    },
    cardCode: {
        
        color: 'black',
        fontSize: 18,
        fontWeight: '300',
        flexWrap: 'wrap'
        
    },
    imageStyle:{
        height: 150,
        width: deviceWidth - offset,
        borderTopRightRadius:25,
        borderTopLeftRadius:25,
        alignSelf: 'center',
        marginBottom: 10,
        opacity: 0.9,
    },
    infoStyle: {
        marginLeft: 10,
    }
})

// Exportamos el componente para que pueda ser usado en otros lugares de la aplicación
export default InfoCard;