import FAQAccordionItem from 'src/components/molecules/FAQAccordion';
import { AccordianContainer, Heading1, Heading2 } from './index.styles';


const FAQ = () =>{
    return(
        <>
            <Heading1 variant="h5">Common Questions</Heading1>
            <Heading2 variant="body1">Quick Questions</Heading2>
            <AccordianContainer>
                <FAQAccordionItem 
                    title="What services do you offer?" 
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget." 
                />
                <FAQAccordionItem 
                    title="How do I get started?" 
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget." 
                />
                <FAQAccordionItem 
                    title="What makes your agency different?" 
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget." 
                />
                <FAQAccordionItem 
                    title="How much do your services cost?" 
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget." 
                />
                <FAQAccordionItem 
                    title="Do you offer content creation?" 
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget." 
                />
                <FAQAccordionItem 
                    title="Can you manage our social media accounts?" 
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget." 
                />
            </AccordianContainer>            
        </>
    );
}
export default FAQ;