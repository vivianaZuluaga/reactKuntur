import React from 'react'
import 
{ 
    TouchableOpacity, 
    View, 
    FlatList, 
    Text, 
    Image 
} from 'react-native'


//Constante que contiene la URL a la cual se realizan las peticiones
const URL = 'http://www.mocky.io/v2/5aa722ea2f0000e8048ea463'

export default class ListPlayers extends React.PureComponent 
{
    //Título que aparecerá en la lista
    static navigationOptions = 
    {
        title: 'List Players',
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

    //Se define el estado del componente, en este caso un arreglo que contendrá los datos
    //devueltos por la petición
    state = { data: [] }
    

    /**
     *  Método que se ejecuta justo después de que el componente haya sido montado en el DOM,
     *  hace parte del ciclo de vida del mismo. En este se realiza una petición a la API 
     *  para obtener los datos, las llamadas se hacen de forma asíncrona
     */
    async componentDidMount() 
    {
        const response = await fetch(`${URL}`)
        const responseJson = await response.json()
        //Se actualiza el estado de la aplicación con los datos devueltos por la API
        this.setState({data: responseJson})
    }


    /**
     * [Función encargada de renderizar un elemento]
     * @param  {[type]} options.item [Objeto JSON]
     * @return {[type]}              [Vista que contiene una imagen y un texto, los elementos se alinean de 
     * manera horizontal, se ejecuta la acción _onItemPress al tocar el elemento]
     */
    _renderItem = ({item}) => {
        return  (
            <TouchableOpacity onPress={()=>this._onItemPress(item)} style={{flexDirection:'row', padding: 10, alignItems:'center'}}>
                <Image style={{height: 80, width: 80}} source={{uri: `${item.thumbnail}`}} />
                <Text style={{marginLeft: 10, fontWeight: 'bold', fontSize: 18}}>{item.name}
                    <Text style={{marginLeft: 10, fontSize: 12}}>
                    {"\n"}{"\n"}{"\n"}Age: {item.age}</Text>
                </Text>
            </TouchableOpacity>
        )
    }


    /**
     * [Función encargada de navegar entre pantallas al dar clic sobre un elemento, 
     * se pasa un objeto a la vista Detalle.
     * @param  {[type]} item [objeto JSON]
     */
    _onItemPress = (item) => {
        this.props.navigation.navigate('Detalle', {player: item})
    } 


    /**
     * [Renderiza la parte visual del componente]
     * @return {[type]} [ListPlayers con los datos devueltos por la API]
     */
    render() {
        return (
            <FlatList 
                data={this.state.data}
                renderItem={this._renderItem}
                keyExtractor={(item) => item.id.toString()}
                ItemSeparatorComponent={()=>
                    <View style={{height:1, backgroundColor: '#fff'}} 
                />}
            />
        )
    }
}