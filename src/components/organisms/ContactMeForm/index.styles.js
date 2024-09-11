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
  padding: '0% 0% 0% 0%',
  justifyContent: 'space-around',
  '@media (max-width: 750px)': {
    flexDirection: 'column-reverse',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const FormContainer = styled('div')({});
