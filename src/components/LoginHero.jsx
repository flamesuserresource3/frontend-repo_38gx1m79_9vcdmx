import Spline from '@splinetool/react-spline';

export default function LoginHero() {
  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      {/* Soft gradient glow overlay (does not block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0F0F10]/60 via-transparent to-[#0F0F10]/50" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0F0F10] to-transparent" />
      <div className="pointer-events-none absolute top-6 left-6 text-white/90">
        <div className="inline-flex items-center gap-2">
          <div className="size-2 rounded-full bg-[#FFD580] shadow-[0_0_20px_6px_rgba(255,213,128,0.6)]" />
          <span className="text-sm tracking-widest uppercase text-white/70">Taskify</span>
        </div>
        <h2 className="mt-3 text-2xl font-semibold text-white">Futuristic Productivity</h2>
        <p className="mt-1 max-w-sm text-sm text-white/60">
          Organize, track, and focus. A minimalist workspace with an energetic edge.
        </p>
      </div>
    </div>
  );
}
