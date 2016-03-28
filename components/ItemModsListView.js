import React, {
  Component,
  View,
  ListView,
  Text
} from 'react-native'

import styles from './Styles';

/*
 * View for the implicit and explicit mods of an item
 */

class ItemModsListView extends Component {
  constructor(props) {
    super(props);
    var implicitMods = {};
    var explicitMods = {};
    //mods will only even contain one entry
    for(var i in this.props.mods) {
      implicitMods = this.props.mods[i]['implicit']
      explicitMods = this.props.mods[i]['explicit']
    }
    var formattedMods = this.formatMods(implicitMods).concat(this.formatMods(explicitMods));
    this.state = {
      modsString: formattedMods.join('\n')
    };
  }

  formatMods(mods) {
    //Substitude placeholder characters for the numerical values.
    var ret = [];
    for(var i in mods) {
      //At this time, either the mod contains a '#' and should be replaced
      //by the value or the key is the mod
      if(i.includes('#'))
        ret.push(i.replace('#', mods[i]));
       else
        ret.push(i);
    }
    return ret;

  }

  render() {
    return(
      <View style = {styles.modTextContainer}>
        <Text style = {styles.modText}>{this.state.modsString}</Text>
      </View>
    );
  }
}

module.exports = ItemModsListView;
