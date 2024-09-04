import React from 'react';

const Footer = () => {
  return (
    <div  data-cursor="-inverse" className="w-full z-[9999] border-t-2 bg-black border-[#ffffff53] py-10 px-10">
      {/* Branding */}
      <div className="w-full flex items-center justify-center h-32">
        <p className="text-5xl">idm-vton</p>
      </div>
      
      {/* Links Sections */}
      <div className="w-full flex flex-wrap justify-evenly mb-10">
        {/* Explore idm-vton */}
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
        
        {/* Interactive Element */}
        <div className="w-1/4 min-w-[150px] flex items-center justify-center mb-6">
          <div className="relative w-[27vh] h-[27vh] flex items-center justify-center">
            <div className="w-full h-full relative flex items-center justify-center rounded-full bg-gray-800">
              <div id="interactive-element" className="absolute w-20 h-20 rounded-full bg-[#e0eeee] hover:scale-150 mix-blend-difference z-[99]"></div>
              <p className="text-3xl z-[99] pointer-events-none">👀</p>
            </div>
            <div id="rotatetext" className="w-full h-full absolute text-center text-[#435d6c]">
              <p> - AI - Virtual Reality - Fashion Tech - Innovation - </p>
            </div>
          </div>
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
  )
}

export default Footer;
