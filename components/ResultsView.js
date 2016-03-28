import React, {
  Component,
  View
} from 'react-native'

import styles from './Styles';
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

module.exports = ResultsView;
