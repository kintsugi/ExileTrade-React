import React, {
  Component,
  View,
  Image,
  TextInput,
  input,
  TouchableHighlight,
} from 'react-native'

import styles from './Styles';

class SearchView extends Component {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this)
    this.state = {value: null}
  }

  componentWillMount() {

  }

  onPress() {
    this.props.submitHandler(this.state)
  }

  render() {
    return(
      <View style = {styles.searchContainer}>
        <TextInput
          style = {styles.searchInput}
          onChangeText = {(value) => this.setState({value})}
          value = {this.state.value}
          placeholder = "Search ExileTrade..."
          placeholderTextColor = "#adadad"
        />
        <View style = {{paddingLeft: 10}}>
          <TouchableHighlight style = {styles.searchButton} onPress={this.onPress}>
              <Image
                source = {require('../imgs/search.png')}
                style = {{width: 36, height: 36}}/>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

module.exports = SearchView;
