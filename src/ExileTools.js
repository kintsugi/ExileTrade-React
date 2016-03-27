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

  query(query) {
    var url = this.options.baseUrl;
    fetch(url, {
      method: 'POST',
      headers: this.options.headers,
      body: JSON.stringify({
        query: {
          bool: {
            must: [
              {
                term: {
                  'attributes.league': {
                    value: 'Standard'
                  }
                }
              },
              {
                term: {
                  'info.name': {
                    value: query.value
                  }
                }
              }
            ]
          }
        },
        size: 20
      })
    })
    .then((response) => response.json())
    .then((results) => {
      Emitter.emit('results', results);
    })
    .catch((error) => {
      throw new Error(error);
    });
  }
}

module.exports = new ExileTools();
