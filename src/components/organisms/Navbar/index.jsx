import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Box,
  Drawer,
  Icons,
} from '@influenze/ui-lib';
import Logo from '../../../assets/images/logotransparent.png';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const { MenuIcon, CloseIcon } = Icons;

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
    scrollFunction();
    setMobileOpen(false);
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.1 },
    }),
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
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={Logo}
            alt="Logo"
            style={{ width: 80, height: 80, marginRight: 10 }}
          />
        </Box>
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
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

        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerToggle}
          sx={{ display: { xs: 'block', md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <Drawer anchor="top" open={mobileOpen} onClose={handleDrawerToggle}>
        <Box
          sx={{
            padding: '20px',
            backgroundColor: '#1a1919',
            position: 'relative',
            height: '100vh',
          }}
          role="presentation"
        >
          <IconButton
            onClick={handleDrawerToggle}
            sx={{
              position: 'absolute',
              right: 20,
              top: 20,
              color: 'white',
            }}
          >
            <CloseIcon />
          </IconButton>
          <div style={{ padding: '6%' }}>
            {[
              { label: 'Home', action: scrollHome },
              { label: 'About', action: scrollAbout },
              { label: 'Services', action: scrollService },
              { label: 'Pricing', action: scrollPricing },
              { label: 'Contact', action: scrollContact },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                variants={buttonVariants}
                initial="hidden"
                animate={mobileOpen ? 'visible' : 'hidden'}
                custom={index}
              >
                <Button
                  sx={{
                    color: 'white',
                    fontSize: '16px',
                    textTransform: 'none',
                    display: 'block',
                    marginBottom: '10px',
                  }}
                  onClick={() => handleMenuItemClick(item.action)}
                >
                  {item.label}
                </Button>
              </motion.div>
            ))}
          </div>
        </Box>
      </Drawer>
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
