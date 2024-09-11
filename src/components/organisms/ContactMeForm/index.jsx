import React, { useState, useRef } from 'react';
import { Text, Button, Icons } from '@influenze/ui-lib';

const { ArrowDropDown } = Icons;
const ContactMeForm = () => {
  // Add your component logic here
  const [accordianState, setAccordianState] = useState(false);
  const accordianRef = useRef(null);

  const handleAccordian = () => {
    setAccordianState(!accordianState);
    window.scrollTo({
      top: accordianRef.current.offsetTop + 700,
      behavior: 'smooth',
    });
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        marginTop: '50px',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '20px',
        }}
      >
        <Text variant="h2" style={{ color: '#dddddd', alignSelf: 'center' }}>
          Contact Us
        </Text>
        <Button
          size="small"
          onClick={handleAccordian}
          color="primary"
          variant="text"
          style={{ maxWidth: 'fit-content', justifySelf: 'center' }}
        >
          {accordianState ? (
            <ArrowDropDown
              style={{ transform: 'rotate(180deg)', fontSize: '34px' }}
            />
          ) : (
            <ArrowDropDown style={{ fontSize: '34px' }} />
          )}
        </Button>
      </div>

      <div
        ref={accordianRef}
        style={{
          display: 'flex',
          width: '100%',
          alignContent: 'center',
          justifyContent: 'center',
          backgroundColor: 'transparent',
          minHeight: accordianState ? '1000px' : '00px',
        }}
      >
        {accordianState && (
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSeRSh6Mpe97R9-_gM5GqF-Z_befAOsJcDZgeEIcEllrxMxZyQ/viewform?embedded=true"
            width="90%"
            border="0"
            style={{
              frameborder: '0px',
              marginheight: '0px',
              marginwidth: '0px',
              border: 'none',
              minHeight: '800px',
            }}
          >
            Loading…
          </iframe>
        )}
      </div>
    </div>
  );
};

export default ContactMeForm;
