import React, {
  Component,
  View,
  Image,
  Text
} from 'react-native'

import styles from './Styles';
import ItemModsListView from './ItemModsListView.js'

/*
 * Parent view of ItemModsListView. Contains area for other extraneous item
 * item, quality, defense stats, etc.
 */

class ResultItemInfoView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
        <View style = {{flex: 1, flexDirection: 'column', alignItems: 'flex-start', flexWrap: 'wrap'}}>
          <ItemModsListView mods = {this.props.source.mods}/>
          <Text style = {styles.modText}>
          {this.props.source.sockets ? '\nSockets: ' + this.props.source.sockets.allSocketsGGG : ''}
          </Text>
        </View>
    );
  }
}

module.exports = ResultItemInfoView;
