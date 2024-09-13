import {styled,Text,Card} from '@influenze/ui-lib';


export const StyledCard = styled(Card)({
    flex: '1 1 calc(50% - 20px)',
    maxWidth: 450,
    border: '1px solid lightgray',
    borderRadius: '10px',
    alignSelf: 'center',
});

export const TestimonialContainer = styled('div')({
    display: 'flex',
     justifyContent: 'center',
      alignItems: 'center',
       margin: '10px 0px' 
});

export const SubContainer = styled('div')({
    width: '80%', 
    marginLeft: '10px'
});

export const NameText = styled(Text)({
    fontSize:'large'
})
export const DesignationText = styled(Text)({
    fontSize:'small',
    color:'gray',
    fontFamily:'sans-serif'
})