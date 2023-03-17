import React from "react";
import { Accordion } from "flowbite-react";
import { AccordionPanel } from "flowbite-react/lib/esm/components/Accordion/AccordionPanel";
import { AccordionTitle } from "flowbite-react/lib/esm/components/Accordion/AccordionTitle";
import { AccordionContent } from "flowbite-react/lib/esm/components/Accordion/AccordionContent";

export default function FAQ() {
  const Faqs = [
    {
      title: "Will i ever get bitches",
      answer: `No nigga, you can’t get any bitches cuz you’re a bitch yourself,
            negative and nagetive don’t attract. Think nigga, thnk`,
    },
    {
      title: "Will i ever get bitches",
      answer: `No nigga, you can’t get any bitches cuz you’re a bitch yourself,
              negative and nagetive don’t attract. Think nigga, thnk`,
    },
    {
      title: "Will i ever get bitches",
      answer: `No nigga, you can’t get any bitches cuz you’re a bitch yourself,
              negative and nagetive don’t attract. Think nigga, thnk`,
    },
  ];
  return (
    <div className='w-full py-32 px-6 bg-[#F8F9FA]'>
      <p className='font-bold text-2xl text-center mb-20'>FAQ</p>
      <Accordion alwaysOpen={true} className='rounded-none hover:rounded-none'>
        {Faqs.map((faq) => {
          return (
            <AccordionPanel>
              <AccordionTitle>{faq.title}</AccordionTitle>
              <AccordionContent>
                <p>{faq.answer}</p>
              </AccordionContent>
            </AccordionPanel>
          );
        })}
      </Accordion>
    </div>
  );
}
