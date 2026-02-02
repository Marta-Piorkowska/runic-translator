import { Box, Typography } from '@mui/material';

type Props = {
   svg: string | null;
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
            <Box
               dangerouslySetInnerHTML={{ __html: svg }}
               sx={{
                  '& svg': {
                     width: '105%',
                     height: '105%',
                  },
               }}
            />
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
