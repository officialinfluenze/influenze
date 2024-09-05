import { useEffect, useRef, useState } from 'react';
import {
  ImageCarouselMainContainer,
  ImageCarouselSubContainer,
  StyledCarouselImage,
} from './index.styles';
interface IImageCarouselProps {
  images: string[];
}

const ImageCarousel = (props: IImageCarouselProps) => {
  const { images } = props;
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = (e: React.WheelEvent<HTMLDivElement>) => {
    if (carouselRef.current) {
      e.stopPropagation();
      carouselRef.current.scrollLeft += e.deltaY;
      if (
        carouselRef.current.scrollLeft + carouselRef.current.clientWidth >=
        carouselRef.current.scrollWidth
      ) {
        setIsScrolling(false);
      } else {
        setIsScrolling(true);
      }
    }
  };

  useEffect(() => {
    const handleWheelEvent = (e: WheelEvent) => {
      // if (isScrolling) {
      //   e.preventDefault();
      // }
    };
    document.addEventListener('wheel', handleWheelEvent, { passive: false });

    return () => {
      document.removeEventListener('wheel', handleWheelEvent);
    };
  }, [isScrolling]);

  return (
    <ImageCarouselMainContainer>
      <ImageCarouselSubContainer
        ref={carouselRef}
        onWheel={handleScroll}
        style={{}}
      >
        {images.map((image, index) => (
          <StyledCarouselImage key={index} src={image} alt={`Image ${index}`} />
        ))}
      </ImageCarouselSubContainer>
    </ImageCarouselMainContainer>
  );
};

export default ImageCarousel;
