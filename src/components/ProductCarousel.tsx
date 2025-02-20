import { useState, useRef } from 'react';
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import image from '/Image-1.png'
import image1 from '/Image-2.png'
import image2 from '/Image-3.png'
import image3 from '/Image-4.png'
import image4 from '/Image-5.png'

const ProductCarousel = () => {
  const images = [
    image,
    image1,
    image2,
    image3,
    image4,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef<SwiperRef | null>(null);

  return (
    <div className="w-full">
      <div className="text-end mt-2">
        <span className="text-2xl font-semibold">0{currentIndex + 1}</span> <span className="text-gray-400 font-semibold">/ 0{images.length}</span>
      </div>
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
        className="h-[600px] rounded-lg"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Product view ${index + 1}`}
              className="w-full h-full object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center space-x-2 mt-2">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className="w-16 h-16 cursor-pointer border border-gray-300 rounded"
            onClick={() => {
              setCurrentIndex(index);
              if (swiperRef.current) {
                swiperRef.current.swiper.slideTo(index);
              }
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
