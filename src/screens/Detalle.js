import React, 
{ 
    Component 
} from 'react'

import 
{ 
    ScrollView, 
    Image, 
    Dimensions, 
    Text,
    StyleSheet, 
} from 'react-native'

const SCREEN_WIDTH = Dimensions.get('screen').width


export default class Detalle extends Component 
{
    //Se define el título visualizado en pantalla
    static navigationOptions = 
    {
        title: 'Detail',
        headerStyle: {
            backgroundColor: '#85c1e9',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            flex:1,
            fontWeight: 'bold',
            textAlign: 'center'
        },
    };


    /**
     * Renderiza la parte visual del componente, en este caso un ScrollView con la información detallada
     * del objeto
     */
    render() 
    {
        //Se accede al objeto enviado desde la pantalla anterior
        const { player } = this.props.navigation.state.params
        return (
           <ScrollView>
               <Image 
                    source={{uri: `${player.thumbnail}`}} 
                    style={{width:SCREEN_WIDTH, height:SCREEN_WIDTH}}
                />
                <Text style={{padding:10, fontSize:20, textAlign:'center', fontWeight: 'bold'}}>{player.name}</Text>

                <Text style={{marginLeft: 10, padding:5, fontWeight:'bold', fontSize:20}}>Age: 
                    <Text style={{fontWeight:'normal', fontSize:15}}> {player.age}</Text>
                </Text>
                <Text style={{marginLeft: 10, padding:5, fontWeight:'bold', fontSize:20}}>Hair Color: 
                    <Text style={{fontWeight:'normal', fontSize:15}}> {player.hair_color}</Text>
                </Text>
                <Text style={{marginLeft: 10, padding:5, fontWeight:'bold', fontSize:20}}>Weight: 
                    <Text style={{fontWeight:'normal', fontSize:15}}> {player.weight}</Text>
                </Text>
                <Text style={{marginLeft: 10, padding:5, fontWeight:'bold', fontSize:20}}>Height: 
                    <Text style={{fontWeight:'normal', fontSize:15}}> {player.height}</Text>
                </Text>
                <Text style={{marginLeft: 10, padding:5, fontWeight:'bold', fontSize:20}}>Professions: 
                    <Text style={{fontWeight:'normal', fontSize:15}}> {player.professions}{"\n"}</Text>
                </Text>
           </ScrollView> 
        )
    }
}