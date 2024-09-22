import pic from '../../../assets/images/final_logo.png';
import TestimonialCard from 'src/components/molecules/TestimonialCards';
import { Heading, MainContainer, SubContainer } from './index.styles';

const Testimonials = () => {
  const testimonialsData = [
    {
      name: 'Michael Smith',
      title: 'Startup Founder',
      message:
        'Working with this SMMA has transformed our outreach and engagement. Their strategies are top-notch and results-driven.',
      avatar: pic,
    },
    {
      name: 'Jane Doe',
      title: 'Tech Entrepreneur',
      message:
        'The results we’ve seen since hiring them have been phenomenal, highly recommend!',
      avatar: pic,
    },
    {
      name: 'John Doe',
      title: 'Marketing Head',
      message:
        'Their team is highly professional, and the strategies implemented have been effective.',
      avatar: pic,
    },
    {
      name: 'Sarah Lee',
      title: 'Business Owner',
      message:
        'They helped our brand grow significantly online. Great team to work with.',
      avatar: pic,
    },
  ];

  return (
    <>
      <MainContainer>
        <Heading variant="h5">Our Happy Clients</Heading>
        <SubContainer>
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              title={testimonial.title}
              message={testimonial.message}
              avatar={testimonial.avatar}
            />
          ))}
        </SubContainer>
      </MainContainer>
    </>
  );
};

export default Testimonials;
