import { styled, Button } from '@influenze/ui-lib';

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

export const MainContainer = styled('div')({
  display:'flex',
  gap:'100px',
  justifyContent:'center',
  flexWrap:'wrap'
})

export const SubFlexContainer1 = styled('div')({
  display:'flex',
  justifyContent:'center',
  alignItems:'center'
});

export const SubFlexContainer2 = styled('div')({
  display:'flex',
  flexDirection:'column',
  marginTop:'30px',
  maxWidth:'400px'
})

export const SubFlexContainer3 = styled('div')({
  display:'flex',
  flexDirection:'column',
  marginTop:'30px',
  alignItems:'flex-start'
})

export const SubFlexContainer4 = styled('div')({
  display:'flex',
  flexDirection:'column',
  marginTop:'30px'
});

export const StyledButton = styled(Button)({
  textTransform: 'none',
  fontWeight: 550,
  color: 'white',
  lineHeight: 1,
  padding: '6px 0px 6px 0px',
  display: 'flex',
  justifyContent: 'flex-start',
});

export const FooterContainer = styled('div')({
  backgroundImage:`radial-gradient(at 18% 94%, hsla(239,58%,15%,1) 0px, transparent 50%),
radial-gradient(at 100% 0%, hsla(27,0%,0%,1) 0px, transparent 50%),
radial-gradient(at 53% 54%, hsla(189,0%,0%,1) 0px, transparent 50%),
radial-gradient(at 53% 97%, hsla(240,50%,25%,1) 0px, transparent 50%),
radial-gradient(at 83% 95%, hsla(239,34%,22%,1) 0px, transparent 50%),
radial-gradient(at 100% 100%, hsla(340,0%,0%,1) 0px, transparent 50%),
radial-gradient(at 13% 9%, hsla(0,0%,0%,1) 0px, transparent 50%),
radial-gradient(at 0% 50%, hsla(0,0%,0%,0.44) 0px, transparent 50%);`
})
