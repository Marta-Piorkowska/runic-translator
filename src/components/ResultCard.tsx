import { Box, Paper, Stack, Typography, } from '@mui/material';
import { PreviewBox } from './PreviewBox';
import { DownloadButton } from './DownloadButton';

type Props = {
   svg: string | null;
   onDownload: () => void;
};

export function ResultCard({ svg, onDownload }: Props) {
   console.log('svg', svg);
   return (
      <Paper
         elevation={0}
         sx={{
            p: 3,
            borderRadius: 3,
            backgroundColor: 'rgba(255 255 255 / 40%)',
            backdropFilter: 'blur(12px)',
            boxShadow: '0 16px 32px rgba(0,0,0,0.15)',
         }}
      >
         <Stack spacing={2} alignItems="center">
            <Box
               sx={{
                  display: 'flex',
                  alignItems: 'center',
                  width: '100%',
                  gap: 2,
               }}
            >
               <Box
                  sx={{
                     flex: 1,
                     height: 2,
                     background:
                        'linear-gradient(to right, transparent, rgba(0,0,0,0.3))',
                  }}
               />
               <Typography
                  variant="H7"
                  letterSpacing={1.5}
                  color="text.secondary"
               >
                  RUNIC OUTPUT
               </Typography>
               <Box
                  sx={{
                     flex: 1,
                     height: 2,
                     background:
                        'linear-gradient(to left, transparent, rgba(0,0,0,0.3))',
                  }}
               />
            </Box>
            <PreviewBox svg={svg} />
            <DownloadButton onClick={onDownload} disabled={!svg} />
         </Stack>
      </Paper>
   );
}