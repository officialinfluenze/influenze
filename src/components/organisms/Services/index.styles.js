import {styled,Text} from '@influenze/ui-lib';

export const FlexRow = styled('div')({
    display: 'flex',
    flexWrap: 'wrap',
    gap:'10px',
    justifyContent:'center',
    alignItems:'center',
    width: '80%'
});

export const ImageContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    border: '1px solid gray',
    borderRadius: '8px',
    padding: '5px',
    width: '30px',
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
    alignItems: 'center',
    textAlign: 'center',
    flex:' 1 1 30%', 
    boxSizing: 'border-box',
    padding:'10px',
    minHeight:'160px'
});

export const ServiceTitle = styled(Text)({
    fontWeight:'bold',
    margin:'10px 0 10px 0'
});

export const ServiceDescription = styled(Text)({
    fontWeight:'bold',
    margin:'10px 0 10px 0'
});

export const Heading1 = styled(Text)({
    fontWeight:'bold',
    textAlign:'center',
    color:'gray',
    marginTop:'20px'
});

export const Heading2 = styled(Text)({
    fontWeight:'bold',
    textAlign:'center',
     margin:'10px 0 25px 0'
})