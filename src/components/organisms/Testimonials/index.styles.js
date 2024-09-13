import { styled, Text } from '@influenze/ui-lib';

export const MainContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const SubContainer = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '20px',
  justifyContent: 'space-around',
  width: '80%',
  '@media (max-width: 750px)': {
    flexDirection: 'column',
    gap: '20px',
    height: 'auto',
  },
});

export const Heading = styled(Text)({
  fontWeight: 'bold',
  margin: '30px 0px 30px 0px',
  textAlign: 'center',
  color: '#dddddd',
});
