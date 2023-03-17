import React from 'react';

export default function Testimonials () {
  const testimonials = [
    {
      name: 'Akinloye Omokanye',
      title: 'CEO of Dynamic Dimensions',
      description: 'Partnering with A100 has been a fruitful and effective camaraderie. They take their work seriously and have the customer as their upmost concern.',
      image: ''
    }
  ];
  return (
    <div className='flex flex-col items-center py-10'>
      <p className='font-semibold text-lg'>TESTIMONIALS</p>
    </div>
  );
}
