import React, {
  Component,
  View,
  Image,
  Text
} from 'react-native'

import styles from './Styles';
import ItemModsListView from './ItemModsListView.js'

class ResultItemInfoView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style = {{flex: 1, flexDirection: 'row'}}>
        <View style = {{flex: 1, flexDirection: 'column', alignItems: 'flex-start', paddingRight: 5}}>
          <ItemModsListView mods = {this.props.source.mods}/>
          <Text style = {styles.modText}>
          {'\n'}{this.props.source.sockets ? 'Sockets: ' + this.props.source.sockets.allSocketsGGG : ''}
          </Text>
        </View>
        <View>
          <Text style = {styles.modText}>
            {this.props.source.shop.note || 'No Price Set'}{'\n'}
            Verified: {this.props.source.shop.verified}{'\n'}
          </Text>
        </View>

      </View>
    );
  }
}

module.exports = ResultItemInfoView;
