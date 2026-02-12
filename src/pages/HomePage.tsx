import { JSX, useState } from 'react';
import { splitNumberToRunicValues, translateRunicValuesToLines } from '@/runes/numberToRune';
import AppLayout from '@/components/AppLayout';
import { MainContainer } from '@/components/MainContainer';
import { Header } from '@/components/Header';
import { InputCard } from '@/components/InputCard';
import { ResultCard } from '@/components/ResultCard';
import { PreviewBox } from '@/components/PreviewBox';
import { DownloadButton } from '@/components/DownloadButton';
import composeRunicSvg from '@/runes/ComposeRunicSvg';
import ReactDOMServer from 'react-dom/server';

export default function HomePage() {
   const [number, setNumber] = useState<number | ''>('');
   const [svgRune, setSvgRune] = useState<JSX.Element | null>(null);

   const handleGenerate = () => {
      if (number === '' || number <= 0 || number > 9999) return;

      const values = splitNumberToRunicValues(number);
      const lines = translateRunicValuesToLines(values);
      const svg = composeRunicSvg(lines);

      setSvgRune(svg);
   };

   const handleDownload = () => {
      if (!svgRune) return;
      const svgString = ReactDOMServer.renderToStaticMarkup(svgRune);
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
            <ResultCard  >
               <></>
               <PreviewBox svg={svgRune} />
               <DownloadButton onClick={handleDownload} disabled={!svgRune} />
            </ResultCard >
         </MainContainer>
      </AppLayout>
   );
}
