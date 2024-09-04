import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export default function FifthPage() {
  useEffect(() => {
    var tl8 = gsap.timeline({
      scrollTrigger: {
        trigger: "#page10",
        // markers: true,
        pin: true,
        start: "top top",
        end: "bottom -300%",
        scrub: 1,
      },
    });
    tl8.to(".wrr",{
      top:"-100%",
    },"s")
    tl8.to(".wrr2",{
      top:"-100%",
      delay:0.5
    },"s")
    tl8.to(".wrr3",{
      top:"-100%",
      delay:0.7
    },"s")
    tl8
      .to(
        "#page10>h1",
        {
          opacity: 1,
        },
        "same"
      )
      
      .to(
        "#overlay10",
        {
          backdropFilter: "blur(20px)",
        },
        "same2"
      )
      .to(
        "#page10>h1",
        {
          opacity: ".6",
        },
        "same2"
      )
      .to("#p10-txt .p10-wrapper h1", {
        transform: "translateY(0)",
      })
      .to("#p10-txt .p10-wrapper h1", {
        transform: "translateY(-110%)",
      })
      .to("#p10-txt2 .p10-wrapper h1", {
        transform: "translateY(0%)",
      });
  }, []);

  return (
    <div>
      <div id="page10">
        <div className="w-full h-screen flex gap-5 flex-col items-center justify-center">
            <div className="flex w-full items-center justify-center gap-2">
            <div className="w-[30%] text-white rounded-2xl text-6xl   h-[40vh]">
                <p>Highly realistic and authentic virtual variety of garments 
                </p>
            </div>
            <div className="relative w-[30%] text-white rounded-2xl overflow-hidden  h-[40vh]">
              <div className=" absolute top-0 w-full h-full bg-black  wrr "></div>
                <img className="w-full h-full object-cover" src="https://img.freepik.com/premium-photo/photo-asian-man-wearing-trendy-fashion-clothes-generated-by-ai_911060-6281.jpg" alt="" />
            </div>
            </div>
            <div className="flex w-full items-center justify-center gap-2">
            <div className=" relative w-[40%] text-white rounded-2xl overflow-hidden  h-[40vh]">
            <div className=" absolute top-0 w-full h-full bg-black  wrr2 "></div>

                <img className="w-full h-full object-cover" src="https://static.vecteezy.com/system/resources/previews/038/814/443/non_2x/ai-generated-a-sophisticated-fashion-campaign-set-against-a-backdrop-of-serene-natural-landscapes-free-photo.jpeg" alt="" />
            </div>
            <div className="relative w-[30%] text-white rounded-2xl overflow-hidden  h-[40vh]">
            <div className=" absolute top-0 w-full h-full bg-black  wrr3 "></div>

                <img className="w-full h-full object-cover" src="https://img.freepik.com/premium-photo/essence-childhood-fashion_1007506-23529.jpg" alt="" />
            </div>
            </div>
        </div>
        <div id="p10-txt" className="uppercase">
          <div className="p10-wrapper">
            <h1> IDM VTON is a virtual try-on </h1>
          </div>
          <div className="p10-wrapper">
            <h1>system that customizes </h1>
          </div>
          <div className="p10-wrapper">
            <h1>using user-uploaded </h1>
          </div>
          <div className="p10-wrapper">
            <h1>experiences </h1>
          </div>
          <div className="p10-wrapper">
            <h1>garment images.</h1>
          </div>
        </div>
        <div id="p10-txt2" className="uppercase">
         
          <div className="p10-wrapper">
            <h1>IDM VTON innovatively combines AI </h1>
          </div>
          <div className="p10-wrapper">
            <h1>enabling a new dimension of</h1>
          </div>
          <div className="p10-wrapper">
            <h1> fashion exploration </h1>
          </div>
          <div className="p10-wrapper">
            <h1>  and personalization.</h1>
          </div>
        </div>
        <div id="overlay10"></div>
      </div>
    </div>
  );
}
