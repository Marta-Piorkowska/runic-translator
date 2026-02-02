import { useState } from 'react';
import { splitNumberToRunicValues, translateRunicValuesToLines } from '@/runes/numberToRune';
import { composeRunicSvg } from '@/runes/composeRunicSvg';

import AppLayout from '@/components/AppLayout';
import { MainContainer } from '@/components/MainContainer';
import { Header } from '@/components/Header';
import { InputCard } from '@/components/InputCard';
import { ResultCard } from '@/components/ResultCard';

export default function HomePage() {
   const [number, setNumber] = useState<number | ''>('');
   const [svgString, setSvgString] = useState<string | null>(null);

   const handleGenerate = () => {
      if (number === '' || number <= 0 || number > 9999) return;

      const values = splitNumberToRunicValues(number);
      console.log('-number', number);
      const lines = translateRunicValuesToLines(values);
      console.log('-lines', lines);
      const svg = composeRunicSvg(lines);

      setSvgString(svg);
   };

   const handleDownload = () => {
      if (!svgString) return;

      const blob = new Blob([svgString], { type: 'image/svg+xml' });
      const url = URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.download = `rune-${number}.svg`;
      link.click();

      URL.revokeObjectURL(url);
   };

   return (
      <AppLayout>
         <MainContainer>
            <Header />
            <InputCard
               value={number}
               onChange={setNumber}
               onGenerate={handleGenerate}
            />
            <ResultCard svg={svgString} onDownload={handleDownload} />
         </MainContainer>
      </AppLayout>
   );
}
