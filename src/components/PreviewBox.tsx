import { Box, Typography } from '@mui/material';
import { JSX } from 'react';

type Props = {
   svg: JSX.Element | null;
};

export function PreviewBox({ svg }: Props) {
   return (
      <Box
         sx={{
            width: 260,
            height: 260,
            borderRadius: 2,
            backgroundColor: 'rgba(0,0,0,0.03)',
            border: '1px dashed rgba(0,0,0,0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
         }}
      >
         {svg ? (
            svg
         ) : (
            <Typography
               variant="body2"
               color="text.secondary"
               align="center"
            >
               Generated rune<br />will appear here
            </Typography>
         )}
      </Box>
   );
}
