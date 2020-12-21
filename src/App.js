import React , {Component} from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
import ButtonScreen from './screens/ButtonScreen';
import CounterScreen from './screens/CounterScreen';

const navigator = createStackNavigator({
  Button: ButtonScreen,
  Counter: CounterScreen
},{
  initialRouteName: 'Button'
});

const Navigator = createAppContainer(navigator);

class App extends Component {
  render(){
    return(
      <Provider store = {createStore(reducers)}>
          <Navigator/>
      </Provider>
    );
  }
}

export default App;