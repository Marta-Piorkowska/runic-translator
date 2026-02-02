export function RunePreview({ svg }: { svg: string | null }) {
   if (!svg) return null;

   return (
      <div
         dangerouslySetInnerHTML={{ __html: svg }}
      />
   );
}
