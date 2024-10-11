import React from 'react';
import { Carousel, Image} from 'react-bootstrap';

const Banner = () => {
    const listSlide = ["https://react-film-clone.vercel.app/img/banner_2.png","https://react-film-clone.vercel.app/img/banner_1.png"];
    return (
        <Carousel>
        {listSlide.map((item) => (
          <Carousel.Item interval={3000}>
            <Image src={item} />
          </Carousel.Item>
        ))}
      </Carousel>
    );
};
export default Banner;