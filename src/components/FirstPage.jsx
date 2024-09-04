import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function FirstPage() {
  const blockContainerRef = useRef(null);
  const [count, setCount] = useState(0);
  const leftBarRef = useRef(null);
  const rightBarRef = useRef(null);
  const countRef = useRef(null);

  useEffect(() => {
    const blockcontainer = blockContainerRef.current;
    const blocksize = 50;
    const screenwidth = window.innerWidth;
    const screenheight = window.innerHeight;
    const numcols = Math.ceil(screenwidth / blocksize);
    const numrows = Math.ceil(screenheight / blocksize);
    const numblocks = numcols * numrows;

    function createblocks() {
      for (let i = 0; i < numblocks; i++) {
        const block = document.createElement("div");
        block.classList.add("block");
        block.dataset.index = i;
        block.addEventListener("mousemove", highlight);
        blockcontainer.appendChild(block);
      }
    }

    function highlight() {
      const index = parseInt(this.dataset.index);
      const neighbors = [
        index - 1,
        index + 1,
        index - numcols,
        index + numcols,
        index - numcols - 1,
        index - numcols + 1,
        index + numcols - 1,
        index + numcols + 1,
      ].filter(
        (i) =>
          i >= 0 &&
          i < numblocks &&
          Math.abs((i % numcols) - (index % numcols)) <= 1
      );

      this.classList.add("highlight");
      setTimeout(() => {
        this.classList.remove("highlight");
      }, 500);

      shufflearray(neighbors)
        .slice(0, 1)
        .forEach((i) => {
          const neighbor = blockcontainer.children[i];
          if (neighbor) {
            neighbor.classList.add("highlight");
            setTimeout(() => {
              neighbor.classList.remove("highlight");
            }, 500);
          }
        });
    }

    function shufflearray(arr) {
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    }

    createblocks();
  }, []);

  // useEffect(() => {
  //   // Animate the count from 0 to 100
  //   gsap.to(
  //     {},
  //     {
  //       duration: 3,
  //       onUpdate: function () {
  //         const progress = this.progress();
  //         const newCount = Math.floor(progress * 100);
  //         setCount(newCount);
  //       },
  //     }
  //   );

  //   // Animate the width of the bars
  //   gsap.to([leftBarRef.current, rightBarRef.current], {
  //     duration: 3,
  //     width: "48%",
  //     ease: "linear",
  //   });

  //   gsap.to("#load", {
  //     duration: 3,
  //     opacity: 0,
  //     delay: 3,
  //     onComplete: () => {
  //       document.getElementById("load").style.display = "none";
  //     },
  //   });
  // }, []);
  // useEffect(() => {
  //     gsap.fromTo("#la", {
  //       y:100
  //     },
  //     {
  //       y:0,
  //       duration:1,
  //       delay:3
  //     })
  //     gsap.fromTo("#la2", {
  //       y:100
  //     },
  //     {
  //       y:0,
  //       duration:1,
  //       delay:3.2
  //     })
  //     gsap.fromTo("#la3", {
  //       y:100
  //     },
  //     {
  //       y:0,
  //       duration:1,
  //       delay:3.4
  //     })
  // }, [])
  
  return (
    <div>
      <div data-cursor="-inverse" className="blockcontainer">
        <div id="blocks" ref={blockContainerRef}></div>
      </div>
      {/* <div
        id="load"
        className="fixed w-full h-screen z-[99] bg-black flex items-center justify-center"
      >
        <div className="flex items-center justify-between w-full">
          <div
            ref={leftBarRef}
            className="w-[2%] h-[2px] bg-[#ffffff31] "
          ></div>
          <div ref={countRef} className="text-[#ffffff94]">
            {count.toString().padStart(2, "0")}
          </div>
          <div
            ref={rightBarRef}
            className="w-[2%] h-[2px] bg-[#ffffff31]"
          ></div>
        </div>
      </div> */}
      <div
        data-cursor="-inverse"
        className="w-full pointer-events-none h-[60vh] text-white flex-col   flex items-center justify-end"
      >
        <div className="text-7xl flex flex-col text-center uppercase overflow-hidden max-[600px]:text-4xl ">
          <div className="w-full h-fit  overflow-hidden">
            <p id="la" >interactive fashion at</p>
          </div>
          <div>
            <p id="la2">your fingertips</p>
          </div>
        </div>
        <div className="text-xl">
          <p id="la3" className="opacity-40 text-center max-[600px]:text-xs">
            Highly realistic and authentic virtual variety of garments
          </p>
        </div>
      </div>
    </div>
  );
}
