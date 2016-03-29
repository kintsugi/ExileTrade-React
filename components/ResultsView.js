import React, {
  Component,
  View
} from 'react-native'

import Emitter from '../src/Emitter'
import ExileTools from '../src/ExileTools.js'
import ResultsListView from './ResultsListView'

/*
 * Contains all results related material, accepts the results from
 * the API.
 */

class ResultsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showResults: false,
      results: []
    }
  }

  componentWillMount() {
    Emitter.addListener('newSearch', () => {
      this.setState({
        showResults: false,
        results: {}
      })
    });
    Emitter.addListener('search', (query) => {
      ExileTools.query(query)
    });
    Emitter.addListener('results', (results) => {
      this.setState({
        showResults: true,
        results: results
      })
    })
  }

  renderNoResults() {
    return(
      <View style = {styles.resultsContainer}/>
    );
  }
  renderResults() {
    return(
      <View style = {styles.resultsContainer}>
        <ResultsListView results = {this.state.results}/>
      </View>
    );

  }

  render() {
    if(this.state.showResults)
      return this.renderResults();
    else
      return this.renderNoResults();


  }
}

const styles = React.StyleSheet.create({
  resultsContainer: {
    flex: 1,
    flexDirection: 'column',
    width: 372,
    alignItems: 'flex-start',
    borderColor: '#000000',
    backgroundColor: '#303030',
    borderRadius: 10,
    borderWidth: 1,
    flexWrap: 'wrap',
  },
});

module.exports = ResultsView;
