const { GoogleSpreadsheet } = require('google-spreadsheet');

const credentials = require('./credentials.json');

const doc = new GoogleSpreadsheet(
  '1huFSNM906DII6Nbthec-AEXDfJZT1mMUJa5ieFee7NA'
);

const run = async () => {
  await doc.useServiceAccountAuth(credentials);
  await doc.loadInfo();
  console.log(doc.title);
};

run();
