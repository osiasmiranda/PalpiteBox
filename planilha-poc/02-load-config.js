const { GoogleSpreadsheet } = require('google-spreadsheet');

const credentials = require('./credentials.json');

const doc = new GoogleSpreadsheet('');

const run = async () => {
  await doc.useServiceAccountAuth(credentials);
  await doc.loadInfo();
  console.log(doc.title);

  const sheet = doc.sheetsByIndex[2];
  await sheet.loadCells('A3:B3');
  console.log(sheet.title);
  const mostrarPromocaoCell = sheet.getCell(2, 0);
  console.log(mostrarPromocaoCell.value);

  const textCell = sheet.getCell(2, 1);
  console.log(textCell.value);
};

run();
