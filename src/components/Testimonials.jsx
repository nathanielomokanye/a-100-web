import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

export default function Testimonials () {
  const testimonials = [
    {
      name: 'Akinloye Omokanye',
      title: 'CEO of Dynamic Dimensions',
      description:
        'Working with A100 Transporter has been a game changer for our business. Their professionalism, attention to detail, and commitment to timely deliveries have allowed us to focus on our core operations while knowing that our logistics needs are in good hands.',
      image:
        'https://i.postimg.cc/RFCkb0qt/Profile-avatar-placeholder-large.png'
    },
    {
      name: 'John Doe',
      title: 'Satisfied Customer',
      description:
        'I recently hired A100 Transporter to help me move some valuable and fragile items to my new home. From the very beginning, their team was incredibly professional, friendly, and attentive to my concerns. They took the time to carefully pack and secure my belongings, ensuring that everything arrived at my new place in perfect condition.',
      image:
        'https://i.postimg.cc/RFCkb0qt/Profile-avatar-placeholder-large.png'
    }
  ];
  return (
    <div id='#testimonials' className='flex flex-col py-32 px-6 md:px-24 items-center'>
      <p className='font-bold text-2xl mb-20'>TESTIMONIALS</p>
      <div className='w-full bg-[#0642DA] py-6 px-8 md:py-12 md:px-16 text-white'>
        <Slide arrows={false} infinite>
          {testimonials.map((testimony, index) => {
            return (
              <div key={index} className='flex flex-col justify-between gap-10'>
                <img
                  src='https://i.postimg.cc/G2rvr6Sk/image.png'
                  alt={testimony.name}
                  className='w-12'
                />
                <p>{testimony.description}</p>
                <div className='flex items-end justify-start gap-3'>
                  <img alt='Testimony' src={testimony.image} className='w-16' />
                  <div>
                    <h1>{testimony.name}</h1>
                    <p>{testimony.title}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Slide>
      </div>
    </div>
  );
}
