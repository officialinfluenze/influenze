import { useEffect } from 'react';
import { Text } from '@influenze/ui-lib';
import { motion, useAnimation } from 'framer-motion';
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
import headerimg from '../../../assets/images/headerimg.png';

const FirstContainer = () => {
  const mainImage = headerimg;
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

  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollOpacity = 1 - scrollY / 500;
      const scrollTranslateY = scrollY / 20;
      controls.start({
        opacity: Math.max(scrollOpacity, 0),
        y: scrollTranslateY,
        transition: { duration: 0.5, ease: 'easeOut' },
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);

  const renderTopPart = () => {
    return (
      <motion.div animate={controls}>
        <SubTopContainer>
          <ImageContainer
            as={motion.div}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            // whileHover={{ scale: 1.05 }}
          >
            <StyledMainImage src={mainImage} alt="Logo" />
          </ImageContainer>

          <SubTopTextContainer
            as={motion.div}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <Text variant="h4" style={{ fontWeight: 550, color: 'white' }}>
              Maximize Your Social Media Impact
            </Text>
            <Text
              color={'textSecondary'}
              style={{ fontWeight: 550, color: 'white' }}
            >
              Elevate Social Media is your go-to agency for cutting-edge social
              media marketing solutions. We help businesses grow and thrive
              online with minimal effort. Elevate Social Media is your go-to
              agency for cutting-edge social media marketing solutions. We help
              businesses grow and thrive online with minimal effort.
            </Text>
          </SubTopTextContainer>
        </SubTopContainer>
      </motion.div>
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
