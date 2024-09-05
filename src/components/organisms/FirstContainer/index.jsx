import { Text } from '@influenze/ui-lib';
import {
  MainContainer,
  SubContainer,
  SubTopContainer,
  ImageContainer,
  StyledMainImage,
  SubTopTextContainer,
  SubBottomContainer,
} from './index.styles';
import ImageCarousel from 'src/components/molecules/ImageCarousel';
import Image_1 from '../../../assets/images/1-png.png';
import Image_2 from '../../../assets/images/2-png.png';
import Image_3 from '../../../assets/images/3-png.png';
import Image_4 from '../../../assets/images/4-png.png';
import Image_5 from '../../../assets/images/5-png.png';
import Image_6 from '../../../assets/images/6-png.png';
import Astronaut from '../../../assets/images/astronaut.png';

const FirstContainer = () => {
  const mainImage = Astronaut;
  const imagesSrc = [
    Image_1,
    Image_2,
    Image_3,
    Image_4,
    Image_5,
    Image_6,
    Image_1,
    Image_2,
    Image_3,
    Image_4,
    Image_5,
    Image_6,
  ];

  const renderTopPart = () => {
    return (
      <SubTopContainer>
        <ImageContainer>
          <StyledMainImage src={mainImage} alt="Logo" />
        </ImageContainer>

        <SubTopTextContainer>
          <Text variant="h4" style={{ fontWeight: 550 }}>
            Maximize Your Social Media Impact
          </Text>
          <Text color={'textSecondary'} style={{ fontWeight: 550 }}>
            Elevate Social Media is your go-to agency for cutting-edge social
            media marketing solutions. We help businesses grow and thrive online
            with minimal effort. Elevate Social Media is your go-to agency for
            cutting-edge social media marketing solutions. We help businesses
            grow and thrive online with minimal effort.
          </Text>
        </SubTopTextContainer>
      </SubTopContainer>
    );
  };

  const renderBottomPart = () => {
    return (
      <SubBottomContainer>
        <Text
          variant={'h6'}
          color={'textSecondary'}
          style={{
            fontWeight: 550,
            alignSelf: 'center',
          }}
        >
          Join us and take your brand to new heights.
        </Text>
      </SubBottomContainer>
    );
  };
  return (
    <MainContainer>
      <SubContainer>
        {renderTopPart()}
        {renderBottomPart()}
      </SubContainer>

      <ImageCarousel images={imagesSrc} />
    </MainContainer>
  );
};

export default FirstContainer;
