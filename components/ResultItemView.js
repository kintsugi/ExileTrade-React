import React, {
  Component,
  View,
  Image,
  Text
} from 'react-native'

import styles from './Styles';
import ResultItemInfoView from './ResultItemInfoView'

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
            <Text style = {styles.modText}>
              Seller: {this.props.data._source.shop.lastCharacterName}
            </Text>
          </View>
          <View style = {{ flexDirection: 'row', padding: 10}}>
            <Image
            source = {{uri: this.props.data._source.info.icon}}
            style = {{width: 64, height: 64}}
            />
            <ResultItemInfoView source = {this.props.data._source}/>
          </View>
          <View style = {styles.flavourTextContainer}>
            <Text style = {styles.flavourText}>
            {!this.props.data._source.info.flavourText ? '' : '\'' + this.props.data._source.info.flavourText + '\''}
            </Text>
          </View>

        </View>
      </View>
    );
  }
}

module.exports = ResultItemView;
