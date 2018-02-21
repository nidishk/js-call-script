import fs from "fs";
import CsvReadableStream from "csv-reader";
import _ from "lodash";

const breakCsv = async function(filePath) {
  const inputStream = fs.createReadStream(filePath, 'utf8');
  let retVal = [];
  return new Promise((resolve, reject) => {
    inputStream
       .pipe(CsvReadableStream({ parseNumbers: true, parseBooleans: true, trim: true }))
       .on('data', function (row) {
           retVal.push(row);
       })
       .on('end', () =>{
         retVal = _.zip.apply(_, retVal)
         resolve(retVal)
       })
  })

}

export default breakCsv;
