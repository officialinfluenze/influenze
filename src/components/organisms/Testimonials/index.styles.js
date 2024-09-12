import {styled,Text} from '@influenze/ui-lib';

export const MainContainer = styled('div')({
    display:'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'space-around',
    width:'80%',
    marginLeft:'150px'
});

export const Heading = styled(Text)({
    fontWeight:'bold',
    margin:'30px 0px 30px 0px',
    textAlign:'center'
});