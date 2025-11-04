import { useState } from 'react';

export default function LoginForm({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onLogin?.({ email });
    }, 800);
  };

  return (
    <div className="h-full w-full flex items-center justify-center p-8">
      <div className="w-full max-w-md">
        <div className="p-[1px] rounded-2xl bg-gradient-to-r from-[#4271FD] to-[#841FEA]">
          <div className="rounded-2xl bg-[#0F0F10]/70 backdrop-blur-xl p-8">
            <div className="mb-8">
              <h1 className="text-3xl font-semibold text-white">Welcome back</h1>
              <p className="mt-2 text-sm text-[#A0A0A0]">Sign in to continue to Taskify</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label className="block text-sm text-[#A0A0A0]">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="you@company.com"
                  className="w-full rounded-xl bg-white/5 text-white placeholder:text-white/30 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#4271FD] px-4 py-3"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm text-[#A0A0A0]">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="••••••••"
                  className="w-full rounded-xl bg-white/5 text-white placeholder:text-white/30 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#841FEA] px-4 py-3"
                />
              </div>
              <div className="flex items-center justify-between text-sm">
                <label className="inline-flex items-center gap-2 text-[#A0A0A0]">
                  <input type="checkbox" className="rounded border-white/20 bg-transparent text-[#4271FD]" />
                  Remember me
                </label>
                <button type="button" className="text-[#FFD580] hover:text-white transition-colors">Forgot password?</button>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="relative w-full inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#4271FD] to-[#841FEA] text-white font-medium py-3 transition-transform hover:scale-[1.01] active:scale-[0.99] shadow-[0_0_24px_6px_rgba(66,113,253,0.35)] disabled:opacity-70"
              >
                {loading ? 'Signing in…' : 'Sign in'}
              </button>

              <button
                type="button"
                onClick={() => onLogin?.({ guest: true })}
                className="w-full rounded-xl border border-white/10 bg-white/5 text-white py-3 hover:border-[#FFD580] hover:text-[#FFD580] transition"
              >
                Continue as guest
              </button>
            </form>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-[#A0A0A0]">By continuing you agree to our Terms & Privacy Policy.</p>
      </div>
    </div>
  );
}
