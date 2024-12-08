import React, { useContext } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slick.css'
import { Box, styled } from '@mui/material';
import { ImageContext } from '../../../context/WIndowContext';

const ImageBox = styled(Box)({
  display: 'flex!important',
  width: '100%',
  justifyContent: 'center',
  cursor: 'pointer',
})

const PhotoView: React.FC<{ list: string[] }> = (detail: { list: string[] }) => {
  const { imageHeight } = useContext(ImageContext);

  const ImageTag = styled('img')({
    height : imageHeight - 23
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    style: {
      height: imageHeight - 23,
      width: '80%',
      margin: '0 auto',
    }
  };

  return (
    <Slider {...settings}>
      {detail.list.map((i, index) =>
        <ImageBox key={index}>
          <ImageTag
            src={`/static/images/projects/${i}`}
            onClick={() => window.open(`/static/images/projects/${i}`, '_blank')}
          />
        </ImageBox>
      )}
    </Slider>
  );
}

export default PhotoView;