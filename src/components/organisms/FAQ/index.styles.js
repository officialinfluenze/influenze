import { styled, Text } from '@influenze/ui-lib';


export const Heading1 = styled(Text)({
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop:'40px'
});

export const Heading2 = styled(Text)({
    textAlign: 'center',
    color: 'gray',
    marginBottom: '25px',
    fontWeight: 'bold',
    marginTop:'20px'

});

export const AccordianContainer = styled('div')({
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor:'white'
})