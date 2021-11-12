const { GoogleSpreadsheet } = require('google-spreadsheet');

const credentials = require('./credentials.json');

const doc = new GoogleSpreadsheet('');

const run = async () => {
  try {
    await doc.useServiceAccountAuth(credentials);
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[1];
    //Nome	Email	Whatsapp	Cupom	Promo
    await sheet.addRow({
      Nome: 'teste',
      Email: 'teste@tst.com',
      Whatsapp: '992929292929',
      Cupom: 'aaa111',
      Promo: 'acasarass',
    });
  } catch (error) {
    console.log(error);
  }
};

run();
