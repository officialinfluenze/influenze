import { styled, Text } from '@influenze/ui-lib';

export const Heading1 = styled(Text)({
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop:'30px'
});

export const Heading2 = styled(Text)({
    textAlign: 'center',
    color: 'gray',
    marginTop:'20px',
    marginBottom: '25px',
    fontWeight: 'bold',
});

export const FlexContainer = styled('div')({
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out',
    opacity: 0,
    transform: 'translateY(50px)',
    '&.animate-card': {
        opacity: 1,
        transform: 'translateY(0)',
    },
});