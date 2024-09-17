import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FlexRow,
  ImageContainer,
  ServicesContainer,
  ServiceTitle,
  Heading1,
  Heading2,
  FlexContainer,
} from './index.styles';
import digitalstratergies from '../../../assets/images/Digital Strategies.svg';
import contentcreation from '../../../assets/images/Content Creation.svg';
import webdevelopment from '../../../assets/images/Web Development.svg';
import analytics from '../../../assets/images/Analytics & SEO.svg';
import branding from '../../../assets/images/Branding and Marketing.svg';
import payperclick from '../../../assets/images/Pay-Per-Click.svg';
import { ServiceDescription } from './index.styles';
import PropTypes from 'prop-types';

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.2,
      duration: 0.5,
    },
  }),
  hover: {
    y: -10,
  },
};

const MotionServicesContainer = motion.create(ServicesContainer);

const Services = ({ icon, title, description, index }) => (
  <MotionServicesContainer
    initial="hidden"
    whileInView="visible"
    variants={containerVariants}
    custom={index}
    viewport={{ once: true, amount: 0.5 }}
    whileHover="hover"
  >
    <div style={{ display: 'flex' }}>
      <ImageContainer>{icon}</ImageContainer>
    </div>
    <ServiceTitle>{title}</ServiceTitle>
    <ServiceDescription>{description}</ServiceDescription>
  </MotionServicesContainer>
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
        alt="Web Development"
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
        alt="Branding and Marketing"
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

const Page = ({ passedRef }) => {
  const tierCardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-card');
          } else {
            entry.target.classList.remove('animate-card');
          }
        });
      },
      { threshold: 0.35 },
    );

    const element = tierCardRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <div ref={passedRef} style={{ display: 'flex', flexDirection: 'column' }}>
      <Heading1 variant="body1">Boost Your Brand</Heading1>
      <Heading2 variant="h5" color="#dddddd">
        Innovative Social Media Marketing Solutions
      </Heading2>
      <FlexContainer ref={tierCardRef}>
        <FlexRow>
          {services.map((service, index) => (
            <Services key={index} index={index} {...service} />
          ))}
        </FlexRow>
      </FlexContainer>
    </div>
  );
};

Services.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  index: PropTypes.number,
};
Page.propTypes = {
  passedRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};
export default Page;
