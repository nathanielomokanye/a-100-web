import React from 'react';
import { Accordion } from 'flowbite-react';

export default function FAQ () {
  const Faqs = [
    {
      title: 'What types of goods and equipment can A100 Transporter handle?',
      answer:
        "A100 Transporter is equipped to handle a wide variety of goods and equipment, ranging from small parcels to large machinery. Our experienced team and well-maintained fleet ensure that your items are transported safely and securely. If you have specific requirements or concerns, please don't hesitate to contact us to discuss how we can meet your needs."
    },
    {
      title: 'How do I get a quote for transportation and installation services?',
      answer:
        'To receive a customized quote for our transportation and installation services, please contact us via phone at (123) 456-7890 or email us at info@a100transporter.com. Provide as much detail as possible about your requirements, including the type and size of goods or equipment, pickup and delivery locations, and any special handling or installation needs. Our team will assess your request and provide you with a tailored quote based on your specifications.'
    },
    {
      title: 'What measures does A100 Transporter take to ensure the safety and security of my goods during transportation and installation?',
      answer:
        'At A100 Transporter, safety and security are our top priorities. We employ stringent safety protocols, including thorough inspections of our vehicles, proper loading and unloading procedures, and careful handling of goods and equipment during transportation and installation. Our experienced drivers and technicians are trained to follow best practices, and we maintain open communication with our clients to address any concerns promptly.'
    }
  ];

  return (
    <div id='faq' className='w-full py-32 px-6 md:px-24 bg-[#F8F9FA]'>
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
