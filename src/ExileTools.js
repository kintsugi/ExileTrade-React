import Emitter from './Emitter'


class ExileTools {
  constructor(props) {
    this.options = {
      baseUrl: 'http://api.exiletools.com/index/_search?',
      headers: {
        'Authorization': 'DEVELOPMENT-Indexer'
      }
    }
  }

  query(value) {
    console.log('starting query')
    let url = this.options.baseUrl + value;
    fetch(url, {
      method: 'GET',
      headers: this.options.headers,
    })
    .then((response) => response.text())
    .then((responseText) => {
      Emitter.emit('results', responseText);
    })
    .catch((error) => {
      console.warn(error);
    });
  }
}

module.exports = new ExileTools();
