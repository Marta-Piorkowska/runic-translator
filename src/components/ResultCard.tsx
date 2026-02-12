import { Box, Paper, Stack, Typography, } from '@mui/material';

type Props = {
   children: React.ReactNode;
};

export function ResultCard({ children }: Props) {

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
            {children}
         </Stack>
      </Paper>
   );
}