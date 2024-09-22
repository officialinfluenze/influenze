import { styled } from '@influenze/ui-lib';
import { APP_BAR_HEIGHT } from 'src/containers/home/constants';

export const MainContainer = styled('div')({
  backgroundImage: `radial-gradient(at 48% 41%, hsla(239,82%,24%,1) 0px, transparent 50%),
radial-gradient(at 100% 4%, hsla(27,0%,0%,1) 0px, transparent 50%),
radial-gradient(at 32% 38%, hsla(240,72%,29%,1) 0px, transparent 50%),
radial-gradient(at 80% 0%, hsla(189,0%,0%,1) 0px, transparent 50%),
radial-gradient(at 32% 60%, hsla(245,100%,35%,1) 0px, transparent 50%),
radial-gradient(at 64% 61%, hsla(239,74%,36%,1) 0px, transparent 50%),
radial-gradient(at 0% 3%, hsla(355,0%,0%,1) 0px, transparent 50%),
radial-gradient(at 100% 100%, hsla(340,0%,0%,1) 0px, transparent 50%),
radial-gradient(at 0% 100%, hsla(0,0%,0%,1) 0px, transparent 50%),
radial-gradient(at 0% 50%, hsla(0,0%,0%,0.44) 0px, transparent 50%);`,
  paddingTop: `${APP_BAR_HEIGHT}px`,
});

export const SubContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  height: 'auto',
  width: '100%',
  gap: '70px',
  paddingTop: '10px',
  paddingBottom: '80px',
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
  width: '60%',
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
