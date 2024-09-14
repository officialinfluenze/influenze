import React, { useState, useEffect } from 'react';
import { Text, Button, Tooltip } from '@influenze/ui-lib';
import { StyledTextField, FlexContainer } from './index.styles';
const ContactMeForm = () => {
  const [disabled, setDisabled] = useState(true);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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

    setLoading(true);
    setError(null);
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
      setLoading(false);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const renderForm = () => {
    return (
      <form
        action="https://docs.google.com/forms/d/e/1FAIpQLSeRSh6Mpe97R9-_gM5GqF-Z_befAOsJcDZgeEIcEllrxMxZyQ/formResponse"
        onSubmit={handleSubmit}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            minWidth: '500px',
            paddingLeft: '20%',
          }}
        >
          <Text
            variant="h2"
            style={{
              color: '#dddddd',
              alignSelf: 'center',
              fontWeight: 600,
              margin: '1%',
            }}
          >
            Just say Hello!
          </Text>
          <div
            style={{
              display: 'flex',
              gap: '10px',
              width: '100%',
            }}
          >
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
          </div>
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
            rows={10}
          />
          <Tooltip title={disabled ? 'Fill in all the details' : 'Submit'}>
            <Button
              type="submit"
              variant="outlined"
              style={{
                color: '#fff',
                width: '16%',
                borderRadius: '12px',
                borderColor: '#fff',
              }}
            >
              Submit
            </Button>
          </Tooltip>
        </div>
      </form>
    );
  };
  return (
    <FlexContainer>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '0px 0px 0px 0px',
          gap: '10px',
        }}
      >
        {submissionStatus === 'success' ? (
          <div
            style={{
              display: 'flex',
              gap: '20px',
            }}
          >
            <Text style={{ color: 'green' }}>Submitted Successfully</Text>
          </div>
        ) : (
          (submissionStatus === 'failure' || error) && (
            <div
              style={{
                display: 'flex',
                gap: '20px',
              }}
            >
              <Text style={{ color: 'red' }}>Submission Failed</Text>
            </div>
          )
        )}

        <div
          style={{
            display: 'flex',
            width: '100%',
            alignContent: 'center',
            justifyContent: 'center',
            backgroundColor: 'transparent',
            minHeight: 'auto',
          }}
        >
          {loading ? <Text>Submitting.....</Text> : renderForm()}
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
          }}
        >
          <Text
            variant="h3"
            style={{
              color: '#dddddd',
              alignSelf: 'center',
              fontWeight: 600,
              margin: '2%',
            }}
          >
            Contact Us
          </Text>
        </div>
        <div
          style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
          }}
        >
          <Text
            style={{
              color: '#dddddd',
              width: '80%',
              textAlign: 'center',
              margin: '2%',
              fontFamily: 'poppins, sans-serif',
            }}
          >
            We are here to help you! Please fill in the form below with your
            contact details and a brief description of your inquiry or issue.
            The more information you provide, the better we can assist you. Rest
            assured, we will get back to you as soon as possible.
          </Text>
        </div>
      </div>
    </FlexContainer>
  );
};

export default ContactMeForm;
