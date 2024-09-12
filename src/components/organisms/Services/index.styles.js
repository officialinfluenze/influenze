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
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
        transform: 'translateY(-10px)',   
      }
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
    fontWeight:'bold',
    textAlign:'center',
    color:'gray',
    marginTop:'20px',

});

export const Heading2 = styled(Text)({
    fontWeight:'bold',
    textAlign:'center',
     margin:'10px 0 25px 0'
})