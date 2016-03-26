var React = require('react-native');


const styles = React.StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#3c3f41'
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
    alignItems: 'center',
    borderColor: '#000000',
    backgroundColor: '#303030',
    borderRadius: 10,
    borderWidth: 1,
  }
});

module.exports = styles;
