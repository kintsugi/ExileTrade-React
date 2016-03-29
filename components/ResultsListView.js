import React, {
  Component,
  View,
  ListView,
  Text
} from 'react-native'

import GlobalStyles from './Styles';
import ResultItemView from './ResultItemView'

/*
 * List view for all results
 */

class ResultsListView extends Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
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
        <View style = {styles.noResultsContainer}>
          <Text style = {GlobalStyles.text}>
            Sorry, your query returned no results. Names must be an exact match.
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

const styles = React.StyleSheet.create({
  noResultsContainer: {
    justifyContent: 'center',
    padding: 10
  }
});

module.exports = ResultsListView;
