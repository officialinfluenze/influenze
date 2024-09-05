import {styled,Text} from '@influenze/ui-lib';

export const Heading1 = styled(Text)({
    fontWeight:'bold',
    textAlign:'center',
    marginTop:'30px'
});

export const Heading2 = styled(Text)({
    textAlign:'center',
    color:'gray',
    marginBottom:'25px',
    fontWeight:'bold'
});

export const FlexContainer = styled('div')({
    display: 'flex',
    gap:'20px',
    justifyContent: 'center'
});


