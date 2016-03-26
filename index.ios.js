import React, {
  AppRegistry,
  Component
} from 'react-native';

import Main from './components/Main.js';

class ExileTrade_React extends Component {
  render() {
    return(
      <Main/>
    );
  }
}

AppRegistry.registerComponent('ExileTrade_React', () => ExileTrade_React);
