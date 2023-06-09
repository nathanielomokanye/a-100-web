import React from 'react';
import { Navbar, Button } from 'flowbite-react';

export default function NavBar () {
  return (
    <Navbar fluid rounded className='z-20 md:px-16 fixed w-full py-4'>
      <Navbar.Brand href='#home'>
        <img
          src='assets/logo.svg'
          className='mr-3 h-6 sm:h-9'
          alt='A100 Logo'
        />
      </Navbar.Brand>
      <div className='flex md:order-2 gap-2'>
        <Button className='bg-black rounded-none text-white px-6' color='black'>
          Let's Talk
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href='#home' active>
          Home
        </Navbar.Link>
        <Navbar.Link href='#about'>About</Navbar.Link>
        <Navbar.Link href='#services'>Services</Navbar.Link>
        <Navbar.Link href='#testimonials'>Reviews</Navbar.Link>
        <Navbar.Link href='#contact'>Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
