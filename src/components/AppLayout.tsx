import { Box } from '@mui/material';

export default function AppLayout({ children }: { children: React.ReactNode }) {
   return (
      <Box
         sx={{
            minHeight: '100vh',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundImage: "url('/background.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
         }}
      >
         {children}
      </Box>
   );
}
