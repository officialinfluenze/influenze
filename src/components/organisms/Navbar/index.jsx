import { AppBar, Toolbar, Button, Text } from '@influenze/ui-lib';
import Logo from '../../../assets/images/logo-png.png';
import { NavLinks } from './index.styles';
import PropTypes from 'prop-types';
const Header = ({
  scrollHome,
  scrollAbout,
  scrollService,
  scrollPricing,
  scrollContact,
}) => {
  return (
    <AppBar
      position="fixed"
      style={{
        backgroundColor: 'transparent',
        boxShadow: 'none',
        backdropFilter: 'blur(12px)',
      }}
    >
      <Toolbar>
        <img
          src={Logo}
          alt="Logo"
          style={{ width: 50, height: 50, marginRight: 10 }}
        />
        <Text
          variant="h6"
          style={{ fontFamily: 'Arial, sans-serif' }}
          sx={{ fontWeight: '550', color: 'white' }}
        >
          Influenze
        </Text>
        <NavLinks>
          <Button
            sx={{
              textTransform: 'none',
              color: 'white',
              fontWeight: 550,
            }}
            onClick={scrollHome}
          >
            Home
          </Button>
          <Button
            sx={{
              textTransform: 'none',
              fontWeight: 550,
              color: 'white',
            }}
            onClick={scrollAbout}
          >
            About
          </Button>
          <Button
            sx={{
              textTransform: 'none',
              fontWeight: 550,
              color: 'white',
            }}
            onClick={scrollService}
          >
            Services
          </Button>
          <Button
            sx={{
              textTransform: 'none',
              fontWeight: 550,
              color: 'white',
            }}
            onClick={scrollPricing}
          >
            Pricing
          </Button>
          <Button
            sx={{
              textTransform: 'none',
              fontWeight: 550,
              color: 'white',
            }}
            onClick={scrollContact}
          >
            Contact
          </Button>
        </NavLinks>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
Header.propTypes = {
  scrollHome: PropTypes.func.isRequired,
  scrollAbout: PropTypes.func.isRequired,
  scrollService: PropTypes.func.isRequired,
  scrollPricing: PropTypes.func.isRequired,
  scrollContact: PropTypes.func.isRequired,
};
