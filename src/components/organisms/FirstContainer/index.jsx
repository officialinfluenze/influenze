import { useEffect } from 'react';
import { Text } from '@influenze/ui-lib';
import { motion, useAnimation } from 'framer-motion';
import PropTypes from 'prop-types';
import {
  MainContainer,
  SubContainer,
  SubTopContainer,
  ImageContainer,
  StyledMainImage,
  SubTopTextContainer,
} from './index.styles';
import headerimg from '../../../assets/images/headerimg.png';

const FirstContainer = ({ passedRef }) => {
  const mainImage = headerimg;

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
            whileHover={{ scale: 1.05 }}
          >
            <StyledMainImage src={mainImage} alt="Logo" loading="lazy" />
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
              At Influenze, we specialize in providing innovative social media
              marketing solutions that drive growth and success for your
              business. Our tailored strategies, combined with data-driven
              insights, ensure that your brand stands out in a competitive
              digital landscape.
              <br /> <br />
              Whether it&apos;s creating engaging content, managing your online
              community, or executing targeted campaigns, we handle everything
              so you can focus on what you do best. Partner with us and watch
              your social media presence transform into a powerful engine for
              growth with minimal effort on your part.
            </Text>
          </SubTopTextContainer>
        </SubTopContainer>
      </motion.div>
    );
  };

  return (
    <MainContainer ref={passedRef}>
      <SubContainer>{renderTopPart()}</SubContainer>
    </MainContainer>
  );
};

export default FirstContainer;
FirstContainer.propTypes = {
  passedRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};
