const { GoogleSpreadsheet } = require('google-spreadsheet');

const credentials = require('./credentials.json');

const doc = new GoogleSpreadsheet(
  '1huFSNM906DII6Nbthec-AEXDfJZT1mMUJa5ieFee7NA'
);

const run = async () => {
  try {
    await doc.useServiceAccountAuth(credentials);
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[1];
    //Nome	Email	Whatsapp	Cupom	Promo
    await sheet.addRow({
      Nome: 'Osias Miranda',
      Email: 'osiasmiranda@gmail.com',
      Whatsapp: '92991020034',
      Cupom: 'aaa111',
      Promo: 'acasarass',
    });
  } catch (error) {
    console.log(error);
  }
};

run();
