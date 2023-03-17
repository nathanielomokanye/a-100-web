import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Akinloye Omokanye",
      title: "CEO of Dynamic Dimensions",
      description:
        "Partnering with A100 has been a fruitful and effective camaraderie. They take their work seriously and have the customer as their upmost concern.",
      image:
        "https://i.postimg.cc/RFCkb0qt/Profile-avatar-placeholder-large.png",
    },
  ];
  return (
    <div className='flex flex-col py-32 px-6 items-center'>
      <p className='font-bold text-2xl mb-20'>TESTIMONIALS</p>
      <div className='w-full bg-[#0642DA] py-6 px-8 text-white'>
        <Slide arrows={false} infinite={true}>
          {testimonials.map((testimony) => {
            return (
              <div className='flex flex-col justify-between gap-10'>
                <img
                  src='https://i.postimg.cc/G2rvr6Sk/image.png'
                  alt={testimony.name}
                  className='w-12'
                />
                <p>{testimony.description}</p>
                <div className='flex items-end justify-start gap-3'>
                  <img src={testimony.image} alt='image' className='w-16' />
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
