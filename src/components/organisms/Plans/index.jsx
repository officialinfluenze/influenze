import { useRef, useEffect } from 'react';
import { Icons } from '@influenze/ui-lib';
import { Heading1, Heading2, FlexContainer } from './index.styles';
import TierPlanCard from 'src/components/molecules/TierPlanCard';
 const CheckCircleOutlineIcon = Icons.CheckCircleOutlineIcon;

const Tier1 = [
  { icon: <CheckCircleOutlineIcon sx={{ fontSize: '20px' }} />, description: '1 User' },
  {
    icon: <CheckCircleOutlineIcon sx={{ fontSize: '20px' }} />,
    description: 'Email Support',
  },
  { icon: <CheckCircleOutlineIcon sx={{ fontSize: '20px' }} />, description: '5 Projects' },
  {
    icon: <CheckCircleOutlineIcon sx={{ fontSize: '20px' }} />,
    description: 'Basic Analytics',
  },
  {
    icon: <CheckCircleOutlineIcon sx={{ fontSize: '20px' }} />,
    description: 'Limited Access',
  },
];

const Tier2 = [
  { icon: <CheckCircleOutlineIcon sx={{ fontSize: '20px' }} />, description: '5 Users' },
  {
    icon: <CheckCircleOutlineIcon sx={{ fontSize: '20px' }} />,
    description: 'Priority Support',
  },
  {
    icon: <CheckCircleOutlineIcon sx={{ fontSize: '20px' }} />,
    description: 'Unlimited Projects',
  },
  {
    icon: <CheckCircleOutlineIcon sx={{ fontSize: '20px' }} />,
    description: 'Advanced Analytics',
  },
  { icon: <CheckCircleOutlineIcon sx={{ fontSize: '20px' }} />, description: 'Full Access' },
  {
    icon: <CheckCircleOutlineIcon sx={{ fontSize: '20px' }} />,
    description: 'Custom Reports',
  },
];

const Plans = () => {
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
    <>
      <Heading1 variant="h5">Affordable Plans</Heading1>
      <Heading2 variant="body1">Choose the perfect plan for your business needs.</Heading2>
      <FlexContainer ref={tierCardRef} className="plans-container">
        <TierPlanCard
          planTitle="Basic Plan"
          price="₹4"
          monthlyCost="₹99/month"
          description="Ideal for personal use"
          benefits={Tier1}
          buttonText="Start Now"
          buttonVariant="contained"
        />
        <TierPlanCard
          planTitle="Pro Plan"
          price="₹12"
          monthlyCost="₹299/month"
          description="Perfect for teams"
          benefits={Tier2}
          buttonText="Get Started"
          buttonVariant="contained"
        />
        <TierPlanCard
          planTitle="Pro Plan"
          price="₹12"
          monthlyCost="₹299/month"
          description="Perfect for teams"
          benefits={Tier2}
          buttonText="Get Started"
          buttonVariant="contained"
        />
      </FlexContainer>
    </>
  );
};

export default Plans;