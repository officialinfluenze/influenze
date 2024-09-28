import { styled, Text } from '@influenze/ui-lib';


export const Heading1 = styled(Text)({
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
});

export const Heading2 = styled(Text)({
    textAlign: 'center',
    marginBottom: '25px',
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
    fontStyle: 'normal',
    fontSize: '54px',
    color:'#dddddd',
    marginTop: '1%',
    letterSpacing: '-1.5px',
    lineHeight: '110%',
    '@media (max-width: 768px)': {
        fontSize: '42px', // Smaller size for mobile
    },
});

export const AccordianContainer = styled('div')({
    backgroundImage: `radial-gradient(at 61% 26%, hsla(168,0%,0%,1) 0px, transparent 50%),
    radial-gradient(at 81% 43%, hsla(240,79%,28%,0.76) 0px, transparent 50%),
    radial-gradient(at 0% 15%, hsla(308,0%,0%,0.73) 0px, transparent 50%),
    radial-gradient(at 46% 59%, hsla(344,0%,0%,0.75) 0px, transparent 50%),
    radial-gradient(at 58% 67%, hsla(240,75%,18%,0.82) 0px, transparent 50%),
    radial-gradient(at 27% 40%, hsla(258,23%,34%,1) 0px, transparent 50%)`,
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center',
    justifyContent:'center',
    width:'100%'
})