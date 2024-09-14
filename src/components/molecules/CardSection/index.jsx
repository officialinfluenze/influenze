import {
  CardContainer,
  Card,
  Category,
  Percentage,
  Description,
  Percentageof,
  Heading,
  SubHeading,
} from './index.styles';
import PropTypes from 'prop-types';

const data = [
  {
    percentage: '85%',
    description:
      "Influencer marketing drives brand awareness and trust, with 85% of marketers stating it's effective for engaging with customers and increasing brand reach.",
    category: 'Influencer Marketing',
    percentageof: 'Boosts Engagement',
  },
  {
    percentage: '55%',
    description:
      'Businesses using inbound lead generation see a 55% increase in leads, turning website visitors into engaged prospects through valuable content and optimized marketing strategies.',
    category: 'Lead Generation',
    percentageof: 'Boosts Leads',
  },
  {
    percentage: '200%',
    description:
      'PPC delivers significant returns with businesses earning 200% of what is spent, making it a highly effective strategy for driving targeted traffic and conversions.',
    category: 'Pay-Per-Click',
    percentageof: 'Returns ',
  },
  {
    percentage: '4400% ',
    description:
      'Email marketing delivers one of the highest ROIs, generating $44 for every $1 spent, making it an essential strategy for driving customer engagement and sales.',
    category: 'Email Marketing',
    percentageof: 'ROI',
  },
  {
    percentage: '3X',
    description:
      'Organic content marketing generates 3x more leads than paid ads, providing sustained value by building trust and establishing brand authority over time.',
    category: 'Organic Content Production',
    percentageof: 'More Leads',
  },
  {
    percentage: '40%',
    description:
      'Investing in SEO results in a 40% increase in organic website traffic, helping brands be discovered by customers searching for relevant products and services.',
    category: 'Search engine optimization',
    percentageof: 'Increase in Traffic',
  },
  {
    percentage: ' 30%',
    description:
      'Brands using multi-platform strategies report 30% higher engagement rates, effectively reaching diverse audiences and increasing visibility across various digital platforms.',
    category: 'Multi-Platform Marketing',
    percentageof: 'Higher Engagement',
  },
  {
    percentage: '20%',
    description:
      ' A well-optimized website can increase conversion rates by 20%, enhancing the user experience and driving more sales and customer interactions.',
    category: 'Web Development',
    percentageof: ' Increase in Conversions',
  },
];

const CardSection = ({ passedRef }) => {
  return (
    <div
      ref={passedRef}
      style={{
        backgroundImage: `radial-gradient(at 29% 62%, hsla(239,58%,15%,1) 0px, transparent 50%),
radial-gradient(at 100% 0%, hsla(27,0%,0%,1) 0px, transparent 50%),
radial-gradient(at 53% 54%, hsla(189,0%,0%,1) 0px, transparent 50%),
radial-gradient(at 73% 54%, hsla(240,50%,25%,1) 0px, transparent 50%),
radial-gradient(at 74% 61%, hsla(239,34%,22%,1) 0px, transparent 50%),
radial-gradient(at 100% 100%, hsla(340,0%,0%,1) 0px, transparent 50%),
radial-gradient(at 0% 100%, hsla(0,0%,0%,1) 0px, transparent 50%),
radial-gradient(at 0% 50%, hsla(0,0%,0%,0.44) 0px, transparent 50%)`,
        paddingTop: '100px',
        paddingBottom: '100px',
      }}
    >
      <div style={{ overflow: 'hidden' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <Heading>Why choose us</Heading>
          <SubHeading>
            Our commitment to delivering exceptional results through a blend of
            industry expertise, personalized service, and innovative solutions.
          </SubHeading>
        </div>
        <CardContainer>
          {[...data, ...data, ...data, ...data, , ...data, , ...data].map(
            (item, index) => (
              <Card key={index}>
                <div
                  style={{
                    borderRadius: '16px',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    alignSelf: 'center',
                    opacity: '1',
                  }}
                >
                  <Category>{item.category}</Category>
                </div>
                <Percentage>{item.percentage}</Percentage>
                <Percentageof>{item.percentageof}</Percentageof>
                <Description>{item.description}</Description>
              </Card>
            ),
          )}
        </CardContainer>
      </div>
    </div>
  );
};

export default CardSection;

CardSection.propTypes = {
  passedRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};
