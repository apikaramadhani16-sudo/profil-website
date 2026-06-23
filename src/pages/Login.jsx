import React, { useState } from 'react';
import gambarStich from '../assets/stich.png';

function Login({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // 1. Fungsi Login Utama (Form Manual)
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch('http://127.0.0.1:8000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (data.success) {
                alert('Login Berhasil!');
                onLogin();
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Gagal terhubung ke server Laravel!');
        }
    };

    // 2. Fungsi Tambahan Untuk Register (Daftar Akun Baru)
    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://127.0.0.1:8000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (data.success) {
                alert('Pendaftaran Sukses! Silakan klik Sign In menggunakan akun ini.');
            } else {
                alert(data.message || 'Gagal mendaftarkan akun.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Terjadi kesalahan koneksi ke server backend!');
        }
    };

    // 2. Fungsi Simulasi Login Sosial (Google & Instagram)
    const handleSocialLoginSimulasi = async (platform) => {
        const fakeEmail = `user.simulasi.${platform.toLowerCase()}@gmail.com`;
        const fakePassword = 'password123';

        try {
            // Langsung tembak login saja karena akunnya sudah otomatis terbuat di database
            const response = await fetch('http://127.0.0.1:8000/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: fakeEmail, password: fakePassword }),
            });

            const data = await response.json();

            if (data.success) {
                alert(`Simulasi Login Berhasil dengan ${platform}!`);
                onLogin(); // Meluncur ke Dashboard
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error('Error simulasi:', error);
            alert('Gagal mencoba simulasi login!');
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-100 p-4">
            <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-center mb-4">
                 <img 
                    src={gambarStich} 
                    alt="Stitch" 
                    className="w-24 h-24 object-cover rounded-full shadow-sm"
                />
                </div>
                <h2 className="text-2xl font-bold text-slate-800 text-center mb-1">Selamat Datang</h2>
                <p className="text-sm text-slate-500 text-center mb-6">Yuk, login sebelum melihat profil tim!</p>

                {/* Form Input Manual */}
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            placeholder="name@company.com"
                            className="w-full bg-white border border-slate-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:border-blue-500"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="••••••••••••"
                            className="w-full bg-white border border-slate-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:border-blue-500"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-900 hover:bg-blue-950 text-white font-medium py-2 px-4 rounded-md transition-colors"
                    >
                        Sign In
                    </button>

                    <button 
                        type="button" 
                        onClick={handleRegister} 
                        className="w-full mt-2 bg-gray-600 hover:bg-gray-700 text-white p-2 rounded transition-colors"
                    >
                        Daftar Akun Baru
                    </button>

                </form>

                {/* Pembatas */}
                <div className="relative my-6 flex items-center justify-center">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-slate-200"></div>
                    </div>
                    <span className="relative bg-white px-4 text-xs text-slate-400 uppercase tracking-wider">
                        Atau akses via SSO
                    </span>
                </div>

                {/* Opsi Login Institusi */}
                <div className="grid grid-cols-2 gap-3">
                    <button 
                        type="button"
                        onClick={() => handleSocialLoginSimulasi('Google')}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
                    >
                        Google Workspace
                    </button>
                    <button 
                        type="button"
                        onClick={() => handleSocialLoginSimulasi('Instagram')}
                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
                    >
                        Instagram Auth
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;