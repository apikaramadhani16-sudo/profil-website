import React, { useState } from 'react';
import logoStitch from '../assets/stich.png';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      onLogin();
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 p-6 font-sans">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-xl border border-slate-200">
        
        {/* Header Logo & Judul */}
        <div className="text-center mb-8">
          <img 
            src={logoStitch} 
            alt="Stitch Logo" 
            className="w-24 h-24 mx-auto mb-4 object-contain" 
        />
          <h2 className="text-2xl font-bold text-slate-900">Selamat Datang di Ruang Kami!</h2>
          <p className="text-sm text-slate-500 mt-1">Yuk, login sebentar untuk mengintip keseruan dan hasil kerja keras tim optimasi website.</p>
        </div>

        {/* Form Input */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
              Email Address
            </label>
            <input 
              type="email" 
              placeholder="name@company.com"
              className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2.5 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 transition"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div>
            <div className="flex justify-between mb-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                Password
              </label>
            </div>
            <input 
              type="password" 
              placeholder="••••••••"
              className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2.5 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 transition"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-900 hover:bg-blue-950 text-white font-semibold py-2.5 rounded-lg transition duration-200 text-sm shadow-sm"
          >
            Sign In
          </button>
        </form>

        {/* Pembatas */}
        <div className="relative my-6 flex items-center justify-center">
          <div className="absolute w-full border-t border-slate-200"></div>
          <span className="relative bg-white px-4 text-xs text-slate-400">Atau akses via SSO</span>
        </div>

        {/* Opsi Login Institusi */}
        <div className="grid grid-cols-2 gap-3">
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-xl text-sm border border-transparent transition-colors">
            Google Workspace
          </button>
          <button className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:opacity-90 text-white font-medium py-2.5 px-4 rounded-xl text-sm transition-opacity shadow-sm">
            Instagram Auth
          </button>
        </div>

      </div>
    </div>
  );
}

export default Login;