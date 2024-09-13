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
  FooterContainer,
} from './index.styles';

const { InstagramIcon, EmailIcon } = Icons;

const Footer = () => {
  return (
    <FooterContainer>
      <MainContainer>
        <SubFlexContainer1>
          <img src={Logo} alt="Logo" style={{ width: 100, height: 100 }} />
          <Text
            variant="h6"
            style={{
              color: 'white',
              alignSelf: 'center',
              marginLeft: '30px',
              marginTop: '10px',
            }}
          >
            Influenze
          </Text>
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
            <StyledButton>Home</StyledButton>
            <StyledButton>About</StyledButton>
            <StyledButton>Services</StyledButton>
            <StyledButton>Blog</StyledButton>
            <StyledButton>Contact</StyledButton>
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
            <Button sx={{ color: 'white', minWidth: '10px' }}>
              <InstagramIcon />
            </Button>
            <Button sx={{ color: 'white', minWidth: '10px' }}>
              <EmailIcon />
            </Button>
          </div>
        </SubFlexContainer4>
      </MainContainer>
      <div style={{ marginLeft: '150px' }}>
        <Text
          variant="subtitle2"
          style={{
            color: 'white',
            alignSelf: 'center',
            marginLeft: '10px',
            fontSize: 'small',
          }}
        >
          © 2024 Influenze. All rights reserved.
        </Text>
      </div>
    </FooterContainer>
  );
};
export default Footer;
