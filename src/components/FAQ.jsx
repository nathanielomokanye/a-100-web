import React from 'react';
import { Accordion } from 'flowbite-react';

export default function FAQ () {
  const Faqs = [
    {
      title: 'How long does it take to schedule a pickup?',
      answer:
        "It depends on what county you live in, but it's between a 30 minute to 2 hour trip."
    },
    {
      title: 'How long does it take to schedule a pickup?',
      answer:
        "It depends on what county you live in, but it's between a 30 minute to 2 hour trip."
    },
    {
      title: 'How long does it take to schedule a pickup?',
      answer:
        "It depends on what county you live in, but it's between a 30 minute to 2 hour trip."
    }
  ];

  return (
    <div className='w-full py-32 px-6 md:px-24 bg-[#F8F9FA]'>
      <p className='font-bold text-2xl text-center mb-20'>FAQ</p>
      <Accordion alwaysOpen className='rounded-none hover:rounded-none'>
        {Faqs.map((faq, index) => {
          return (
            <Accordion.Panel key={index}>
              <Accordion.Title>{faq.title}</Accordion.Title>
              <Accordion.Content>
                <p>{faq.answer}</p>
              </Accordion.Content>
            </Accordion.Panel>
          );
        })}
      </Accordion>
    </div>
  );
}
