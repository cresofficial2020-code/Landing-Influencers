"use client";
import React from 'react';
// ... tus otros imports

export default function Page() { // <--- La 'P' debe ser mayúscula
  return (
    // ... tu código
  );
}
export default function Page() {
  return (
    <div style={{ backgroundColor: '#0a0a0a', color: 'white', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>
        IMPERIO<span style={{ color: '#3b82f6' }}>.</span>
      </h1>
      <p style={{ color: '#888' }}>Próximamente: El dominio del algoritmo.</p>
      <button style={{ marginTop: '20px', padding: '10px 20px', borderRadius: '20px', border: 'none', background: 'white', color: 'black', fontWeight: 'bold' }}>
        Agendar ahora
      </button>
    </div>
  );
}