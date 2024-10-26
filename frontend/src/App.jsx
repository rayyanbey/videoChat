import React, { useEffect } from 'react'
import { Routes, Router, Route } from 'react-router-dom'
import HomePage from './pages/home/Index.jsx'
import RoomPage from './pages/home/RoomPage.jsx'
import WelcomeAnimation from './components/Welcome.jsx'


export default function App() {
  useEffect(() => {
    // GSAP code for cursor animation goes here
    const cursor = document.querySelector(".custom-cursor");

    document.addEventListener("mousemove", (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power3.out"
      });
    });
  }, []);
  return (
    <div className="custom-cursor w-screen h-screen bg-black overflow-hidden relative BG scroll-m-1">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1E6E89] via-grey to-[#000] opacity-70"></div>
      <div className="absolute inset-0 bg-[url('')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="relative z-10">
        <WelcomeAnimation/>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/room/:username/:roomId' element={<RoomPage />} />
        </Routes>
      </div>
    </div>
  )
}