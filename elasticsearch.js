const elasticsearch = require('elasticsearch');

let elasticClient = new elasticClient({
  host: 'localhost:9200',
  log: 'info'
});

let indexName = "randomindex";

//Deletes an existiing file
function deleteIndex() {
  return elasticClient.indicies.delete({
    index: indexName,
});

exports.deleteIndex = deleteIndex;


//creates the index
function initIndex() {
  return elasticClient.indicies.create({
    index: indexName
  });
}

exports.initIndex = initIndex;

//check if index exists
function indexExists() {
  return elasticClient.indicies.exists({
    index: indexName
  });
}

exports.indexExists = indexExists;


function initMapping() {
  return elasticClient.indices({
    index: indexName,
    type:  "document",
    body: {
      propertieis: {
          title: { type: "string" },
          content: { type: "string" },
          suggest: {
            type: "completion",
            analyzer: "simple",
            search_analyzer: "simple",
            payloads: true
          }
      }
    }
  });
}

exports.initMapping = initMapping;
