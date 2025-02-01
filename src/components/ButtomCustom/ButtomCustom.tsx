import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';

const ButtomCustomStyle = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#1d1d1d',
  borderColor: '#1d1d1d',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#1a1a1a',
    borderColor: '#1a1a1a',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#181817',
    borderColor: '#181817',
  },
});

interface ButtomCustomProps extends ButtonProps {
  children: React.ReactNode
}

export default function ButtomCustom({ children, ...props }: ButtomCustomProps) {
  return (
    <ButtomCustomStyle {...props}>
      {children}
    </ButtomCustomStyle>
  );
}