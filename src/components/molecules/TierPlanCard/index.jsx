import {Text,CardActions,CardContent} from '@influenze/ui-lib'
import {StyledCard, PlanTitleContainer,ImageContainer, PlansContainer, PlanDescription,SubFlexContainer, StyledHr, PlanTitle, StyledButton} from './index.styles';

const PlanBenefits = ({ icon, description }) => (
    <PlansContainer>
        <ImageContainer>{icon}</ImageContainer>
        <PlanDescription>{description}</PlanDescription>
    </PlansContainer>
);

const TierPlanCard = ({ planTitle, price, monthlyCost, description, benefits, buttonText, buttonVariant }) => (
    <StyledCard>
        <CardContent>
            <PlanTitleContainer>
                <PlanTitle variant="body1">{planTitle}</PlanTitle>
            </PlanTitleContainer>
            <SubFlexContainer>
                <Text variant="h4" sx={{ fontWeight: 'bold' }}>{price}</Text>
                <span style={{ alignSelf: 'center', color: 'gray' }}>{monthlyCost}</span>
            </SubFlexContainer>
            <Text style={{ color: 'gray' }}>{description}</Text>
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

export default TierPlanCard;