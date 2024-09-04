import React, { useState, useEffect, useRef } from 'react';
import MenuBar from './components/MenuBar';
import { MenuBtn } from './components/MenuBtn';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import gsap from 'gsap';
import "./index.css";
import Footer from './components/Footer';

const App = () => {
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
    <div>
      <div id='menubtn' className="fixed z-[99]">
        <MenuBtn toggleMenu={toggleMenu} />
      </div>
      <div
        id='menubar'
        ref={menuBarRef}
        className={`fixed w-[100%] h-screen bg-white`} // Adjust the bg color if needed
      >
        <MenuBar />
      </div>
      <Page1 />
      <Page2 />
      <Footer />
    </div>
  );
}

export default App;
