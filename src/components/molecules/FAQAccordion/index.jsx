import {Accordion,AccordionDetails,AccordionSummary,Icons} from '@influenze/ui-lib';
import PropTypes from 'prop-types';
const ExpandMoreIcon = Icons.ExpandMoreIcon;


const FAQAccordionItem = ({ title, content }) => {
    return (
        <Accordion square='false' sx={{border:'1px solid lightgray',borderRadius:'10px',BorderAllRounded: "true", margin:'10px', '&:before': {
                display: 'none',
            }}}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} style={{fontWeight:'bold',fontFamily:'sans-serif'}}>
                {title}
            </AccordionSummary>
            <AccordionDetails style={{fontFamily:'sans-serif',color:'gray'}}>
                {content}
            </AccordionDetails>
        </Accordion>
    );
};

FAQAccordionItem.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.node.isRequired,
};

export default FAQAccordionItem;