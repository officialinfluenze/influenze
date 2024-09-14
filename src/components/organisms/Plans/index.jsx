import { useRef, useEffect } from 'react';
import { Icons } from '@influenze/ui-lib';
import { Heading1, Heading2, FlexContainer } from './index.styles';
import TierPlanCard from 'src/components/molecules/TierPlanCard';
const CheckCircleOutlineIcon = Icons.CheckCircleOutlineIcon;

const Tier1 = [
  {
    icon: <CheckCircleOutlineIcon sx={{ fontSize: '20px' }} />,
    description: 'Single platform',
  },
  {
    icon: <CheckCircleOutlineIcon sx={{ fontSize: '20px' }} />,
    description: 'AI generated & static content',
  },
  {
    icon: <CheckCircleOutlineIcon sx={{ fontSize: '20px' }} />,
    description: 'Basic analytics',
  },
  {
    icon: <CheckCircleOutlineIcon sx={{ fontSize: '20px' }} />,
    description: 'Email support for inquiries',
  },
  {
    icon: <CheckCircleOutlineIcon sx={{ fontSize: '20px' }} />,
    description: 'Limited Access',
  },
];

const Tier2 = [
  {
    icon: <CheckCircleOutlineIcon sx={{ fontSize: '20px' }} />,
    description: 'Multi-platform ',
  },
  {
    icon: <CheckCircleOutlineIcon sx={{ fontSize: '20px' }} />,
    description: 'Organic content production',
  },
  {
    icon: <CheckCircleOutlineIcon sx={{ fontSize: '20px' }} />,
    description: 'Advanced analytics',
  },
  {
    icon: <CheckCircleOutlineIcon sx={{ fontSize: '20px' }} />,
    description: 'Search engine optimization',
  },

  {
    icon: <CheckCircleOutlineIcon sx={{ fontSize: '20px' }} />,
    description: 'Pay per click',
  },
  {
    icon: <CheckCircleOutlineIcon sx={{ fontSize: '20px' }} />,
    description: 'Email marketing',
  },
];

const Tier3 = [
  {
    icon: <CheckCircleOutlineIcon sx={{ fontSize: '20px' }} />,
    description: 'Everyting in Growth plan',
  },
  {
    icon: <CheckCircleOutlineIcon sx={{ fontSize: '20px' }} />,
    description: 'Adverts on social media',
  },
  {
    icon: <CheckCircleOutlineIcon sx={{ fontSize: '20px' }} />,
    description: 'Lead generation',
  },
  {
    icon: <CheckCircleOutlineIcon sx={{ fontSize: '20px' }} />,
    description: 'Influencer marketing',
  },
  {
    icon: <CheckCircleOutlineIcon sx={{ fontSize: '20px' }} />,
    description: 'Community management',
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
      <Heading1 variant="h2">Affordable Plans:</Heading1>
      <Heading2 variant="h2">
        Choose the perfect plan tailored for your business needs
      </Heading2>
      <div
        style={{
          backgroundImage: `radial-gradient(at 61% 26%, hsla(168,0%,0%,1) 0px, transparent 50%),
radial-gradient(at 81% 43%, hsla(240,79%,28%,0.76) 0px, transparent 50%),
radial-gradient(at 0% 15%, hsla(308,0%,0%,0.73) 0px, transparent 50%),
radial-gradient(at 46% 59%, hsla(344,0%,0%,0.75) 0px, transparent 50%),
radial-gradient(at 58% 67%, hsla(240,75%,18%,0.82) 0px, transparent 50%),
radial-gradient(at 27% 40%, hsla(258,23%,34%,1) 0px, transparent 50%)`,
        }}
      >
        <FlexContainer ref={tierCardRef}>
          <TierPlanCard
            planTitle="Starter"
            price="₹9,999"
            monthlyCost="/month"
            description="Ideal for personal use or small businesses"
            benefits={Tier1}
            buttonText="Start Now"
            buttonVariant="contained"
          />
          <TierPlanCard
            planTitle="Growth"
            price="₹39,999"
            monthlyCost="/month"
            description="Ideal for small teams and businesses"
            benefits={Tier2}
            buttonText="Get Started"
            buttonVariant="contained"
          />
          <TierPlanCard
            planTitle="Expert"
            price="₹69,999"
            monthlyCost="/month"
            description="Ideal for large businesses or organizations"
            benefits={Tier3}
            buttonText="Get Started"
            buttonVariant="contained"
          />
        </FlexContainer>
      </div>
    </>
  );
};

export default Plans;
