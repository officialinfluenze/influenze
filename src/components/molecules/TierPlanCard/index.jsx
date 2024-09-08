import PropTypes from 'prop-types';
import { Text, CardContent } from '@influenze/ui-lib';
import {
  StyledCard,
  PlanTitleContainer,
  ImageContainer,
  PlansContainer,
  PlanDescription,
  SubFlexContainer,
  StyledHr,
  PlanTitle,
  StyledButton,
  CardActions
} from './index.styles';

const PlanBenefits = ({ icon, description }) => (
  <PlansContainer>
    <ImageContainer>{icon}</ImageContainer>
    <PlanDescription sx={{ color: 'white' }}>{description}</PlanDescription>
  </PlansContainer>
);

const TierPlanCard = ({
  planTitle,
  price,
  monthlyCost,
  description,
  benefits,
  buttonText,
  buttonVariant,
}) => (
  <StyledCard>
    <CardContent>
      <PlanTitleContainer>
        <PlanTitle variant="body1" sx={{ color: 'white' }}>
          {planTitle}
        </PlanTitle>
      </PlanTitleContainer>
      <SubFlexContainer>
        <Text variant="h4" sx={{ fontWeight: 'bold', color: 'white' }}>
          {price}
        </Text>
        <span style={{ alignSelf: 'center', color: 'white' }}>
          {monthlyCost}
        </span>
      </SubFlexContainer>
      <Text style={{ color: 'white' }}>{description}</Text>
      <StyledHr />
      <div>
        {benefits.map((benefit, index) => (
          <PlanBenefits key={index} {...benefit} />
        ))}
      </div>
    </CardContent>
    <CardActions>
      <StyledButton variant={buttonVariant}>{buttonText}</StyledButton>
    </CardActions>
  </StyledCard>
);

TierPlanCard.propTypes = {
  planTitle: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  monthlyCost: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  benefits: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.node.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonVariant: PropTypes.string.isRequired,
};

PlanBenefits.propTypes = {
  icon: PropTypes.node.isRequired,
  description: PropTypes.string.isRequired,
};

export default TierPlanCard;
