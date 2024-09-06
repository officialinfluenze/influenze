import { Text,CardContent,Avatar,Icons } from '@influenze/ui-lib';
import { DesignationText, NameText, StyledCard, SubContainer, TestimonialContainer } from './index.styles';
const {TwitterIcon} = Icons;


const TestimonialCard = ({ name, title, message, avatar }) => (
    <StyledCard>
            <TestimonialContainer>
                <Avatar alt={name} src={avatar} sx={{ width: 36, height: 36 }} />
                <SubContainer>
                    <NameText variant='body1' >{name}</NameText>
                    <DesignationText variant='body2'>{title}</DesignationText>
                </SubContainer>
                <TwitterIcon />
            </TestimonialContainer>
            <CardContent sx={{ padding: '0px 16px 16px 16px' }}>
                <Text variant='body1'>{message}</Text>
            </CardContent>
    </StyledCard>
);

export default TestimonialCard;