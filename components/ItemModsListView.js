import React, {
  Component,
  View,
  ListView,
  Text
} from 'react-native'

import styles from './Styles';

class ItemModsListView extends Component {
  constructor(props) {
    super(props);
    var implicitDS = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    var explicitDS = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    var implicitMods = {};
    var explicitMods = {};
    //mods will only even contain one entry
    for(var i in this.props.mods) {
      implicitMods = this.props.mods[i]['implicit']
      explicitMods = this.props.mods[i]['explicit']
    }
    this.state =  {
      implicitDataSource: implicitDS.cloneWithRows(this.formatMods(implicitMods)),
      explicitDataSource: explicitDS.cloneWithRows(this.formatMods(explicitMods))
    };
  }

  formatMods(mods) {
    var ret = [];
    for(var i in mods) {
      //At this time, either the mod contains a '#' and should be replaced
      //by the value or the key is the mod
      if(i.includes('#'))
        ret.push(i.replace('#', mods[i]))
       else
        ret.push(i);
    }
    return ret;

  }

  renderImplicitMod(mod) {
    return(
      <View style = {styles.modTextContainer}>
        <Text style = {styles.modText}>{mod}</Text>
      </View>
    );
  }

  renderExplicitMod(mod) {
    return(
      <View style = {styles.modTextContainer}>
        <Text style = {styles.modText}>{mod}</Text>
      </View>
    );
  }

  render() {
    return(
      <View style = {{flex: 1, flexDirection: 'column'}}>
        <ListView
          dataSource = {this.state.implicitDataSource}
          renderRow = {this.renderImplicitMod}
        />
        <ListView
          dataSource = {this.state.explicitDataSource}
          renderRow = {this.renderExplicitMod}
        />
      </View>
    );
  }
}

module.exports = ItemModsListView;
