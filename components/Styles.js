var React = require('react-native');


const styles = React.StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#3c3f41',
    paddingBottom: 10
  },
  text: {
    fontFamily: 'Arial',
    color: '#adadad',
    textAlign: 'left'
  },
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
  searchButton: {
    borderColor: '#000000',
    backgroundColor: '#303030',
    borderRadius: 10,
    borderWidth: 1,
    height: 42,
    width: 42,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultsContainer: {
    flex: 1,
    flexDirection: 'column',
    width: 372,
    alignItems: 'flex-start',
    borderColor: '#000000',
    backgroundColor: '#303030',
    borderRadius: 10,
    borderWidth: 1,
    flexWrap: 'wrap',
  },
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
  modText: {
    fontFamily: 'Arial',
    color: '#adadad',
    textAlign: 'left',
    fontSize: 10, 
  },
  modTextContainer: {
    flex: 1,
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap',
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
  }
});

module.exports = styles;
