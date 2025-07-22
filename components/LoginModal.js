import React from "react";
import Button from "./Button";

const LoginModal = ({ open, onClose, onSwitchToSignup }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white/60 backdrop-blur-lg rounded-3xl shadow-2xl p-8 w-full max-w-md relative border border-white/40 flex flex-col items-center" style={{boxShadow: '0 8px 32px 0 rgba(251,146,60,0.25), 0 1.5px 8px 0 rgba(31,38,135,0.10)'}}>
        <button className="absolute top-4 right-4 text-black hover:text-orange-600 text-3xl font-bold transition cursor-pointer z-10" onClick={onClose}>&times;</button>
        <div className="flex flex-col items-center w-full">
          <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-4 shadow-lg">
            <i className="fa fa-user text-3xl text-orange-500"></i>
          </div>
          <h2 className="text-3xl font-extrabold text-orange-500 mb-2 text-center tracking-tight">Welcome Back</h2>
          <p className="text-gray-600 mb-6 text-center text-base">Login to your account</p>
        </div>
        <form className="flex flex-col gap-4 w-full">
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-400"><i className="fa fa-id-card"></i></span>
            <input type="text" placeholder="Roll Number" className="pl-10 pr-4 py-3 rounded-full border border-orange-200 bg-white/80 backdrop-blur text-gray-800 w-full focus:ring-2 focus:ring-orange-300 focus:outline-none transition" />
          </div>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-400"><i className="fa fa-lock"></i></span>
            <input type="password" placeholder="Password" className="pl-10 pr-4 py-3 rounded-full border border-orange-200 bg-white/80 backdrop-blur text-gray-800 w-full focus:ring-2 focus:ring-orange-300 focus:outline-none transition" />
          </div>
          <Button className="bg-orange-500 text-white py-3 rounded-full font-bold text-lg mt-2 shadow-lg cursor-pointer transition-all hover:bg-orange-600 hover:scale-105">Login</Button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-700"> {"Don't have an account?"}" <a href="#" className="text-orange-500 font-semibold hover:underline" onClick={e => { e.preventDefault(); onClose(); onSwitchToSignup(); }}>Sign Up</a></p>
      </div>
    </div>
  );
};

export default LoginModal; 