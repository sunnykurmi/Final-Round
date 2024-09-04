import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";

const MenuBar = () => {
  const linkWrapperRefs = useRef([]);

  useEffect(() => {
    linkWrapperRefs.current.forEach((wrapper) => {
      const topH1 = wrapper.querySelector('.top-h1');
      const bottomH1 = wrapper.querySelector('.bottom-h1');

      // Initialize SplitType
      const splitBottom = new SplitType(bottomH1, { types: "chars" });

      // Set initial states
      gsap.set(topH1, { y: 0 });
      gsap.set(bottomH1, { y: 20, opacity: 0 });

      // Define animations
      const animationIn = () => {
        gsap.to(topH1, {
          y: -100,
          duration: 0.8,
          stagger: 0.5,
          ease: 'expo'
        });
        gsap.to(bottomH1, {
          y: -100,
          opacity: 1,
          duration: 0.8,
          stagger: 0.5,
          ease: 'expo'
        });
      };

      const animationOut = () => {
        gsap.to(topH1, {
          y: 0,
          duration: 0.8,
          stagger: 0.5,
          ease: 'expo'
        });
        gsap.to(bottomH1, {
          y: 20,
          opacity: 0,
          duration: 0.8,
          stagger: 0.5,
          ease: 'expo'
        });
      };

      // Set up hover listeners
      wrapper.addEventListener('mouseenter', animationIn);
      wrapper.addEventListener('mouseleave', animationOut);

      // Cleanup on unmount
      return () => {
        wrapper.removeEventListener('mouseenter', animationIn);
        wrapper.removeEventListener('mouseleave', animationOut);
      };
    });
  }, []);

  return (
    <>
      <div  data-cursor="-inverse" className="menu-bar w-full h-[100vh] flex flex-col md:flex-row relative">
        <div className=" uppercase  menubar-links w-full md:w-1/2 h-full bg-zinc-900 text-white flex items-center justify-center flex-col px-8 pt-32 md:px-56 gap-0 lg:gap-5 lg:items-start">
          <div
            className="link-wrapper h-16 lg:h-24 overflow-hidden "
            ref={(el) => (linkWrapperRefs.current[0] = el)}
          >
            <h1 className="top-h1 humaneregular tracking-widest text-4xl md:text-8xl">Home</h1>
            <h1 className="bottom-h1 humaneregular tracking-widest text-4xl md:text-8xl text-[#5e5e5ed1]">
              {Array.from("Home").map((letter, index) => (
                <span key={index} style={{ display: 'inline-block' }}>{letter}</span>
              ))}
            </h1>
          </div>
          <div
            className="link-wrapper h-16 lg:h-24 overflow-hidden"
            ref={(el) => (linkWrapperRefs.current[1] = el)}
          >
            <h1 className="top-h1 humaneregular tracking-widest  text-4xl md:text-8xl">About</h1>
            <h1 className="bottom-h1 humaneregular tracking-widest text-4xl md:text-8xl  text-[#5e5e5ed1] ">
              {Array.from("About").map((letter, index) => (
                <span key={index} style={{ display: 'inline-block' }}>{letter}</span>
              ))}
            </h1>
          </div>
          <div
            className="link-wrapper h-16 lg:h-24 overflow-hidden"
            ref={(el) => (linkWrapperRefs.current[2] = el)}
          >
            <h1 className="top-h1 humaneregular tracking-widest text-4xl md:text-8xl">Contact</h1>
            <h1 className="bottom-h1 humaneregular tracking-widest text-4xl md:text-8xl text-[#5e5e5ed1]">
              {Array.from("Contact").map((letter, index) => (
                <span key={index} style={{ display: 'inline-block' }}>{letter}</span>
              ))}
            </h1>
          </div>
          <div>
            <p className="uppercase text-sm md:text-base">Re-imagine + Develop</p>
            <p className="uppercase text-sm md:text-base">idm - vton</p>
          </div>
        </div>
        <div className="bg-zinc-900 w-full md:w-1/2 h-full text-white flex items-center justify-center flex-col px-8 lg:items-start  md:px-56 gap-3">
          <h1 className="text-xl text-center md:text-start md:text-2xl">Revolutionize Your Fashion Experience with Virtual Try-Ons!</h1>
          <div className="icons-wrapper-menubar flex gap-3 md:gap-5">
            <div className="bg-zinc-800 p-3 md:p-5 rounded-full">
              <img src="https://zia.photography/images/socialX.svg" alt="" />
            </div>
            <div className="bg-zinc-800 p-3 md:p-5 rounded-full">
              <img src="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_327_12)'%3e%3cpath%20d='M25.3333%202C26.571%202%2027.758%202.49167%2028.6332%203.36684C29.5083%204.242%2030%205.42899%2030%206.66667V25.3333C30%2026.571%2029.5083%2027.758%2028.6332%2028.6332C27.758%2029.5083%2026.571%2030%2025.3333%2030H6.66667C5.42899%2030%204.242%2029.5083%203.36684%2028.6332C2.49167%2027.758%202%2026.571%202%2025.3333V6.66667C2%205.42899%202.49167%204.242%203.36684%203.36684C4.242%202.49167%205.42899%202%206.66667%202H25.3333ZM25.3333%205.11111H6.66667C6.25411%205.11111%205.85845%205.275%205.56672%205.56672C5.275%205.85845%205.11111%206.25411%205.11111%206.66667V25.3333C5.11111%2025.7459%205.275%2026.1416%205.56672%2026.4333C5.85845%2026.725%206.25411%2026.8889%206.66667%2026.8889H25.3333C25.7459%2026.8889%2026.1416%2026.725%2026.4333%2026.4333C26.725%2026.1416%2026.8889%2025.7459%2026.8889%2025.3333V6.66667C26.8889%206.25411%2026.725%205.85845%2026.4333%205.56672C26.1416%205.275%2025.7459%205.11111%2025.3333%205.11111ZM9.77778%2012.8889C10.1588%2012.8889%2010.5265%2013.0288%2010.8112%2013.282C11.096%2013.5352%2011.2779%2013.8841%2011.3224%2014.2624L11.3333%2014.4444V22.2222C11.3329%2022.6187%2011.1811%2023%2010.9089%2023.2883C10.6367%2023.5767%2010.2647%2023.7501%209.86894%2023.7734C9.47314%2023.7966%209.08341%2023.6678%208.77937%2023.4134C8.47533%2023.1589%208.27994%2022.7979%208.23311%2022.4042L8.22222%2022.2222V14.4444C8.22222%2014.0319%208.38611%2013.6362%208.67783%2013.3445C8.96956%2013.0528%209.36522%2012.8889%209.77778%2012.8889ZM14.4444%2011.3333C14.8087%2011.3333%2015.1615%2011.4611%2015.4412%2011.6945C15.721%2011.9279%2015.9099%2012.252%2015.9751%2012.6104C16.2884%2012.4295%2016.612%2012.2669%2016.9442%2012.1236C17.9818%2011.6802%2019.5358%2011.436%2020.9389%2011.8762C21.6747%2012.1096%2022.4136%2012.5451%2022.9611%2013.2871C23.4511%2013.9482%2023.7156%2014.7524%2023.7684%2015.6562L23.7778%2016V22.2222C23.7773%2022.6187%2023.6255%2023%2023.3533%2023.2883C23.0812%2023.5767%2022.7092%2023.7501%2022.3134%2023.7734C21.9176%2023.7966%2021.5279%2023.6678%2021.2238%2023.4134C20.9198%2023.1589%2020.7244%2022.7979%2020.6776%2022.4042L20.6667%2022.2222V16C20.6667%2015.4867%2020.5422%2015.2471%2020.4613%2015.1367C20.3451%2014.9924%2020.1851%2014.8898%2020.0056%2014.8442C19.4642%2014.6731%2018.6849%2014.7633%2018.1669%2014.9842C17.3891%2015.3171%2016.6767%2015.8398%2016.1913%2016.3236L16%2016.5289V22.2222C15.9996%2022.6187%2015.8477%2023%2015.5756%2023.2883C15.3034%2023.5767%2014.9314%2023.7501%2014.5356%2023.7734C14.1398%2023.7966%2013.7501%2023.6678%2013.446%2023.4134C13.142%2023.1589%2012.9466%2022.7979%2012.8998%2022.4042L12.8889%2022.2222V12.8889C12.8889%2012.4763%2013.0528%2012.0807%2013.3445%2011.7889C13.6362%2011.4972%2014.0319%2011.3333%2014.4444%2011.3333ZM9.77778%208.22222C10.1903%208.22222%2010.586%208.38611%2010.8777%208.67783C11.1694%208.96956%2011.3333%209.36522%2011.3333%209.77778C11.3333%2010.1903%2011.1694%2010.586%2010.8777%2010.8777C10.586%2011.1694%2010.1903%2011.3333%209.77778%2011.3333C9.36522%2011.3333%208.96956%2011.1694%208.67783%2010.8777C8.38611%2010.586%208.22222%2010.1903%208.22222%209.77778C8.22222%209.36522%208.38611%208.96956%208.67783%208.67783C8.96956%208.38611%209.36522%208.22222%209.77778%208.22222Z'%20fill='%23FBFAF3'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_327_12'%3e%3crect%20width='32'%20height='32'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e" alt="" />
            </div>
            <div className="bg-zinc-800 p-3 md:p-5 rounded-full">
              <img src="https://zia.photography/images/socialIg.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="  uppercase   infinite-scroll-text absolute w-full h-[10vh] md:h-[15vh] bg-[#28343b4f] overflow-hidden flex items-center top-[89%] left-3/4 -translate-x-1/2 -translate-y-1/2 -rotate-12 md:flex hidden">
          <h1 className="infinite-scroll-text-inner text-xl md:text-6xl ml-5 text-[#435d6c]">
            FASHION
          </h1>
          <h1 className="infinite-scroll-text-inner text-xl md:text-6xl ml-5 text-[#435d6c]">
            DESIGN
          </h1>
          <h1 className="infinite-scroll-text-inner text-xl md:text-6xl ml-5 text-[#435d6c]">
            COLOR
          </h1>
          <h1 className="infinite-scroll-text-inner text-xl md:text-6xl ml-5 text-[#435d6c]">
            TExture
          </h1>
          <h1 className="infinite-scroll-text-inner text-xl md:text-6xl ml-5 text-[#435d6c]">
            fashion
          </h1>
          <h1 className="infinite-scroll-text-inner text-xl md:text-6xl ml-5 text-[#435d6c]">
            design
          </h1>
          <h1 className="infinite-scroll-text-inner text-xl md:text-6xl ml-5 text-[#435d6c]">
            color
          </h1>
          <h1 className="infinite-scroll-text-inner text-xl md:text-6xl ml-5 text-[#435d6c]">
            texture
          </h1>
          <h1 className="infinite-scroll-text-inner text-xl md:text-6xl ml-5 text-[#435d6c]">
            fashion
          </h1>
          <h1 className="infinite-scroll-text-inner text-xl md:text-6xl ml-5 text-[#435d6c]">
            design
          </h1>

        </div>
      </div>
    </>
  );
};

export default MenuBar;
