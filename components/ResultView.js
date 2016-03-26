import React, {
  Component,
  View
} from 'react-native'

import styles from './Styles';
import Emitter from '../src/Emitter'
import ExileTools from '../src/ExileTools.js'

class ResultsView extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    Emitter.addListener('search', (value) => {
      console.log('calling query')
      ExileTools.query(value)
    });
    Emitter.addListener('results', (results) => {
        console.log(results);
    })
  }

  render() {
    return(
      <View style = {styles.resultsContainer}/>
    );
  }
}

module.exports = ResultsView;
