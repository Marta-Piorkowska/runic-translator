import { Container } from '@mui/material';

export function MainContainer({ children }: { children: React.ReactNode }) {
   return (
      <Container
         maxWidth="sm"
         sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
         }}
      >
         {children}
      </Container>
   );
}
