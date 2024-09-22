import { Button, Text, Icons } from '@influenze/ui-lib';
import Logo from '../../../assets/images/logotransparent.png';
import {
  MainContainer,
  NavLinks,
  StyledButton,
  SubFlexContainer1,
  SubFlexContainer2,
  SubFlexContainer3,
  SubFlexContainer4,
  AboveMainContainer,
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
    <AboveMainContainer>
      <MainContainer>
        <SubFlexContainer1>
          <img src={Logo} alt="Logo" style={{ width: 100, height: 100 }} />
          {/* <Text
            variant="h6"
            style={{
              color: 'white',
              alignSelf: 'center',
              marginTop: '10px',
            }}
          >
            Influenze
          </Text> */}
        </SubFlexContainer1>
        <SubFlexContainer2>
          <Text variant="h5" style={{ color: 'white', marginBottom: '10px' }}>
            About
          </Text>
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
              marginBottom: '10px',
              alignSelf: 'flex-start',
            }}
          >
            Connect with Us
          </Text>
          <div style={{ display: 'flex' }}>
            <Button
              sx={{ color: 'white', minWidth: '10px' }}
              // onClick={() => {
              //   window.open(
              //     'https://www.instagram.com/influenze.in?igsh=em56cXFodnUwa290',
              //   );
              // }}
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
      <div style={{ display: 'flex', width: '80%' }}>
        <Text
          variant="subtitle2"
          style={{
            color: 'white',
            fontSize: 'small',
            alignSelf: 'center',
            justifySelf: 'flex-start',
          }}
        >
          © 2024 Influenze. All rights reserved.
        </Text>
      </div>
    </AboveMainContainer>
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
