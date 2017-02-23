const elasticsearch = require('elasticsearch');

let elasticClient = new elasticClient({
  host: 'localhost:9200',
  log: 'info'
});

let indexName = "randomindex";


//Deletes an existiing file
function deleteIndex() {
  return elasticClient({
    index: indexName,
    type: "document",
    body: {
      docsuggest: {
        text: input,
        completion: {
          field: "suggest",
          fuxxy: true
        }
      }
    }
  });
}

exports.getSuggestions = getSuggestions; 
