import React, {
  Component,
  View
} from 'react-native'

import Emitter from '../src/Emitter'
import styles from './Styles';
import SearchView from './SearchView'
import ResultsView from './ResultsView'

class Main extends Component {
  constructor(props) {
    super(props);
  }

  searchSubmit(query) {
    console.log(query)
    //clear on new search
    Emitter.emit('newSearch');
    if(query.value)
      Emitter.emit('search', query);
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
