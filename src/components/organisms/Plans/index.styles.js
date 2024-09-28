import { styled, Text } from '@influenze/ui-lib';

export const Heading1 = styled(Text)({
    fontFamily: 'sans-serif',
    fontStyle: 'normal',
    fontSize: '54px', // Default font size for desktop
    color: '#dddddd',
    textAlign: 'center',
    marginTop: '200px',
    fontWeight: 'bold',
    letterSpacing: '-1.5px',
    lineHeight: '110%',

    // Media query for mobile view
    '@media (max-width: 768px)': {
        fontSize: '42px', // Smaller size for mobile
        marginTop: '100px', // Adjust margin if needed
    },
});

export const Heading2 = styled(Text)({
    fontFamily: 'sans-serif',
    fontSize: '54px', // Default font size for desktop
    fontStyle: 'normal',
    textAlign: 'center',
    color: '#dddddd',
    marginTop: '20px',
    marginBottom: '25px',
    fontWeight: 'bold',
    letterSpacing: '-1.5px',
    maxWidth: '80%',
    margin: 'auto',

    // Media query for mobile view
    '@media (max-width: 768px)': {
        fontSize: '42px', // Smaller size for mobile
    },
});

export const FlexContainer = styled('div')({
    marginTop: '100px',
    padding: '12px',
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
    justifyContent: 'center',
    transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out',
    opacity: 0,
    transform: 'translateY(50px)',
    '@media (max-width: 768px)': {
        margin:'6%',
    },
    '&.animate-card': {
        opacity: 1,
        transform: 'translateY(0)',
    },
});
