import React, { useEffect, useRef } from 'react'

export default function FirstPage() {
  const blockContainerRef = useRef(null);

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
  return (
    <div>
      <div className="blockcontainer">
      <div id="blocks" ref={blockContainerRef}></div>
    </div>
        <div className="w-full pointer-events-none h-[60vh] text-white flex-col   flex items-center justify-end">
          <div className="text-7xl text-center uppercase">
          interactive fashion at <br /> your fingertips
          </div>
          <div className="text-xl">
          <p>Highly realistic and authentic virtual variety of garments</p>
          </div>
           
        </div>
    </div>
  )
}
