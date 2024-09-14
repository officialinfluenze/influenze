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

