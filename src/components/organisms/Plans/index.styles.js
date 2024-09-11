import { styled, Text } from '@influenze/ui-lib';

export const Heading1 = styled(Text)({
    fontFamily: 'sans-serif',
    fontStyle: 'normal',
    fontSize: '54px',
    color:'#dddddd',
    textAlign: 'center',
    marginTop: '200px',
    fontWeight: 'bold', 
    letterSpacing: '-1.5px',
    lineHeight: '110%'
});

export const Heading2 = styled(Text)({
    fontFamily: 'sans-serif',
    fontSize: '54px', 
    fontStyle: 'normal',
    textAlign: 'center',
    color:'#dddddd',
    marginTop:'20px',
    marginBottom: '25px',
    fontWeight: 'bold',
    letterSpacing: '-1.5px', 
    maxWidth:'80%',
    margin:'auto',
});

export const FlexContainer = styled('div')({
    marginTop: '100px',
    padding:'12px',
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out',
    opacity: 0,
    transform: 'translateY(50px)',
    '&.animate-card': {
        opacity: 1,
        transform: 'translateY(0)',
    },
});