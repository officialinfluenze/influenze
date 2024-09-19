  import { Button, Text, Icons } from '@influenze/ui-lib';
  import Logo from '../../../assets/images/logo-png.png';
  import {
    MainContainer,
    NavLinks,
    StyledButton,
    SubFlexContainer1,
    SubFlexContainer2,
    SubFlexContainer3,
    SubFlexContainer4,
    StyledText,
    FooterStyledText,
    FooterContainer,
    LogoImage
  } from './index.styles';
  import PropTypes from 'prop-types';

  const { InstagramIcon, EmailIcon } = Icons;

  const Footer = ({
    scrollHome,
    scrollAbout,
    scrollService,
    scrollPricing,
    scrollContact,
  }) => {
    return (
      <>
        <MainContainer>
        <SubFlexContainer1>
          <LogoImage src={Logo} alt="Logo" />
          <StyledText variant="h6">
            Influenze
          </StyledText>
        </SubFlexContainer1>
          <SubFlexContainer2>
            <StyledText variant="h5">
              About
            </StyledText>
            <Text
              style={{ color: 'white', alignSelf: 'center', textWrap: 'pretty' }}
            >
              Influenze is a leading digital marketing agency dedicated to helping
              businesses grow and thrive online with innovative strategies.
              Elevate your brand with Influenze today!
            </Text>
          </SubFlexContainer2>
          <SubFlexContainer3>
            <Text variant="h5" style={{ color: 'white', marginBottom: '10px' }}>
              Information
            </Text>
            <NavLinks>
              <StyledButton onClick={scrollHome}>Home</StyledButton>
              <StyledButton onClick={scrollAbout}>About</StyledButton>
              <StyledButton onClick={scrollService}>Services</StyledButton>
              <StyledButton onClick={scrollPricing}>Pricing</StyledButton>
              <StyledButton onClick={scrollContact}>Contact</StyledButton>
            </NavLinks>
          </SubFlexContainer3>
          <SubFlexContainer4>
            <Text
              variant="h5"
              style={{
                color: 'white',
                alignSelf: 'center',
                marginBottom: '10px',
              }}
            >
              Connect with Us
            </Text>
            <div style={{ display: 'flex' }}>
              <Button
                sx={{ color: 'white', minWidth: '10px' }}
                onClick={() => {
                  window.open(
                    'https://www.instagram.com/influenze.in?igsh=em56cXFodnUwa290',
                  );
                }}
              >
                <InstagramIcon />
              </Button>
              <Button
                sx={{ color: 'white', minWidth: '10px' }}
                onClick={() => {
                  window.open('mailto:officialinfluenze@gmail.com');
                }}
              >
                <EmailIcon />
              </Button>
            </div>
          </SubFlexContainer4>
        </MainContainer>
        <FooterContainer>
          <FooterStyledText variant="subtitle2">
            © 2024 Influenze. All rights reserved.
          </FooterStyledText>
        </FooterContainer>
      </>
    );
  };
  export default Footer;

  Footer.propTypes = {
    scrollHome: PropTypes.func.isRequired,
    scrollAbout: PropTypes.func.isRequired,
    scrollService: PropTypes.func.isRequired,
    scrollPricing: PropTypes.func.isRequired,
    scrollContact: PropTypes.func.isRequired,
  };

