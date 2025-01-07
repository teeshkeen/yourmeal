import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/css/free-mode';

const Categories = ({ products, selectedSlide, setSelectedSlide, handleSelectSlide }) => {
  return (
    <div className="categories">
      <div className="categories__inner">
        <div className="categories__slider">
          <Swiper
            spaceBetween={8}
            slidesPerView={3}
            slidesOffsetBefore={10}
            onSlideChange={(swiper) => {
              const newSlide = products[swiper.activeIndex];
              setSelectedSlide(newSlide);
            }}
            breakpoints={{
              360: {
                spaceBetween: 8,
                slidesPerView: 3,
              },
              570: {
                slidesOffsetBefore: 30,
                slidesPerView: 5,
                spaceBetween: 10,
              },
              600: {
                slidesPerView: 5,
              },
              768: {
                slidesOffsetBefore: 54,
                spaceBetween: 12,
                slidesPerView: 7,
              },
              1024: {
                slidesOffsetBefore: 32,
                spaceBetween: 24,
                slidesPerView: 7
              },
              1280: {
                slidesPerView: 9,
                slidesOffsetBefore: 32,
                slidesOffsetAfter: 32,
                spaceBetween: 24
              },
              1440: {
                slidesPerView: 10,
                slidesOffsetBefore: 75,
                slidesOffsetAfter: 75,
                spaceBetween: 24
              }
            }}
          >
            {products.map((i) => (
              <SwiperSlide key={i.id}>
                <div onClick={() => handleSelectSlide(i)} className={`slider__item ${selectedSlide.id === i.id ? 'slider__item--choosed' : ''}`}>
                  <img className="slider__item-image" src={i.image} alt={i.name} />
                  <span className='slider__item-name'>{i.name}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Categories;