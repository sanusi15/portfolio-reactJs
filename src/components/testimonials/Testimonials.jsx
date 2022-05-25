import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar4.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar1.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Testimonials = () => {
  const data = [
    {
      avatar: AVTR1,
      name: 'Diana Sari',
      review: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum deleniti quis repudiandae voluptatem repellat porro repellendus molestiae at optio velit officia, esse, a delectus ex, autem itaque earum aperiam veniam.'
    },
    {
      avatar: AVTR2,
      name: 'Jhon Lenon',
      review: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum deleniti quis repudiandae voluptatem repellat porro repellendus molestiae at optio velit officia, esse, a delectus ex, autem itaque earum aperiam veniam.'
    },
    {
      avatar: AVTR3,
      name: 'Andra The Backbone',
      review: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum deleniti quis repudiandae voluptatem repellat porro repellendus molestiae at optio velit officia, esse, a delectus ex, autem itaque earum aperiam veniam.'
    },
    {
      avatar: AVTR4,
      name: 'Lidya Banet',
      review: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum deleniti quis repudiandae voluptatem repellat porro repellendus molestiae at optio velit officia, esse, a delectus ex, autem itaque earum aperiam veniam.'
    }
  ]
  return (
    <section id='testimonials'>
      <h5>Review from client</h5>
      <h2>Testimonals</h2>

      <Swiper className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          data.map((val, index) => (
            <SwiperSlide className="testimonial" key={index}>
              <div className="client__avatar">
                <img src={val.avatar} alt="" />           
              </div>  
              <h5 className="client__name">{val.name}</h5>
              <small className='client__review'>{ val.review }</small>
            </SwiperSlide>
          ) )
        }
      </Swiper>
    </section>
  )
}

export default Testimonials