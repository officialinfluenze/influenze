import { AppBar, Toolbar, Button, IconButton, Box } from '@influenze/ui-lib';
import MenuIcon from '@mui/icons-material/Menu'; // Ensure you have the MenuIcon
import Logo from '../../../assets/images/logotransparent.png';
import { useState } from 'react';
import PropTypes from 'prop-types';

const Header = ({
  scrollHome,
  scrollAbout,
  scrollService,
  scrollPricing,
  scrollContact,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuItemClick = (scrollFunction) => {
    scrollFunction(); // Call the scroll function
    setMobileOpen(false); // Close menu after item click
  };

  return (
    <AppBar
      position="fixed"
      style={{
        backgroundColor: 'transparent',
        boxShadow: 'none',
        backdropFilter: 'blur(12px)',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', position: 'relative' }}>
        {/* Logo on the left */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={Logo}
            alt="Logo"
            style={{ width: 80, height: 80, marginRight: 10 }}
          />
        </Box>

        {/* Desktop View: Nav Links */}
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' }, // Only show in larger viewports
            gap: '20px',
          }}
        >
          <Button
            sx={{
              textTransform: 'none',
              color: 'white',
              fontWeight: 550,
            }}
            onClick={() => handleMenuItemClick(scrollHome)}
          >
            Home
          </Button>
          <Button
            sx={{
              textTransform: 'none',
              fontWeight: 550,
              color: 'white',
            }}
            onClick={() => handleMenuItemClick(scrollAbout)}
          >
            About
          </Button>
          <Button
            sx={{
              textTransform: 'none',
              fontWeight: 550,
              color: 'white',
            }}
            onClick={() => handleMenuItemClick(scrollService)}
          >
            Services
          </Button>
          <Button
            sx={{
              textTransform: 'none',
              fontWeight: 550,
              color: 'white',
            }}
            onClick={() => handleMenuItemClick(scrollPricing)}
          >
            Pricing
          </Button>
          <Button
            sx={{
              textTransform: 'none',
              fontWeight: 550,
              color: 'white',
            }}
            onClick={() => handleMenuItemClick(scrollContact)}
          >
            Contact
          </Button>
        </Box>

        {/* Mobile View: Menu Icon on the Right */}
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerToggle}
          sx={{ display: { xs: 'block', md: 'none' } }} // Only show in mobile
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* Mobile Menu: Horizontal Dropdown Below Navbar */}
      <Box
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)', // Translucent background
          display: mobileOpen ? 'flex' : 'none', // Show flex only when open
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px', // Add some padding
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', // Optional shadow
          zIndex: 1100, // Ensure it's above other elements
          height: '50px', // Fixed height for menu
          transition: 'opacity 0.7s ease-in-out', // Smooth transition
          opacity: mobileOpen ? 1 : 0, // Control opacity
        }}
      >
        <Button
          sx={{
            color: 'white',
            fontSize: '16px',
            textTransform: 'none',
            transition: 'transform 0.2s ease', // Button transition
            '&:hover': {
              transform: 'scale(1.05)', // Scale effect on hover
            },
          }}
          onClick={() => handleMenuItemClick(scrollHome)}
        >
          Home
        </Button>
        <Button
          sx={{
            color: 'white',
            fontSize: '16px',
            textTransform: 'none',
            transition: 'transform 0.2s ease',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
          onClick={() => handleMenuItemClick(scrollAbout)}
        >
          About
        </Button>
        <Button
          sx={{
            color: 'white',
            fontSize: '16px',
            textTransform: 'none',
            transition: 'transform 0.2s ease',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
          onClick={() => handleMenuItemClick(scrollService)}
        >
          Services
        </Button>
        <Button
          sx={{
            color: 'white',
            fontSize: '16px',
            textTransform: 'none',
            transition: 'transform 0.2s ease',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
          onClick={() => handleMenuItemClick(scrollPricing)}
        >
          Pricing
        </Button>
        <Button
          sx={{
            color: 'white',
            fontSize: '16px',
            textTransform: 'none',
            transition: 'transform 0.2s ease',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
          onClick={() => handleMenuItemClick(scrollContact)}
        >
          Contact
        </Button>
      </Box>
    </AppBar>
  );
};

Header.propTypes = {
  scrollHome: PropTypes.func.isRequired,
  scrollAbout: PropTypes.func.isRequired,
  scrollService: PropTypes.func.isRequired,
  scrollPricing: PropTypes.func.isRequired,
  scrollContact: PropTypes.func.isRequired,
};

export default Header;
