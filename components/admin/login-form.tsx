"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useToast } from "@/hooks/use-toast";

export function LoginForm() {
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  useEffect(() => { setMounted(true); }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email: formData.email,
        password: formData.password,
      });
      if (result?.error) {
        toast({ title: "Access Denied", description: "Invalid credentials. Please try again.", variant: "destructive" });
        return;
      }
      router.push("/admin");
    } catch {
      toast({ title: "Error", description: "Connection failed.", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');

        @keyframes bgShift {
          0%,100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes cardIn {
          from { opacity: 0; transform: translateY(28px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes spinLoader {
          to { transform: rotate(360deg); }
        }
        @keyframes shimmerMove {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes glowPulse {
          0%,100% { opacity: 0.5; }
          50%      { opacity: 1; }
        }
        @keyframes orb1Float {
          0%,100% { transform: translate(0,0); }
          50%      { transform: translate(40px, -30px); }
        }
        @keyframes orb2Float {
          0%,100% { transform: translate(0,0); }
          50%      { transform: translate(-30px, 40px); }
        }
        @keyframes iconRing {
          0%   { box-shadow: 0 0 0 0 rgba(59,130,246,0.4); }
          70%  { box-shadow: 0 0 0 14px rgba(59,130,246,0); }
          100% { box-shadow: 0 0 0 0 rgba(59,130,246,0); }
        }
        @keyframes underlineIn {
          from { transform: scaleX(0); opacity: 0; }
          to   { transform: scaleX(1); opacity: 1; }
        }

        .card-in   { animation: cardIn 0.75s cubic-bezier(0.22,1,0.36,1) forwards; }
        .spin      { animation: spinLoader 0.8s linear infinite; }
        .glow-pulse{ animation: glowPulse 2.5s ease-in-out infinite; }
        .orb1      { animation: orb1Float 18s ease-in-out infinite; }
        .orb2      { animation: orb2Float 22s ease-in-out infinite; }
        .icon-ring { animation: iconRing 2.2s ease-out infinite; }
        .shimmer-track {
          position: relative; overflow: hidden;
        }
        .shimmer-track::after {
          content:'';
          position:absolute; inset:0;
          background:linear-gradient(90deg,transparent 0%,rgba(255,255,255,0.06) 50%,transparent 100%);
          animation: shimmerMove 2.4s ease-in-out infinite;
        }
        .underline-bar {
          transform-origin: left;
          animation: underlineIn 0.3s cubic-bezier(0.22,1,0.36,1) forwards;
        }

        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus {
          -webkit-box-shadow: 0 0 0 1000px #0b1631 inset !important;
          -webkit-text-fill-color: #cbd5e1 !important;
          transition: background-color 9999s;
        }
      `}</style>

      {/* ══════════ PAGE ══════════ */}
      <div
        className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden"
        style={{
          background: "radial-gradient(ellipse at 60% 0%, #0d1f4a 0%, #060d24 45%, #02060f 100%)",
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}
      >

        {/* ── Ambient orbs ── */}
        <div className="orb1 absolute rounded-full pointer-events-none"
          style={{
            width: 700, height: 700, top: "-20%", left: "-18%",
            background: "radial-gradient(circle at 40% 40%, rgba(37,99,235,0.18) 0%, rgba(30,64,175,0.08) 50%, transparent 75%)",
            filter: "blur(2px)",
          }} />
        <div className="orb2 absolute rounded-full pointer-events-none"
          style={{
            width: 600, height: 600, bottom: "-18%", right: "-12%",
            background: "radial-gradient(circle at 60% 60%, rgba(56,189,248,0.10) 0%, rgba(14,165,233,0.05) 55%, transparent 80%)",
            filter: "blur(2px)",
          }} />

        {/* ── Fine dot grid ── */}
        <div className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage: "radial-gradient(rgba(59,130,246,0.18) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }} />

        {/* ── Horizontal lines ── */}
        {[15, 45, 75].map((t, i) => (
          <div key={i} className="glow-pulse absolute left-0 right-0 h-px pointer-events-none"
            style={{
              top: `${t}%`,
              background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.07), rgba(147,197,253,0.05), transparent)",
              animationDelay: `${i * 0.8}s`,
            }} />
        ))}

        {/* ══════════ CARD ══════════ */}
        <div
          className={`relative w-full max-w-[460px] ${mounted ? "card-in" : "opacity-0"}`}
          style={{
            borderRadius: 28,
            background: "linear-gradient(155deg, #0d1e42 0%, #091530 40%, #060f26 100%)",
            border: "1px solid rgba(59,130,246,0.22)",
            boxShadow: `
              0 0 0 1px rgba(255,255,255,0.04),
              0 32px 80px -12px rgba(0,0,0,0.85),
              0 0 120px -20px rgba(37,99,235,0.2),
              inset 0 1px 0 rgba(147,197,253,0.10),
              inset 0 -1px 0 rgba(37,99,235,0.08)
            `,
          }}
        >
          {/* Top edge highlight */}
          <div className="glow-pulse absolute top-0 left-[12%] right-[12%] h-px rounded-full"
            style={{ background: "linear-gradient(90deg, transparent, rgba(147,197,253,0.7), rgba(59,130,246,0.9), rgba(147,197,253,0.7), transparent)" }} />

          {/* Corner accents */}
          {[
            "top-0 left-0 border-t border-l rounded-tl-[28px]",
            "top-0 right-0 border-t border-r rounded-tr-[28px]",
            "bottom-0 left-0 border-b border-l rounded-bl-[28px]",
            "bottom-0 right-0 border-b border-r rounded-br-[28px]",
          ].map((cls, i) => (
            <div key={i} className={`absolute w-8 h-8 pointer-events-none ${cls}`}
              style={{ borderColor: "rgba(59,130,246,0.35)" }} />
          ))}

          {/* Inner top glow wash */}
          <div className="absolute top-0 inset-x-0 h-56 pointer-events-none rounded-t-[28px]"
            style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(37,99,235,0.13) 0%, rgba(30,64,175,0.06) 50%, transparent 80%)" }} />

          {/* ── Card body ── */}
          <div className="relative px-10 pt-12 pb-10">

            {/* ── Logo + Title ── */}
            <div className="flex flex-col items-center mb-10">

              {/* Icon */}
              <div className="relative mb-7">
                {/* Outer soft ring */}
                <div className="absolute rounded-2xl opacity-30"
                  style={{ inset: -12, border: "1px solid rgba(147,197,253,0.4)", borderRadius: 24 }} />
                {/* Animated pulse ring */}
                <div className="icon-ring absolute rounded-2xl"
                  style={{ inset: -6, border: "1px solid rgba(59,130,246,0.25)", borderRadius: 20 }} />

                <div
                  className="relative w-[58px] h-[58px] flex items-center justify-center shimmer-track"
                  style={{
                    borderRadius: 16,
                    background: "linear-gradient(140deg, #1d4ed8 0%, #1e40af 50%, #1e3a8a 100%)",
                    boxShadow: "0 0 0 1px rgba(147,197,253,0.25), 0 12px 36px rgba(29,78,216,0.65), 0 0 60px rgba(37,99,235,0.25)",
                  }}
                >
                  <div className="absolute inset-0 rounded-2xl"
                    style={{ background: "radial-gradient(circle at 30% 25%, rgba(255,255,255,0.22) 0%, transparent 60%)" }} />
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="relative z-10">
                    <path d="M12 2L3.5 6.5v5.5C3.5 17.1 7.1 22 12 23.5 16.9 22 20.5 17.1 20.5 12V6.5L12 2z"
                      stroke="rgba(255,255,255,0.9)" strokeWidth="1.6" strokeLinejoin="round"
                      fill="rgba(255,255,255,0.07)" />
                    <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              {/* Title */}
              <h1 className="m-0 leading-none text-center"
                style={{
                  fontSize: 26, fontWeight: 700, letterSpacing: "-0.025em",
                  background: "linear-gradient(135deg, #e0f2fe 0%, #bfdbfe 45%, #93c5fd 100%)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                Welcome Back
              </h1>
              <p className="mt-2.5 text-[13px] font-normal tracking-wide text-center"
                style={{ color: "rgba(148,163,184,0.55)" }}>
                Sign in to your secure dashboard
              </p>

              {/* Divider */}
              <div className="mt-7 flex items-center gap-3 w-full">
                <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.2))" }} />
                <div className="flex items-center gap-1.5">
                  <div className="w-1 h-1 rounded-full" style={{ background: "#3b82f6", boxShadow: "0 0 6px #3b82f6" }} />
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#60a5fa", boxShadow: "0 0 8px #60a5fa" }} />
                  <div className="w-1 h-1 rounded-full" style={{ background: "#93c5fd", boxShadow: "0 0 6px #93c5fd" }} />
                </div>
                <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, rgba(59,130,246,0.2), transparent)" }} />
              </div>
            </div>

            {/* ── Form ── */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">

              {/* Email */}
              <div>
                <div className="flex items-center gap-2 mb-2 ml-0.5">
                  <div className="w-[3px] h-3.5 rounded-full" style={{ background: "linear-gradient(180deg, #60a5fa, #3b82f6)" }} />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em]"
                    style={{ color: "rgba(147,197,253,0.65)" }}>
                    Email Address
                  </span>
                </div>

                <div className="relative">
                  {/* Left icon */}
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300"
                    style={{ color: focused === "email" ? "#60a5fa" : "rgba(100,116,139,0.4)" }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M3 7.5l9 5.5 9-5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>

                  <input
                    id="email" name="email" type="email" required
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    disabled={isLoading}
                    autoComplete="off"
                    className="w-full h-[52px] rounded-xl pl-11 pr-4 text-sm text-slate-200 outline-none transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-slate-700"
                    style={{
                      background: focused === "email" ? "rgba(37,99,235,0.07)" : "rgba(6,15,38,0.7)",
                      border: focused === "email" ? "1px solid rgba(96,165,250,0.45)" : "1px solid rgba(59,130,246,0.12)",
                      boxShadow: focused === "email" ? "0 0 0 3px rgba(59,130,246,0.09)" : "none",
                      boxSizing: "border-box",
                    }}
                  />

                  {/* Animated bottom accent */}
                  {focused === "email" && (
                    <div className="underline-bar absolute bottom-0 left-3 right-3 h-px rounded-full"
                      style={{ background: "linear-gradient(90deg, #3b82f6, #60a5fa, #93c5fd)" }} />
                  )}
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="flex items-center justify-between mb-2 mx-0.5">
                  <div className="flex items-center gap-2">
                    <div className="w-[3px] h-3.5 rounded-full" style={{ background: "linear-gradient(180deg, #93c5fd, #60a5fa)" }} />
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em]"
                      style={{ color: "rgba(147,197,253,0.65)" }}>
                      Password
                    </span>
                  </div>
                  <button type="button"
                    className="text-[10px] font-semibold uppercase tracking-wider border-none bg-transparent cursor-pointer transition-all duration-200"
                    style={{ color: "rgba(96,165,250,0.6)" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "rgba(147,197,253,0.9)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(96,165,250,0.6)")}>
                    Forgot password?
                  </button>
                </div>

                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300"
                    style={{ color: focused === "password" ? "#60a5fa" : "rgba(100,116,139,0.4)" }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="11" width="18" height="11" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      <circle cx="12" cy="16.5" r="1.2" fill="currentColor" />
                    </svg>
                  </div>

                  <input
                    id="password" name="password" type={showPassword ? "text" : "password"} required
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    onFocus={() => setFocused("password")}
                    onBlur={() => setFocused(null)}
                    disabled={isLoading}
                    autoComplete="new-password"
                    className="w-full h-[52px] rounded-xl pl-11 pr-12 text-sm text-slate-200 outline-none transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-slate-700"
                    style={{
                      background: focused === "password" ? "rgba(37,99,235,0.07)" : "rgba(6,15,38,0.7)",
                      border: focused === "password" ? "1px solid rgba(96,165,250,0.45)" : "1px solid rgba(59,130,246,0.12)",
                      boxShadow: focused === "password" ? "0 0 0 3px rgba(59,130,246,0.09)" : "none",
                      boxSizing: "border-box",
                    }}
                  />

                  <button type="button" onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-200 hover:bg-blue-500/10 border-none bg-transparent cursor-pointer"
                    style={{ color: "rgba(100,116,139,0.5)" }}>
                    {showPassword ? (
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                        <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19M1 1l22 22"
                          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    ) : (
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="1.5" />
                        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                    )}
                  </button>

                  {focused === "password" && (
                    <div className="underline-bar absolute bottom-0 left-3 right-3 h-px rounded-full"
                      style={{ background: "linear-gradient(90deg, #60a5fa, #93c5fd, #bfdbfe)" }} />
                  )}
                </div>
              </div>

              {/* ── Submit ── */}
              <div className="relative mt-1">
                {/* Diffused glow under btn */}
                <div className="absolute inset-x-6 h-8 bottom-[-10px] rounded-xl pointer-events-none transition-opacity duration-300"
                  style={{
                    background: "linear-gradient(90deg, #1d4ed8, #2563eb, #1e40af)",
                    filter: "blur(20px)",
                    opacity: isLoading ? 0.2 : 0.5,
                  }} />

                <button
                  type="submit"
                  disabled={isLoading}
                  className="relative w-full h-[52px] rounded-xl text-[14px] font-semibold text-white tracking-wide flex items-center justify-center gap-2.5 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.985] disabled:cursor-not-allowed disabled:opacity-60 overflow-hidden group border-none cursor-pointer"
                  style={{
                    background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 45%, #1e40af 100%)",
                    boxShadow: "0 4px 24px rgba(29,78,216,0.55), 0 0 0 1px rgba(147,197,253,0.2), inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -1px 0 rgba(0,0,0,0.15)",
                  }}
                >
                  {/* Shine on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: "linear-gradient(110deg, transparent 25%, rgba(255,255,255,0.1) 50%, transparent 75%)" }} />
                  {/* Top gloss */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] rounded-t-xl"
                    style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)" }} />

                  {isLoading ? (
                    <>
                      <svg className="spin" width="17" height="17" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
                        <path d="M12 2a10 10 0 0110 10" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                      </svg>
                      <span>Authenticating…</span>
                    </>
                  ) : (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4M10 17l5-5-5-5M15 12H3"
                          stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Sign In to Dashboard</span>
                      <svg className="ml-0.5 transition-transform duration-300 group-hover:translate-x-1 opacity-70"
                        width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* ── Footer ── */}
            <div className="mt-9">
              {/* Thin divider */}
              <div className="flex items-center gap-3 mb-5">
                <div className="flex-1 h-px" style={{ background: "rgba(59,130,246,0.1)" }} />
                <span className="text-[10px] uppercase tracking-[0.2em] font-medium"
                  style={{ color: "rgba(100,116,139,0.4)" }}>
                  Security
                </span>
                <div className="flex-1 h-px" style={{ background: "rgba(59,130,246,0.1)" }} />
              </div>

              {/* Badges */}
              <div className="flex items-center justify-center gap-3">
                {[
                  { label: "256-bit SSL", icon: "🔐", color: "rgba(59,130,246,0.15)", border: "rgba(59,130,246,0.25)", text: "rgba(147,197,253,0.75)" },
                  { label: "SOC 2 Type II", icon: "🛡️", color: "rgba(30,64,175,0.15)", border: "rgba(30,64,175,0.3)", text: "rgba(165,180,252,0.75)" },
                  { label: "GDPR Ready", icon: "✦", color: "rgba(14,116,144,0.12)", border: "rgba(14,116,144,0.25)", text: "rgba(125,211,252,0.75)" },
                ].map(({ label, icon, color, border, text }, i) => (
                  <div key={i}
                    className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg transition-all duration-200 hover:brightness-125"
                    style={{ background: color, border: `1px solid ${border}` }}>
                    <span className="text-[10px]">{icon}</span>
                    <span className="text-[9px] font-semibold uppercase tracking-wider" style={{ color: text }}>
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-center text-[10px] tracking-wide"
                style={{ color: "rgba(100,116,139,0.35)" }}>
                Your connection is encrypted and secure
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}