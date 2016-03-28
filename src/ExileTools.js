import Emitter from './Emitter'

/*
 * Wrapper class to query ExileTools API
 * NOTE: Authorization field in ExileTools.options.headers is a test value,
 * replace with an authorized key if app goes to production.
 */

class ExileTools {
  constructor(props) {
    this.options = {
      baseUrl: 'http://api.exiletools.com/index/_search?',
      headers: {
        'Authorization': 'DEVELOPMENT-Indexer'
      }
    }
  }

  //See ExileTool API ref for query parameter structure.
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
