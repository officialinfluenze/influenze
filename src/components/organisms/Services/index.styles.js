import {styled,Text} from '@influenze/ui-lib';

export const FlexRow = styled('div')({
    display: 'flex',
    flexWrap: 'wrap',
    gap:'20px',
    justifyContent:'center',
    alignItems:'center',
    width: '80%'
});

export const ImageContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center',
    [theme.breakpoints.down('md')]: {
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        margin: '0',
    },
  }));

export const ServicesContainer = styled('div')({
    backgroundColor: '#ffffff1a',
    borderRadius: '16px',
    alignItems: 'left',
    flex:' 1 1 30%', 
    boxSizing: 'border-box',
    padding:'20px 30px 30px 30px',
    minHeight:'160px',
});

export const ServiceTitle = styled(Text)({
    fontWeight:700,
    fontSize:'22px',
    color:'#dddddd',
    margin:'10px 0 10px 0',
    fontFamily:"system-ui"
});

export const ServiceDescription = styled(Text)({
    fontWeight:400,
    fontSize:'15px',
    color:"#dddddd",
    margin:'10px 0 10px 0',
    fontFamily:"system-ui"
});

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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '150px',
    opacity: 0,
    transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out',
    transform: 'translateY(50px)',
    '&.animate-card': {
      opacity: 1,
      transform: 'translateY(0)',
    },
});