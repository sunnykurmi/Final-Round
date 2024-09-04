import React, { useEffect } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export default function SecondPage() {

    useEffect(() => {

        const text1 = new SplitType("#split1", { types: " chars" });
        const text2 = new SplitType("#split2", { types: " chars" });

        var para1 = document.getElementById("para1");
        var para2 = document.getElementById("para2");

        var box1 = document.getElementById("box1");
        var box2 = document.getElementById("box2");

        var imgparent1 = document.getElementById("imgparent1");
        var imgparent2 = document.getElementById("imgparent2");

    
        var img1 = document.getElementById("img1");
        var img2 = document.getElementById("img2");
        var img3 = document.getElementById("img3");



        
            var tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "#parent2",
                    start: "top top",
                    end:window.innerHeight*5,
                    pin: true,
                    pinSpacing: true,
                    markers: true,
                    scrub: 3,
                },
            });
            tl.to(box1, {
                width: "70%",
                height: "70vh",
            },"1");
            tl.fromTo(img1, {
                scale:2
            },{
                scale:1
            }, "1");
            tl.to(box1, {
                width: "50%",
                height: "50vh",
                opacity:0
            }, "2");
            tl.fromTo(img1, {
                scale:1
            },{
                scale:2
            }, "2");
            tl.to(box2, {
                top: "0%",
            }, "2");
            tl
            tl.fromTo(imgparent1, {
                y:"100vh",
                width:"50%"
            },
            {
                y:"15vh",
                width:"90%"
            }, "2");
            tl.fromTo(img2, {
                scale:2
            },{
                scale:1
            }, "2");
            tl.fromTo(text1.chars, {
                opacity:0,
                x:gsap.utils.random(-50,50,true),
                filter:"blur(10px)",
                scale:.8
            },{
                opacity:1,
                x:0,
                filter:"blur(0px)",
                stagger:0.05,
                scale:1
            }, "2");
            tl.fromTo(para1, {
                opacity:0,
                y:20
            },{
                opacity:1,
                delay:1,
                y:0
            }, "2");

            tl.to(imgparent1,{
                scale:.8,
                filter:"blur(50px)",
                delay:.5,
                opacity:0
            },"3")
            tl.to(para1,{
                scale:.8,
                filter:"blur(50px)",
                delay:.5,
                opacity:0
            },"3")

           tl.fromTo(text1.chars, {
               opacity:1,
               x:0,
               filter:"blur(0px)",
               scale:1
            },{
                opacity:0,
                x:gsap.utils.random(-50,50,true),
                filter:"blur(10px)",
                stagger:0.05,
                scale:.8
            }, "3");

            tl.fromTo(imgparent2, {
                y:"100vh",
                width:"50%"
            },
            {
                y:"0vh",
                delay:.5,
                width:"90%"
            }, "3");
            tl.fromTo(img3, {
                scale:2
            },{
                scale:1,
                delay:.5

            }, "3");
            tl.fromTo(text2.chars, {
                opacity:0,
                x:50,
                filter:"blur(10px)",
                scale:.8
            },{
                opacity:1,
                x:0,
                filter:"blur(0px)",
                stagger:0.05,
                scale:1
            }, "3");
            tl.fromTo(para2, {
                opacity:0,
                y:50
            },{
                opacity:1,
                delay:1,
                y:0
            }, "3");
     
    }, [])
    

  return (
    <div>
      <div id="parent2" className=" relative w-full h-screen flex flex-col items-center justify-center bg-black">
        <div id="box1" className="absolute  w-[40%] h-[40vh] overflow-hidden rounded-3xl bg-black  ">
          <img 
          id="img1"
            className="w-full h-full object-cover"
            src="/images/page2img1.webp"
            alt=""
          />
        </div>
        <div id="box2" className="absolute    w-[70%] h-[70vh]  flex ">
          <div className="w-[50%] h-full  flex items-center justify-center ">
            <div id="imgparent1"  className="w-[90%] h-[90%] rounded-3xl overflow-hidden ">
              <img
              id="img2"
                className="w-full h-full object-cover"
                src="/images/page2img2.webp"
                alt=""
              />
            </div>
          </div>
          <div className="w-[50%] h-full flex items-end justify-end">
            <p id="split1" className=" z-[9] humaneregular absolute top-[50%] left-[50%] translate-x-[-50%]  translate-y-[-50%] text-[15vw] uppercase whitespace-nowrap text-[#fbfaf3]">
              Authentic Virtual Try-On
            </p>
            <p id="para1" className="text-[#26404f] w-[80%]">
              IDM VTON's advanced diffusion models create highly realistic and
              consistent garment images, making virtual try-ons
              indistinguishable from real-life fittings.
            </p>
            
          </div>
        </div>
        <div className="absolute w-[70%] h-[70vh]  flex ">
          <div className="w-[50%] h-full flex items-end justify-end">
            <p id="split2" className=" z-[9] humaneregular absolute leading-[25vh] top-[50%] left-[50%] translate-x-[-50%]  translate-y-[-54%] text-[15vw] uppercase whitespace-nowrap text-[#fbfaf3]">
              Sophisticated Attention <br /> Modules
            </p>
            <p id="para2"  className="text-[#26404f] w-[80%]">
              Our unique attention modules enhance the conditioning of garment
              images, ensuring precise and authentic adaptation to the user's
              body.
            </p>
          </div>
          <div className="w-[50%] h-full  flex items-center justify-center ">
            <div id="imgparent2" className="w-[90%] h-[90%] rounded-3xl overflow-hidden ">
              <img
              id="img3"
                className="w-full h-full object-cover"
                src="/images/page2img3.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
