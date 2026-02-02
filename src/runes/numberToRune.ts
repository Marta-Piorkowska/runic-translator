import { RUNE_MAP } from './runeMap';
import { RuneLine } from './runeTypes';

export function splitNumberToRunicValues(num: number): number[] {
   if (num <= 0 || num > 9999) throw new Error("Number out of range");

   const values: number[] = [];

   const thousands = Math.floor(num / 1000) * 1000;
   if (thousands) values.push(thousands);

   const hundreds = Math.floor((num % 1000) / 100) * 100;
   if (hundreds) values.push(hundreds);

   const tens = Math.floor((num % 100) / 10) * 10;
   if (tens) values.push(tens);

   const ones = num % 10;
   if (ones) values.push(ones);

   console.log('-values', values);
   return values;
};

export function translateRunicValuesToLines(values: number[]): RuneLine[] {
   const allLines = values.flatMap(val => {
      const rune = RUNE_MAP[val];
      if (!rune) throw new Error(`Rune not found for value ${val}`);
      return rune.lines;
   });

   const uniqueLines = Array.from(
      new Map(allLines.map(line => [JSON.stringify(line), line])).values()
   );
   console.log('uniqueLines', uniqueLines);
   return uniqueLines;
};
