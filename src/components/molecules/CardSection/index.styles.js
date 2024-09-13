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
  fontFamily:'Be Vietnam Pro, sans-serif',
  fontSize: '14px',
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
  fontFamily:'Be Vietnam Pro, sans-serif',
  fontSize: '16px',
  lineHeight: '1.5',
  margin: '30px 8px 10px 8px', 
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
  fontWeight: 'bold', 
  letterSpacing: '-1.5px',
  lineHeight: '110%',
  margin:'6px'
});

export const SubHeading = styled(Text)({
  fontFamily: 'sans-serif',
  fontSize: '24px', 
  fontStyle: 'normal',
  textAlign: 'center',
  marginBottom: '150px',
  color:'#6e6e73',
  maxWidth:'60%',
  fontWeight: 'bold',
  letterSpacing: '-1.5px', 
});