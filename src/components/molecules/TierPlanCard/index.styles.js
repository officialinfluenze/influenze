import { styled, Text, Card, Button } from '@influenze/ui-lib';

export const PlansContainer = styled('div')({
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
  marginBottom: '15px',
});

export const PlanDescription = styled(Text)({
  fontWeight: 'bold',
  fontFamily: 'sans-serif',
});

export const ImageContainer = styled('div')({
    color: 'rgb(34, 241, 6)',
    padding: '2px',
    width:'20px',
    height:'20px',
});

export const StyledCard = styled(Card)({
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    width: '400px',
    borderRadius: '16px',
    height: '470px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    display: 'flex',     
    flexDirection: 'column',
    justifyContent: 'space-between', 
    position: 'relative',  
    '&:hover': {
        transform: 'scale(1.05)', 
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)'
    }
});
export const PlanTitleContainer = styled('div')({
  width: '100px',
  height: '30px',
  border: '1px solid gray',
  borderRadius: '10px',
  display: 'flex',
  justifyContent: 'center',
});

export const SubFlexContainer = styled('div')({
  display: 'flex',
  gap: '5px',
  margin: '10px 0 10px 0',
});

export const PlanTitle = styled(Text)({
  fontWeight: 'bold',
  alignSelf: 'center',
});

export const StyledHr = styled('hr')({
  border: ' none',
  borderTop: '0.5px solid gray',
});

export const StyledButton = styled(Button)({
    width:'80%',
    justifyItems:'flex-end',
    borderRadius:'10px',
    color:'black',
    fontWeight:'bold',
})

export const CardActions = styled('div')({
    marginTop: 'auto',    
    paddingBottom: '20px',  
    display: 'flex',
    justifyContent: 'center',
});
