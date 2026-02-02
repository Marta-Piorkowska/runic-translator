import { Paper, Stack, TextField, Button, Box, FormHelperText } from '@mui/material';
import { useState } from 'react';

type Props = {
   value: number | '';
   onChange: (value: number | '') => void;
   onGenerate: () => void;
};

const MIN = 1;
const MAX = 9999;

export function InputCard({ value, onChange, onGenerate }: Props) {
   const [error, setError] = useState<string | null>(null);

   const handleChange = (raw: string) => {
      if (raw === '') {
         setError(null);
         onChange('');
         return;
      }

      if (!/^\d+$/.test(raw)) return;

      const num = Number(raw);

      if (num < MIN || num > MAX) {
         setError(`Number must be between ${MIN} and ${MAX}`);
      } else {
         setError(null);
      }

      onChange(num);
   };

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
         <Stack spacing={1}>
            <Box display="flex" gap={2} alignItems="stretch">
               <TextField
                  label="Number to translate"
                  value={value}
                  error={Boolean(error)}
                  onChange={(e) => handleChange(e.target.value)}
                  fullWidth
                  inputProps={{
                     inputMode: 'numeric',
                     pattern: '[0-9]*',
                  }}
                  sx={{
                     flex: 1,
                     '& input[type=number]': {
                        MozAppearance: 'textfield',
                     },
                     '& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button': {
                        WebkitAppearance: 'none',
                        margin: 0,
                     },
                  }}
               />

               <Button
                  variant="contained"
                  size="large"
                  onClick={onGenerate}
                  disabled={Boolean(error) || value === ''}
                  sx={{
                     minWidth: 120,
                     borderRadius: 2,
                     fontWeight: 'bold'
                  }}
               >
                  Generate
               </Button>
            </Box>

            <FormHelperText error={Boolean(error)}>
               {error ?? `Enter a number (${MIN} - ${MAX})`}
            </FormHelperText>
         </Stack>
      </Paper>
   );
}
