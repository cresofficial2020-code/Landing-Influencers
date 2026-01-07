"use client";
import React from 'react';
import './globals.css';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Zap, Video, Star, TrendingUp, MessageCircle } from 'lucide-react';

export default function Landing() {
  const mouseX = useSpring(useMotionValue(0), { stiffness: 500, damping: 50 });
  const mouseY = useSpring(useMotionValue(0), { stiffness: 500, damping: 50 });

  return (
    <div onMouseMove={(e) => { mouseX.set(e.clientX); mouseY.set(e.clientY); }} className="relative min-h-screen bg-[#0a0a0a] text-white font-sans overflow-x-hidden">
      
      {/* GLOW EFFECT */}
      <motion.div className="pointer-events-none fixed inset-0 z-30" style={{ background: useTransform([mouseX, mouseY], ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(59, 130, 246, 0.15), transparent 80%)`) }} />

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10 px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold italic">IMPERIO<span className="text-blue-500">.</span></div>
        <div className="flex gap-4">
          <a href="https://wa.me/tu-numero" className="hidden md:flex items-center gap-2 bg-zinc-900 border border-white/10 px-5 py-2 rounded-full hover:bg-zinc-800 transition-all">
            <MessageCircle size={18} className="text-green-500" />
            <span>Contacto</span>
          </a>
          {/* BOTÓN CON OLA AZUL */}
          <button className="group relative overflow-hidden bg-white text-black px-6 py-2 rounded-full font-bold">
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">Agendar ahora</span>
            <div className="absolute inset-0 z-0 bg-blue-600 translate-y-[102%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-40 pb-20 px-6 text-center">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-tight">
          DOMINA EL <br /> 
          <span className="text-blue-500">ALGORITMO</span>
        </h1>
        <p className="text-zinc-400 max-w-xl mx-auto text-lg">Gestión de élite para creadores de contenido que buscan el siguiente nivel.</p>
      </section>

      {/* GRID */}
      <section className="px-6 py-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-zinc-900/50 border border-white/10 p-8 rounded-[2rem]">
          <Zap className="text-blue-500 mb-4" />
          <h3 className="text-2xl font-bold">Estrategia Viral</h3>
          <p className="text-zinc-400">Analizamos cada segundo de tu contenido.</p>
        </div>
        <div className="bg-zinc-900/50 border border-white/10 p-8 rounded-[2rem]">
          <Video className="text-blue-500 mb-4" />
          <h3 className="text-2xl font-bold">Edición Pro</h3>
          <p className="text-zinc-400">Retención máxima en cada frame.</p>
        </div>
      </section>
    </div>
  );
}