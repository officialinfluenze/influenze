
import { styled, Button ,Text } from '@influenze/ui-lib';

export const NavLinks = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection:'column',
  '& a': {
    textDecoration: 'none',
    fontSize: '16px',
    transition: 'color 0.3s ease',
  },
  '& a:hover': {
    color: theme.palette.primary.main,
  },
}));

export const LogoImage = styled('img')({
  width: 100,
  height: 100,
});

export const MainContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2.5),
  justifyContent: 'center',
  flexWrap: 'wrap',
  marginTop: theme.spacing(2.5),
  [theme.breakpoints.down('md')]: {
    gap: theme.spacing(4),
  },
}));

export const SubFlexContainer1 = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    marginLeft:'0px'
  },
}));

export const SubFlexContainer2 = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '30px',
  maxWidth: '400px',
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
  },
}));

export const SubFlexContainer3 = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '30px',
  alignItems: 'flex-start',
  [theme.breakpoints.down('md')]: {
    alignItems: 'center',
  },
}));

export const SubFlexContainer4 = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '30px',
  [theme.breakpoints.down('md')]: {
    alignItems: 'center',
  },
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  fontWeight: 550,
  color: theme.palette.common.white,
  lineHeight: 1,
  padding: '6px 0px',
  display: 'flex',
  justifyContent: 'flex-start',
  [theme.breakpoints.down('md')]: {
    justifyContent: 'center',
    width: '100%',
  },
}));

export const StyledText = styled(Text)(({theme})=>({
  color: theme.palette.common.white,
  marginBottom: '10px',
  marginLeft:'10px' ,
  marginTop: 1,
  [theme.breakpoints.down(700)]: {
    marginTop: 3,
    marginBottom: '0px',
    
  },
}));

export const LogoText = styled(Text)(({theme})=>({
  color: theme.palette.common.white,
  marginBottom: '10px',
}));


export const FooterContainer = styled('div')(({ theme }) => ({
  margin: '0 auto',
  marginLeft: '15%',
  padding: theme.spacing(2, 0),
  [theme.breakpoints.down('lg')]: {
    marginLeft: '2%',
  },
}));

export const FooterStyledText = styled(Text)({
  color: 'white',
  alignSelf: 'center',
  fontSize: 'small',
});