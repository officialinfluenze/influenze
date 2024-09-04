import { AppBar, Toolbar, Button, Text } from '@influenze/ui-lib';
import Logo from '../../../assets/images/logo-transparent-svg.svg';
import { NavLinks } from './index.styles';

const Header = () => {
  return (
    <AppBar
      position="static"
      style={{ backgroundColor: '#f8e1e1', boxShadow: 'none' }}
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
          sx={{ fontWeight: '550' }}
        >
          Influenze
        </Text>
        <NavLinks>
          <Button
            sx={{
              textTransform: 'none',
              color: 'rgb(10 10 10 / 87%)',
              fontWeight: 550,
            }}
          >
            Home
          </Button>
          <Button
            sx={{
              textTransform: 'none',
              color: 'rgb(10 10 10 / 87%)',
              fontWeight: 550,
            }}
          >
            About
          </Button>
          <Button
            sx={{
              textTransform: 'none',
              color: 'rgb(10 10 10 / 87%)',
              fontWeight: 550,
            }}
          >
            Services
          </Button>
          <Button
            sx={{
              textTransform: 'none',
              color: 'rgb(10 10 10 / 87%)',
              fontWeight: 550,
            }}
          >
            Blog
          </Button>
          <Button
            sx={{
              textTransform: 'none',
              color: 'rgb(10 10 10 / 87%)',
              fontWeight: 550,
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
