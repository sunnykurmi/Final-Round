import React, { useEffect, useRef, useState } from 'react'
import SecondPage from './SecondPage'
import FirstPage from './FirstPage'
import FifthPage from './FifthPage'
import FourthPage from './Frame'
import { RiFacebookBoxFill, RiInstagramFill, RiTwitterFill, RiYoutubeFill } from '@remixicon/react'
import { MenuBtn } from './MenuBtn'
import MenuBar from './MenuBar'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import MouseFollower from 'mouse-follower';
gsap.registerPlugin(ScrollTrigger);
MouseFollower.registerGSAP(gsap);

export default function Home() {

  const cursor = new MouseFollower();



  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuBarRef = useRef(null);

  useEffect(() => {
    const menuBar = menuBarRef.current;
    if (isMenuOpen) {
      gsap.to(menuBar, {
        top: '0',
        duration: 0.6,
        ease: 'power2.in',
      });
    } else {
      gsap.to(menuBar, {
        top: '100vh',
        duration: 0.6,
        ease: 'power2.in',
      });
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (

    <div data-cursor="-inverse" className='bg-black w-full '>
      <div className="  fixed top-20 left-20 text-white z-[9]">
        IDM VTON
      </div>
      <div  id='menubtn' className="fixed z-[99] ">
        <MenuBtn toggleMenu={toggleMenu} />
      </div>
      <div
        id='menubar'
        ref={menuBarRef}
        className={`fixed w-[100%] h-screen bg-white`} // Adjust the bg color if needed
      >
        <MenuBar />
      </div>
      <FirstPage/>
      <SecondPage/>
      <FourthPage/>
      <FifthPage/>
      <div className="w-full z-[9999] border-t-2 bg-black border-[#ffffff53] py-10 px-10">
      {/* Branding */}
      <div className="w-full flex items-center justify-center h-32">
        <p className="text-5xl">idm-vton</p>
      </div>
      
      {/* Links Sections */}
      <div className="w-full flex flex-wrap justify-evenly mb-10">
        {/* Explore idm-vton */}
        <div className=" h-[20vh] flex items-center justify-end   text-white text-4xl">
        IDM VTON
        </div>
        <div className="w-1/4 min-w-[150px] flex flex-col mb-6">
          <p className="text-lg text-[#ffffffdd]">EXPLORE IDM-VTON</p>
          <br />
          <a href="/about" className="font-light text-base text-[#ffffff53]" target="_blank" rel="noopener noreferrer">About Us</a>
          <a href="/services" className="font-light text-base text-[#ffffff53]" target="_blank" rel="noopener noreferrer">Services</a>
          <a href="/products" className="font-light text-base text-[#ffffff53]" target="_blank" rel="noopener noreferrer">Products</a>
          <a href="/virtual-try-ons" className="font-light text-base text-[#ffffff53]" target="_blank" rel="noopener noreferrer">Virtual Try-Ons</a>
          <a href="/blog" className="font-light text-base text-[#ffffff53]" target="_blank" rel="noopener noreferrer">Blog</a>
          <a href="/contact" className="font-light text-base text-[#ffffff53]" target="_blank" rel="noopener noreferrer">Contact Us</a>
        </div>
        
        {/* Online Services */}
        <div className="w-1/4 min-w-[150px] flex flex-col mb-6">
          <p className="text-lg text-[#ffffffdd]">ONLINE SERVICES</p>
          <br />
          <a href="/payment-methods" className="font-light text-base text-[#ffffff53]" target="_blank" rel="noopener noreferrer">Payment Methods</a>
          <a href="/shipping-options" className="font-light text-base text-[#ffffff53]" target="_blank" rel="noopener noreferrer">Options</a>
          <a href="/my-account" className="font-light text-base text-[#ffffff53]" target="_blank" rel="noopener noreferrer">My Account</a>
          <a href="/returns" className="font-light text-base text-[#ffffff53]" target="_blank" rel="noopener noreferrer">Returns</a>
          <a href="/faq" className="font-light text-base text-[#ffffff53]" target="_blank" rel="noopener noreferrer">FAQ</a>
        </div>
        
        {/* The House of idm-vton */}
        <div className="w-1/4 min-w-[150px] flex flex-col mb-6">
          <p className="text-lg text-[#ffffffdd]">THE HOUSE OF IDM-VTON</p>
          <br />
          <a href="/careers" className="font-light text-base text-[#ffffff53]" target="_blank" rel="noopener noreferrer">Careers</a>
          <a href="/legal" className="font-light text-base text-[#ffffff53]" target="_blank" rel="noopener noreferrer">Legal</a>
          <a href="/privacy" className="font-light text-base text-[#ffffff53]" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
          <a href="/accessibility" className="font-light text-base text-[#ffffff53]" target="_blank" rel="noopener noreferrer">Accessibility</a>
          <a href="/responsible-business" className="font-light text-base text-[#ffffff53]" target="_blank" rel="noopener noreferrer">Responsible Business Practices</a>
          <a href="/sustainability" className="font-light text-base text-[#ffffff53]" target="_blank" rel="noopener noreferrer">Sustainability</a>
          <a href="/supplier-transparency" className="font-light text-base text-[#ffffff53]" target="_blank" rel="noopener noreferrer">Supplier Transparency</a>
        </div>
        
     
      </div>
      
      {/* Social Media Links */}
      <div className="w-full flex items-center justify-center mb-10">
        <div className="flex gap-10 text-[#a3a3a38f]">
          <a href="https://facebook.com/idm-vton" className="hover:text-white" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href="https://twitter.com/idm-vton" className="hover:text-white" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
          <a href="https://instagram.com/idm-vton" className="hover:text-white" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="https://youtube.com/idm-vton" className="hover:text-white" target="_blank" rel="noopener noreferrer">
            YouTube
          </a>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="w-full h-32 border-t-2 border-[#3d3d3d74] flex items-center justify-center">
        <div className="flex gap-10 text-[#a3a3a38f]">
          <p>&copy; {new Date().getFullYear()} idm-vton. All rights reserved.</p>
        </div>
      </div>
    </div>
    </div>
  )
}
