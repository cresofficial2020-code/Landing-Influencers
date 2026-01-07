"use client";
import React from 'react';

export default function Page() {
  return (
    <div style={{ backgroundColor: '#0a0a0a', color: 'white', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif' }}>
      <nav style={{ position: 'fixed', top: 0, width: '100%', padding: '20px', borderBottom: '1px solid #333', display: 'flex', justifyContent: 'space-between', backgroundColor: 'rgba(0,0,0,0.5)' }}>
        <div style={{ fontWeight: 'bold', fontSize: '20px' }}>IMPERIO<span style={{ color: '#3b82f6' }}>.</span></div>
      </nav>
      
      <h1 style={{ fontSize: '60px', fontWeight: '900', textAlign: 'center', letterSpacing: '-2px' }}>
        DOMINA EL <br /> 
        <span style={{ color: '#3b82f6' }}>ALGORITMO</span>
      </h1>
      
      <button style={{ marginTop: '20px', backgroundColor: 'white', color: 'black', padding: '12px 30px', borderRadius: '50px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
        Agendar ahora
      </button>

      <div style={{ marginTop: '50px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', maxWidth: '800px' }}>
        <div style={{ padding: '30px', border: '1px solid #333', borderRadius: '20px', background: '#111' }}>
          <h3 style={{ color: '#3b82f6' }}>Estrategia</h3>
          <p style={{ color: '#888' }}>Viralidad garantizada.</p>
        </div>
        <div style={{ padding: '30px', border: '1px solid #333', borderRadius: '20px', background: '#111' }}>
          <h3 style={{ color: '#3b82f6' }}>Edición</h3>
          <p style={{ color: '#888' }}>Retención máxima.</p>
        </div>
      </div>
    </div>
  );
}