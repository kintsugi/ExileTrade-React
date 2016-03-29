import React, {
  Component,
  View,
  Image,
  Text
} from 'react-native'

import GlobalStyles from './GlobalStyles';
import ResultItemInfoView from './ResultItemInfoView'

/*
 * Container for a single instance of a result
 */

class ResultItemView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style = {{padding: 10}}>
        <View style = {styles.resultItemContainer}>
          <View style = {styles.resultItemTextContainer}>
            <Text style = {styles.uniqueNameText}>
              {this.props.data._source.info.fullName}
            </Text>
            <Text style = {GlobalStyles.modText}>
              Seller: {this.props.data._source.shop.lastCharacterName}
            </Text>
          </View>
          <View style = {{padding: 10, flexDirection: 'row', alignItems: 'center'}}>
            <Image
            source = {{uri: this.props.data._source.info.icon}}
            style = {{width: 64, height: 64}}
            />
            <View style = {{paddingLeft: 10}}>
              <Text style = {GlobalStyles.modText}>
                {this.props.data._source.shop.note || 'No Price Set'}{'\n'}
                Verified: {this.props.data._source.shop.verified}{'\n'}
              </Text>
            </View>
          </View>
          <View style = {styles.flavourTextContainer}>
            <ResultItemInfoView source = {this.props.data._source}/>
            <View style = {{paddingTop: 5}}>
              <Text style = {styles.flavourText}>
              {!this.props.data._source.info.flavourText ? '' : '\'' + this.props.data._source.info.flavourText + '\''}
              </Text>
            </View>
          </View>

        </View>
      </View>
    );
  }
}

const styles = React.StyleSheet.create({
  resultItemTextContainer: {
    flex: 1,
    backgroundColor: '#000000',
    width: 352,
    padding: 10,
  },
  resultItemContainer: {
    flexDirection: 'column',
    flex: 1,
    borderWidth: 1,
    borderColor: '#000000',
  },
  uniqueNameText: {
    fontFamily: 'Arial',
    color: '#AF6025',
    textAlign: 'left',
  },
  flavourText: {
    fontFamily: 'Arial',
    color: '#22B14C',
    textAlign: 'left',
    fontStyle: 'italic'
  },
  flavourTextContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    padding: 10
  },
});

module.exports = ResultItemView;
