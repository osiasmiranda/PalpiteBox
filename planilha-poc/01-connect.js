const { GoogleSpreadsheet } = require('google-spreadsheet');

const credentials = require('./credentials.json');

const doc = new GoogleSpreadsheet('');

const run = async () => {
  await doc.useServiceAccountAuth(credentials);
  await doc.loadInfo();
  console.log(doc.title);
};

run();
