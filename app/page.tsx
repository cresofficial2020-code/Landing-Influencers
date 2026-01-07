"use client";
import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Instagram, Zap, BarChart3, Video, Send, Star, TrendingUp, MessageCircle } from 'lucide-react';

export default function LandingInfluencer() {
  const mouseX = useSpring(useMotionValue(0), { stiffness: 500, damping: 50 });
  const mouseY = useSpring(useMotionValue(0), { stiffness: 500, damping: 50 });

  function handleMouseMove({ clientX, clientY }: React.MouseEvent) {
    mouseX.set(clientX);
    mouseY.set(clientY);
  }

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="relative min-h-screen bg-[#0a0a0a] text-white selection:bg-blue-500/30 font-sans overflow-x-hidden"
    >
      {/* EFECTO GLOW SUTIL */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-30"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(59, 130, 246, 0.12), transparent 80%)`
          ),
        }}
      />

      {/* --- NAVBAR ACTUALIZADA --- */}
      <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10 px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold tracking-tighter italic text-white">IMPERIO<span className="text-blue-500">.</span></div>
        
        <div className="flex gap-4">
          {/* BOTÓN WHATSAPP */}
          <a 
            href="https://wa.me/tu-numero" 
            target="_blank"
            className="hidden md:flex items-center gap-2 bg-zinc-900 border border-white/10 px-5 py-2 rounded-full font-medium hover:bg-zinc-800 transition-all"
          >
            <MessageCircle size={18} className="text-green-500" />
            <span>Contacto</span>
          </a>

          {/* BOTÓN AGENDAR CON EFECTO OLA AZUL */}
          <button className="group relative overflow-hidden bg-white text-black px-6 py-2 rounded-full font-bold transition-all duration-300">
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              Agendar ahora
            </span>
            {/* La "Ola" Azul */}
            <div className="absolute inset-0 z-0 bg-blue-600 translate-y-[102%] group-hover:translate-y-0 transition-transform duration-400 ease-[cubic-bezier(0.19,1,0.22,1)]" />
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-40 pb-10 px-6 flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
          className="px-4 py-1 rounded-full border border-blue-500/30 bg-blue-500/5 text-blue-400 text-xs uppercase tracking-widest mb-6"
        >
          ✨ Gestión de Élite para Influencers
        </motion.div>
        
        <motion.h1 
          className="text-6xl md:text-9xl font-black tracking-tighter mb-8 leading-[0.85]"
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
        >
          DOMINA EL <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500">ALGORITMO</span>
        </motion.h1>
      </section>

      {/* --- MÉTRICAS --- */}
      <section className="py-10 px-6 max-w-7xl mx-auto z-40 relative">
        <div className="bg-zinc-900/30 border border-white/5 rounded-[2.5rem] p-10 grid grid-cols-1 md:grid-cols-3 gap-10 text-center backdrop-blur-sm">
          <StatItem label="Views Generadas" value="25M" color="text-blue-500" />
          <StatItem label="Nuevos Seguidores" value="+1.2M" color="text-blue-400" />
          <StatItem label="Retention Rate" value="78%" color="text-indigo-400" />
        </div>
      </section>

      {/* --- BENTO GRID --- */}
      <section className="px-6 py-20 max-w-7xl mx-auto relative z-40">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <BentoCard 
            title="Estrategia Viral" 
            description="Algoritmos de retención analizados al detalle."
            icon={<Zap />}
            className="md:col-span-2 bg-gradient-to-br from-blue-900/20 to-transparent"
          />
          <BentoCard 
            title="Edición 4K" 
            description="Contenido diseñado para no dejar de hacer scroll."
            icon={<Video />}
          />
          <BentoCard 
            title="Escalabilidad" 
            description="Llevamos tu marca a otros mercados."
            icon={<TrendingUp />}
          />
          <BentoCard 
            title="Partnerships" 
            description="Conexiones directas con marcas premium."
            icon={<Star />}
            className="md:col-span-2"
          />
        </div>
      </section>
    </div>
  );
}

function StatItem({ label, value, color }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col"
    >
      <span className={`text-5xl md:text-6xl font-black ${color} tracking-tighter mb-1`}>{value}</span>
      <span className="text-zinc-500 uppercase tracking-widest text-[10px] font-bold">{label}</span>
    </motion.div>
  );
}

function BentoCard({ title, description, icon, className = "" }: any) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className={`relative group bg-zinc-900/40 border border-white/5 p-8 rounded-[2rem] overflow-hidden ${className}`}
    >
      <div className="relative z-10 text-white">
        <div className="mb-4 text-blue-500">{icon}</div>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}