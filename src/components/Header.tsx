import { Stack, Typography, Box } from '@mui/material';

export function Header() {
   return (
      <Stack spacing={1} textAlign="center" sx={{ marginBottom: '20px' }}>
         <Box
            sx={{
               position: 'relative',
               width: '100%',
               textAlign: 'center',
               my: 2,
            }}
         >
            <Typography variant="h2" fontWeight={600}>
               Runic Translator
            </Typography>
            <Box
               sx={{
                  height: 2,
                  width: '100%',
                  background:
                     'linear-gradient(to right, transparent, rgba(0,0,0,0.35), transparent)',
               }}
            />
         </Box>
         <Typography variant="body2" color="text.secondary">
            Convert numbers to runes
         </Typography>
      </Stack>
   );
}
