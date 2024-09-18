import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Icons,
} from '@influenze/ui-lib';
import PropTypes from 'prop-types';
const ExpandMoreIcon = Icons.ExpandMoreIcon;

const FAQAccordionItem = ({ title, content }) => {
  return (
    <Accordion
      square
      sx={{
        borderRadius: '10px',
        BorderAllRounded: 'true',
        margin: '4px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        width: '70%',
        color: 'white',
        '&:before': {
          display: 'none',
        },
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
        style={{ fontWeight: 'bold', fontFamily: 'sans-serif' }}
      >
        {title}
      </AccordionSummary>
      <AccordionDetails style={{ fontFamily: 'sans-serif', color: 'white' }}>
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
