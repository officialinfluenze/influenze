import {Accordion,AccordionDetails,AccordionSummary,Icons} from '@influenze/ui-lib';
const ExpandMoreIcon = Icons.ExpandMoreIcon;


const FAQAccordionItem = ({ title, content }) => {
    return (
        <Accordion sx={{border:'1px solid lightgray',borderRadius:'10px',BorderAllRounded: "true", margin:'10px'}}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} style={{fontWeight:'bold',fontFamily:'sans-serif'}}>
                {title}
            </AccordionSummary>
            <AccordionDetails style={{fontFamily:'sans-serif',color:'gray'}}>
                {content}
            </AccordionDetails>
        </Accordion>
    );
};

export default FAQAccordionItem;