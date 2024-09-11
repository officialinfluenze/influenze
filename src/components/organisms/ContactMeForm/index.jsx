import React, { useState, useRef, useEffect } from 'react';
import { Text, IconButton, Icons, Button, Tooltip } from '@influenze/ui-lib';
import { StyledTextField } from './index.styles';
const { ArrowDropDown } = Icons;
const ContactMeForm = () => {
  // Add your component logic here
  const [disabled, setDisabled] = useState(true);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState('');
  const [accordianState, setAccordianState] = useState(false);
  const accordianRef = useRef(null);

  const handleAccordian = () => {
    setAccordianState(!accordianState);
    window.scrollTo({
      top: accordianRef.current.offsetTop + 700,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (name === '' || phone === '' || email === '' || message === '') {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [name, phone, email, message]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('entry.2005620554', name);
    formData.append('entry.1166974658', phone);
    formData.append('entry.1045781291', email);
    formData.append('entry.839337160', message);

    try {
      const response = await fetch(
        'https://docs.google.com/forms/d/e/1FAIpQLSeRSh6Mpe97R9-_gM5GqF-Z_befAOsJcDZgeEIcEllrxMxZyQ/formResponse',
        {
          method: 'POST',
          body: formData,
          mode: 'no-cors',
        },
      );

      if (response.ok || response.status === 0) {
        setSubmissionStatus('success');
      } else {
        setSubmissionStatus('failure');
      }

      setName('');
      setPhone('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmissionStatus('failure');
    }
  };

  const renderForm = () => {
    return (
      <form
        action="https://docs.google.com/forms/d/e/1FAIpQLSeRSh6Mpe97R9-_gM5GqF-Z_befAOsJcDZgeEIcEllrxMxZyQ/formResponse"
        onSubmit={handleSubmit}
      >
        <div>
          <StyledTextField
            name="entry.2005620554"
            label="name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
            required
          />
          <StyledTextField
            name="entry.1166974658"
            value={phone}
            label="phone number"
            onChange={(event) => {
              setPhone(event.target.value);
            }}
            required
          />
          <StyledTextField
            name="entry.1045781291"
            label="email"
            value={email}
            type="email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            required
          />
          <StyledTextField
            name="entry.839337160"
            mutiple
            label="message"
            value={message}
            multiline
            onChange={(event) => {
              setMessage(event.target.value);
            }}
            required
          />
        </div>
        <Tooltip title={disabled ? 'Fill in all the details' : 'Submit'}>
          <Button
            type="submit"
            variant="outlined"
            style={{
              color: '#fff',
            }}
          >
            Submit
          </Button>
        </Tooltip>
      </form>
    );
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        marginTop: '50px',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '20px',
        }}
      >
        <Text
          variant="h3"
          style={{ color: '#dddddd', alignSelf: 'center', fontWeight: 600 }}
        >
          Contact Us
        </Text>
        <IconButton
          size="small"
          onClick={handleAccordian}
          color="primary"
          variant="text"
          style={{
            minWidth: 'fit-content',
            justifySelf: 'center',
            width: '60px',
          }}
        >
          {accordianState ? (
            <ArrowDropDown
              style={{ transform: 'rotate(180deg)', fontSize: '50px' }}
            />
          ) : (
            <ArrowDropDown style={{ fontSize: '50px' }} />
          )}
        </IconButton>
      </div>
      <div
        style={{
          display: 'flex',
          gap: '20px',
        }}
      >
        <Text style={{ color: '#dddddd' }}>
          We are here to help you. Please fill in the form below completely and
          we will get back to you.
        </Text>
      </div>
      {submissionStatus === 'success' && (
        <div
          style={{
            display: 'flex',
            gap: '20px',
          }}
        >
          <Text style={{ color: 'green' }}>Submitted Successfully</Text>
        </div>
      )}

      <div
        ref={accordianRef}
        style={{
          display: 'flex',
          width: '100%',
          alignContent: 'center',
          justifyContent: 'center',
          backgroundColor: 'transparent',
          minHeight: accordianState ? 'auto' : '00px',
        }}
      >
        {accordianState && renderForm()}
      </div>
    </div>
  );
};

export default ContactMeForm;
