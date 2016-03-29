import React, {
  Component,
  View
} from 'react-native'

import Emitter from '../src/Emitter'
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

const styles = React.StyleSheet.create({
mainContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#3c3f41',
    paddingBottom: 10
  },
});

module.exports = Main;
