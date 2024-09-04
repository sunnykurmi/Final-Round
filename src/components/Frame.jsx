import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

function FourthPage() {

  useEffect(() => {
    const canvas = document.querySelector("canvas");
    const context = canvas.getContext("2d");
    const frames = {
      currentIndex: 1,
      maxIndex: 252,
    };

    let imagesLoaded = 0;

    const images = [];

    function preloadImages() {
      for (let i = 1; i <= frames.maxIndex; i++) {
        const img = new Image();
        img.src = `./frames/frame_${i.toString().padStart(4, "0")}.jpeg`;
        img.onload = () => {
          imagesLoaded++;
          if (imagesLoaded === frames.maxIndex) {
            loadImage(frames.currentIndex);
            startAnimation();
          }
        };
        images.push(img);
      }
    }

    function loadImage(index) {
      if (index >= 0 && index <= frames.maxIndex) {
        const img = images[index];
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const scaleX = canvas.width / img.width;
        const scaleY = canvas.height / img.height;
        const scale = Math.max(scaleX, scaleY);

        const newWidth = img.width * scale;
        const newHeight = img.height * scale;

        const offsetX = (canvas.width - newWidth) / 2;
        const offsetY = (canvas.height - newHeight) / 2;

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.imageSmoothingEnabled = true;
        context.imageSmoothingQuality = "high";
        context.drawImage(img, offsetX, offsetY, newWidth, newHeight);
        frames.currentIndex = index;
      }
    }

    function startAnimation() {
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".parent",
          start: "top top",
          scrub: true,
          // markers: true,
        },
      });
      tl.to(frames, {
        currentIndex: frames.maxIndex,
        onUpdate: function () {
          loadImage(Math.floor(frames.currentIndex));
        },
      });
    }
    preloadImages();
  }, []);

  return (
    <div>
      <div  data-cursor="-inverse" className="w-full bg-zinc-900">
        <div className="absolute uppercase  text-white w-full h-screen z-[5] bg-black flex flex-col text-center items-center justify-center">
          <div data-cursor-video="/images/dance.mp4"  className="text-9xl cursor-default max-[600px]:text-7xl">
          generate
          </div>
          <div className=" text-xl opacity-40">
            Your style your fit instantly online
          </div>
        </div>
        <div className="parent relative top-0 left-0 w-full h-[700vh] max-[600px]:hidden">
          <div className="can   w-full sticky top-0 left-0 h-screen">
            <canvas className="w-full h-screen" id="frame"></canvas>
          </div>
        </div>
      </div>
       
    </div>
  );
}

export default FourthPage;
