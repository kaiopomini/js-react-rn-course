import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/main'


const AppNavigator = createStackNavigator({
  Main,

});

export default createAppContainer(AppNavigator);