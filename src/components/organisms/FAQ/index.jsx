import FAQAccordionItem from 'src/components/molecules/FAQAccordion';
import { AccordianContainer, Heading1, Heading2 } from './index.styles';

const FAQ = () => {
  return (
    <AccordianContainer>
      <Heading1 variant="body1">FAQ</Heading1>
      <Heading2 variant="h5">Commonly asked questions</Heading2>
      <FAQAccordionItem
        title="What services do you offer?"
        content={
          <>
            <p>1. <span style={{ fontWeight: 'bold', textDecoration: 'underline' }}> Digital Strategies</span> : Unique and strategic plans to drive digital growth effectively.</p>
            <p>2. <span style={{ fontWeight: 'bold', textDecoration: 'underline' }}> Content Creation</span> : Craft impactful, engaging, and audience-focused digital content.</p>
            <p>3. <span style={{ fontWeight: 'bold', textDecoration: 'underline' }}> Web Development</span> : Create responsive, dynamic, and engaging websites for all devices.</p>
            <p>4. <span style={{ fontWeight: 'bold', textDecoration: 'underline' }}> Analytics & SEO</span> : Boost online visibility with expert SEO and data-driven insights.</p>
            <p>5. <span style={{ fontWeight: 'bold', textDecoration: 'underline' }}> Branding and Marketing</span> : Build, enhance, and promote a unique brand identity for your business.</p>
            <p>6. <span style={{ fontWeight: 'bold', textDecoration: 'underline' }}> Pay-Per-Click (PPC)</span> : Drive quality traffic with targeted ads on major platforms for maximizing reach.</p>
          </>
        }
        
      />
      <FAQAccordionItem
        title="How do I get started?"
        content="Simply contact us through our website or give us a call. We'll set up a consultation to understand your needs and tailor a strategy for you."
      />
      <FAQAccordionItem
        title="What makes your agency different?"
        content="Our personalized approach and dedicated team ensure that your business gets the attention it deserves. We focus on results and customer satisfaction."
      />
      <FAQAccordionItem
        title="How much do your services cost?"
        content="Our pricing is tailored to each client's needs and budget. Contact us for a free consultation and quote."
      />
      <FAQAccordionItem
        title="Do you offer content creation?"
        content="Absolutely! We have a talented team of content creators who can produce engaging and high-quality content for your social media platforms."
      />
      <FAQAccordionItem
        title="Can you manage our social media accounts?"
        content="Yes, we provide full social media management services, ensuring your accounts are active, engaging, and aligned with your brand."
      />
    </AccordianContainer>
  );
};
export default FAQ;
