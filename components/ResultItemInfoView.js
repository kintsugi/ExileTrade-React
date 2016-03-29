import React, {
  Component,
  View,
  Image,
  Text
} from 'react-native'

import GlobalStyles from './GlobalStyles';
import ItemModsListView from './ItemModsListView'

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
        <View style = {styles.ItemModsListContainer}>
          <ItemModsListView mods = {this.props.source.mods}/>
          <Text style = {styles.modText}>
          {this.props.source.sockets ? '\nSockets: ' + this.props.source.sockets.allSocketsGGG : ''}
          </Text>
        </View>
    );
  }
}

const styles = React.StyleSheet.create({
  ItemModsListContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    flexWrap: 'wrap'
  }
});

module.exports = ResultItemInfoView;
