import { X } from 'lucide-react';

export default function TaskModal({ open, onClose, task }) {
  if (!open || !task) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-xl p-[1px] rounded-3xl bg-gradient-to-r from-[#4271FD] to-[#841FEA]">
        <div className="relative rounded-3xl bg-[#0F0F10]/80 backdrop-blur-2xl p-6">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-white/70 hover:text-white"
            aria-label="Close"
          >
            <X size={20} />
          </button>

          <div className="mb-4">
            <span className="inline-block rounded-full bg-white/5 px-3 py-1 text-xs text-[#A0A0A0] border border-white/10">
              {task.status}
            </span>
            <h3 className="mt-3 text-2xl font-semibold text-white">{task.title}</h3>
            <p className="mt-1 text-sm text-[#A0A0A0]">{task.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button className="rounded-xl bg-gradient-to-r from-[#4271FD] to-[#841FEA] text-white py-3 hover:opacity-95 transition">
              Mark as Done
            </button>
            <button className="rounded-xl bg-[#FFD580] text-black py-3 hover:brightness-95 transition">
              Edit Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
