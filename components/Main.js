import React, {
  Component,
  View
} from 'react-native'

import Emitter from '../src/Emitter'
import styles from './Styles';
import SearchView from './SearchView'
import ResultsView from './ResultView'

class Main extends Component {
  constructor(props) {
    super(props);
  }

  searchSubmit(value) {
    Emitter.emit('search', value)
  }

  render() {
    return(
      <View style = {styles.mainContainer}>
        <SearchView submitHandler = {this.searchSubmit}/>
        <View style = {{paddingTop: 10}}/>
        <ResultsView/>
      </View>
    );
  }
}

module.exports = Main;
