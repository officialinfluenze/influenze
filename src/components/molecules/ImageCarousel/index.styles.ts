import { styled } from '@influenze/ui-lib';

export const ImageCarouselMainContainer = styled('div')({
  display: 'flex',
  gap: '20px',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '10px',
  scrollbarWidth: 'none',
  scrollBehavior: 'smooth',
});
export const ImageCarouselSubContainer = styled('div')({
  display: 'flex',
  overflowX: 'auto',
  scrollbarWidth: 'none',
  scrollBehavior: 'smooth',
  gap: '20px',
});

export const StyledCarouselImage = styled('img')({
  width: 'auto',
  objectFit: 'cover',
  borderRadius: '10px',
  boxShadow: '0 0 10px 0 rgba(0,0,0,0.1)',
});
