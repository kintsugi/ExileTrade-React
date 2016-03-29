import React, {
  Component,
  View,
  Image,
  TextInput,
  input,
  TouchableHighlight,
} from 'react-native'

/*
 * Search bar, submit entered text when button is pressed to the passed
 * handler to make the query to the ExileTools API.
 */

class SearchView extends Component {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
    this.state = {value: null};
  }

  onPress() {
    this.props.submitHandler(this.state);
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

const styles = React.StyleSheet.create({
  searchContainer: {
    paddingTop: 30,
    flexDirection: 'row',
  },
  searchInput: {
    paddingLeft: 10,
    backgroundColor: '#303030',
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 10,
    height: 42,
    width: 320,
    fontFamily: 'Arial',
    color: '#adadad',
  },
});

module.exports = SearchView;
