import { AppBar, Toolbar, Button, Text } from '@influenze/ui-lib';
import Logo from '../../../assets/images/logo-transparent-svg.svg';
import { NavLinks } from './index.styles';

const Header = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#f8e1e1' }}>
      <Toolbar>
        <img
          src={Logo}
          alt="Logo"
          style={{ width: 50, height: 50, marginRight: 10 }}
        />
        <Text variant="h5" sx={{ color: '#000', fontWeight: '550' }}>
          Influenze
        </Text>
        <NavLinks>
          <Button
            color="inherit"
            sx={{ textTransform: 'none', color: '#000', fontWeight: 550 }}
          >
            Home
          </Button>
          <Button
            color="inherit"
            sx={{ textTransform: 'none', color: '#000', fontWeight: 550 }}
          >
            About
          </Button>
          <Button
            color="inherit"
            sx={{ textTransform: 'none', color: '#000', fontWeight: 550 }}
          >
            Services
          </Button>
          <Button
            color="inherit"
            sx={{ textTransform: 'none', color: '#000', fontWeight: 550 }}
          >
            Blog
          </Button>
          <Button
            color="inherit"
            sx={{ textTransform: 'none', color: '#000', fontWeight: 550 }}
          >
            Contact
          </Button>
        </NavLinks>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
