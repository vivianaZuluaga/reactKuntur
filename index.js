import 
{ 
    AppRegistry 
} from 'react-native';

import 
{ 
    YellowBox 
} from 'react-native';
//Se ignora la advertencia debido a el método isMounted() es obsoleto en ES6
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

import App from './App';

//Se registra la aplicación
AppRegistry.registerComponent('reactKuntur', () => App);
