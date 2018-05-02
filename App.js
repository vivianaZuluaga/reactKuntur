import React from 'react'
import 
{ 
    StatusBar, 
    Platform 
} from 'react-native'

import ListPlayers from './src/screens/ListPlayers'
import Detalle from './src/screens/Detalle'

import 
{ 
    StackNavigator 
} from 'react-navigation'

//Responsable de la navegación entre pantallas, StackNavigator componente de navegación
const App = StackNavigator(
{
  ListPlayers: 
  {
    screen: ListPlayers //Pantalla inicial
  },

  Detalle: 
  {
    screen: Detalle //Pantalla del detalle
  },
},

{
  //Se ajusta el padding de la aplicación en Android con relación al StatusBar, de lo 
  //contrario la barra de título quedaría por debajo del StatusBar, creando un efecto indeseable
  cardStyle: 
  {
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
  }
})

export default App

