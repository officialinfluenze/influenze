import { styled } from '@mui/material/styles';

export const NavLinks = styled('div')(({ theme }) => ({
  marginLeft: 'auto',
  display: 'flex',
  '& a': {
    textDecoration: 'none',
    color: '#000',
    fontSize: '16px',
    marginLeft: theme.spacing(3),
    fontWeight: '500',
    transition: 'color 0.3s ease',
  },
  '& a:hover': {
    color: theme.palette.primary.main,
  },
}));
