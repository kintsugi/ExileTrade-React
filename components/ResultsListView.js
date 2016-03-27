import React, {
  Component,
  View,
  ListView,
  Text
} from 'react-native'

import styles from './Styles';
import ResultItemView from './ResultItemView'

class ResultsListView extends Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    console.log(this.props.results)
    this.state =  {
      dataSource: ds.cloneWithRows(this.props.results.hits.hits)
    };
  }

  renderResult(result) {
    return(
      <ResultItemView data = {result}/>
    );
  }


  render() {
    if(this.props.results.hits.total < 1) {
      return(
        <View style = {{justifyContent: 'center', padding: 10}}>
          <Text style = {styles.text}>
            Sorry, your query returned no results. Names must match exactly.
          </Text>
        </View>
      );
    } else {
      return(
        <ListView
          dataSource = {this.state.dataSource}
          renderRow = {this.renderResult}
        />
      );
    }
  }
}

module.exports = ResultsListView;
