import React, { useEffect } from 'react'
import Home from './components/Home'
import Lenis from 'lenis'
import LocomotiveScroll from 'locomotive-scroll';
import { Route, Routes } from 'react-router-dom';
import Scene from './Error/Scene';
export default function App() {
  // useEffect( () => {
  //   const lenis = new Lenis()

  //   function raf(time) {
  //     lenis.raf(time)
  //     requestAnimationFrame(raf)
  //   }

  //   requestAnimationFrame(raf)
  // }, [])

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
    <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Scene />} />
      </Routes>
    </>
  )
}
