const dbClient = require('mongodb').MongoClient;
const username = 'manh';
const pass = '1YgRxoUkyGU1uYAI';
const db_name = 'corona_report';
const url = 'mongodb+srv://' + username + ':' + pass + '@wtat1-kyjlr.mongodb.net/' + db_name + '?retryWrites=true&w=majority';
// const client = new dbClient(url);

// exports.client = client;
exports.url = url;