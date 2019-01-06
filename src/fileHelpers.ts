import * as fs from 'fs';
import {Buffer} from 'buffer';

export function readImage(filePath: string) {
  const fileData = fs.readFileSync(filePath).toString("hex");
  const result = [];
  for ( let i=0; i < fileData.length; i++) {
    result.push(parseInt(fileData[i] + "" + fileData[i +1]), 16);
  }
  return new Buffer(result);
}
