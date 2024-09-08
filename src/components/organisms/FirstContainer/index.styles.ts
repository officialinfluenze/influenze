import { styled } from '@influenze/ui-lib';
import { APP_BAR_HEIGHT } from 'src/containers/home/constants';

export const MainContainer = styled('div')({
  backgroundImage: `
radial-gradient(at 51% 70%, hsla(233,54%,40%,0.64) 0px, transparent 50%),
radial-gradient(at 29% 32%, hsla(233,54%,40%,0.64) 0px, transparent 50%);`,
  paddingTop: `${APP_BAR_HEIGHT}px`,
});

export const SubContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  height: 'auto',
  width: '100%',
  gap: '70px',
  paddingTop: '10px',
  justifyContent: 'space-between',
});

export const SubTopContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '50px',
  height: '80%',
  '@media (max-width: 750px)': {
    flexDirection: 'column',
    gap: '20px',
    height: 'auto',
  },
});

export const ImageContainer = styled('div')({
  display: 'flex',
  width: '80%',
  '@media (max-width: 750px)': {
    width: '100%',
    height: 'auto',
  },
});
export const StyledMainImage = styled('img')({
  width: '100%',
  objectFit: 'cover',
});
export const SubTopTextContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '30%',
  gap: '50px',
  alignSelf: 'flex-start',
  padding: '10px 20px 0px 0px',
  minHeight: '280px',
  height: '100%',
  '@media (max-width: 750px)': {
    width: 'auto',
    height: 'auto',
    minHeight: 'auto',
    padding: '10px 20px 0px 20px',
  },
});

export const SubBottomContainer = styled('div')({
  display: 'flex',
  height: '20%',
  padding: '20px 0px 50px 20px',
});
