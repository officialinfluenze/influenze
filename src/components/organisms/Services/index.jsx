import {
  FlexRow,
  ImageContainer,
  ServicesContainer,
  ServiceTitle,
  Heading1,
  Heading2,
} from './index.styles';
import digitalstratergies from '../../../assets/images/Digital Strategies.svg';
import contentcreation from '../../../assets/images/Content Creation.svg';
import webdevelopment from '../../../assets/images/Web Development.svg';
import analytics from '../../../assets/images/Analytics & SEO.svg';
import branding from '../../../assets/images/Branding and Marketing.svg';
import payperclick from '../../../assets/images/Pay-Per-Click.svg';
import { ServiceDescription } from './index.styles';

const Services = ({ icon, title, description }) => (
  <ServicesContainer>
    <div
      style={{
        display: 'flex',
      }}
    >
      <ImageContainer>{icon}</ImageContainer>
    </div>
    <ServiceTitle>{title}</ServiceTitle>
    <ServiceDescription>{description}</ServiceDescription>
  </ServicesContainer>
);

const services = [
  {
    icon: (
      <img
        src={digitalstratergies}
        alt="Digital Strategies"
        style={{ width: '50px', height: '50px' }}
      />
    ),
    title: 'Digital Strategies',
    description:
      'Unique and Strategic plans to drive digital growth effectively.',
  },
  {
    icon: (
      <img
        src={contentcreation}
        alt="Content Creation"
        style={{ width: '50px', height: '50px' }}
      />
    ),
    title: 'Content Creation',
    description:
      'Craft impactful, engaging and audience-focused digital content.',
  },
  {
    icon: (
      <img
        src={webdevelopment}
        alt="webdevelopment"
        style={{ width: '50px', height: '50px' }}
      />
    ),
    title: 'Web Development',
    description:
      'Create responsive, dynamic, and engaging websites for all devices.',
  },
  {
    icon: (
      <img
        src={analytics}
        alt="Analytics & SEO"
        style={{ width: '50px', height: '50px' }}
      />
    ),
    title: 'Analytics & SEO',
    description:
      'Boost online visibility with expert SEO and data-driven insights.',
  },
  {
    icon: (
      <img
        src={branding}
        alt="Branding and Marketing "
        style={{ width: '50px', height: '50px' }}
      />
    ),
    title: 'Branding and Marketing',
    description:
      'Build, enhance, advice and promote a unique brand identity for your business.',
  },
  {
    icon: (
      <img
        src={payperclick}
        alt="Pay-Per-Click"
        style={{ width: '50px', height: '50px' }}
      />
    ),
    title: 'Pay-Per-Click',
    description:
      'Drive quality traffic with targeted ads on major platforms for maximizing reach.',
  },
];
const Page = () => {
  return (
    <>
      <Heading1 variant="body1">Boost Your Brand</Heading1>
      <Heading2 variant="h5">
        Innovative Social Media Marketing Solutions
      </Heading2>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '30px',
        }}
      >
        <FlexRow>
          {services.map((service, index) => (
            <Services key={index} {...service} />
          ))}
        </FlexRow>
      </div>
    </>
  );
};

export default Page;
