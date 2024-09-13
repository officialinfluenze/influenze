import { styled, TextField } from '@influenze/ui-lib';
export const StyledTextField = styled(TextField)({
  minWidth: '60px',
  width: '100%',
  margin: '10px 0',
  '& label': {
    color: '#fff',
  },
  '& input': {
    color: '#fff',
  },
  '& textarea': {
    color: '#fff',
    height: '100px',
  },
  '& fieldset': {
    borderColor: '#fff',
    borderRadius: '15px',
  },
  '&:hover fieldset': {
    borderColor: '#fff',
  },
  '&.Mui-focused fieldset': {
    borderColor: '#fff',
  },
  '&.Mui-focused label': {
    color: '#fff',
  },
});

export const FlexContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  gap: '10%',
  width: '100%',
  marginTop: '50px',
  padding: '14% 0% 14% 0%',
  justifyContent: 'space-around',

  background: 'linear-gradient(138deg, #0f1960, #5364d9, #e86116)',
  backgroundSize: '600% 600%',
  animation: 'AnimationName 12s ease infinite',

  maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
  WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',

  '@media (max-width: 750px)': {
    flexDirection: 'column-reverse',
    justifyContent: 'center',
    alignItems: 'center',
  },

  '@keyframes AnimationName': {
    '0%': { backgroundPosition: '20% 0%' },
    '50%': { backgroundPosition: '81% 100%' },
    '100%': { backgroundPosition: '20% 0%' },
  },
});



export const FormContainer = styled('div')({
  minWidth: '700px',
});
