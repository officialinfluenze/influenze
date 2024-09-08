import { AppBar, Toolbar, Button, Text } from '@influenze/ui-lib';
import Logo from '../../../assets/images/logo-png.png';
import { NavLinks } from './index.styles';

const Header = () => {
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
          color="rgb(10 10 10 / 87%)"
          style={{ fontFamily: 'Arial, sans-serif' }}
          sx={{ fontWeight: '550', color: 'white' }}
        >
          Influenze
        </Text>
        <NavLinks>
          <Button
            sx={{
              textTransform: 'none',
              color: 'rgb(10 10 10 / 87%)',
              fontWeight: 550,
              color: 'white',
            }}
          >
            Home
          </Button>
          <Button
            sx={{
              textTransform: 'none',
              color: 'rgb(10 10 10 / 87%)',
              fontWeight: 550,
              color: 'white',
            }}
          >
            About
          </Button>
          <Button
            sx={{
              textTransform: 'none',
              color: 'rgb(10 10 10 / 87%)',
              fontWeight: 550,
              color: 'white',
            }}
          >
            Services
          </Button>
          <Button
            sx={{
              textTransform: 'none',
              color: 'rgb(10 10 10 / 87%)',
              fontWeight: 550,
              color: 'white',
            }}
          >
            Blog
          </Button>
          <Button
            sx={{
              textTransform: 'none',
              color: 'rgb(10 10 10 / 87%)',
              fontWeight: 550,
              color: 'white',
            }}
          >
            Contact
          </Button>
        </NavLinks>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
