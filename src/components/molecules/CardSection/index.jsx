import {
  CardContainer,
  Card,
  Category,
  Percentage,
  Description,
  Percentageof,
  Heading,
} from './index.styles';

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

const CardSection = () => {
  return (
    <div style={{ overflow: 'hidden' }}>
      <Heading color="white">Why choose Influenze</Heading>
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
  );
};

export default CardSection;
