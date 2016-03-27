import React, {
  Component,
  View
} from 'react-native'

import styles from './Styles';
import Emitter from '../src/Emitter'
import ExileTools from '../src/ExileTools.js'
import ResultsListView from './ResultsListView'

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
      console.log('calling query')
      ExileTools.query(query)
    });
    Emitter.addListener('results', (results) => {
      console.log('displaying results')
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
    console.log('rendering results')
    return(
      <View style = {styles.resultsContainer}>
        <ResultsListView results = {this.state.results}/>
      </View>
    );

  }

  render() {
    console.log('rendering')
    console.log(this.state.showResults)
    if(this.state.showResults)
      return this.renderResults();
    else
      return this.renderNoResults();


  }
}

module.exports = ResultsView;
