import { keyframes } from '@emotion/react';
import { styled,Text } from '@influenze/ui-lib';

const slide = keyframes`
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-100%);
  }
`;

export const CardContainer = styled('div')({
  display:'inline-flex',
  gap: '20px', 
  marginBottom: '25px',
  overflow: 'hidden', 
  animation: `${slide} 200s linear infinite`,
});
  
export const Card = styled('div')({
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  borderRadius: '16px', 
  padding: '30px 20px',
  color: '#fff',
  textAlign: 'center',
  minWidth:'250px', 
  maxWidth:'250px',  
  height: '350px', 
  display: 'flex',
  flexDirection: 'column', 
});

export const Category = styled('div')({
  fontSize: '12px',
  fontWeight: 'bold',
  background: 'linear-gradient(279deg, rgb(161, 94, 232) 0%, rgb(109, 141, 255) 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  margin: '8px 10px', 
});

export const Percentage = styled('div')({
  fontSize: '75px',
  fontWeight: 700,
  fontFamily: 'Poppins, sans-serif',
  letterSpacing: '-1.2px',
  color: 'rgba(87, 60, 255, 1)',
  margin: '8% 8% 0% 8%',
});

export const Description = styled('div')({
  fontSize: '16px',
  lineHeight: '1.5',
  margin: '10px 8px 10px 8px', 
});

export const Percentageof = styled('div')({
  fontSize: '12px',
});

export const Heading = styled(Text)({
  fontFamily: 'sans-serif',
  fontStyle: 'normal',
  fontSize: '54px',
  color:'#dddddd',
  textAlign: 'center',
  marginTop: '200px',
  marginBottom: '200px',
  fontWeight: 'bold', 
  letterSpacing: '-1.5px',
  lineHeight: '110%'
});
