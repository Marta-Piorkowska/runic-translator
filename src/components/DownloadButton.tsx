import { Button } from '@mui/material';

interface DownloadButtonProps {
   onClick: () => void;
   disabled?: boolean;
}

const DownloadSvgIcon = () => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="currentColor"
      viewBox="0 0 16 16"
   >
      <path d="M.5 9.9V14a1 1 0 001 1h13a1 1 0 001-1V9.9a.5.5 0 011 0V14a2 2 0 01-2 2H1.5a2 2 0 01-2-2V9.9a.5.5 0 011 0z" />
      <path d="M7.646 11.854a.5.5 0 00.708 0l3-3a.5.5 0 10-.708-.708L8.5 10.293V1.5a.5.5 0 00-1 0v8.793L5.354 8.146a.5.5 0 10-.708.708l3 3z" />
   </svg>
);

export function DownloadButton({ onClick, disabled = false }: DownloadButtonProps) {
   return (
      <Button
         variant="outlined"
         startIcon={<DownloadSvgIcon />}
         onClick={onClick}
         disabled={disabled}
         sx={{ fontWeight: 'bold,' }}
      >
         Download SVG
      </Button>
   );
}
