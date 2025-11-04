import { useState } from 'react';
import { Home, ListTodo, Settings, Plus, User } from 'lucide-react';

export default function Dashboard({ onOpenTask, onLogout }) {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Design landing hero',
      description: 'Refine the hero section with gradient borders and glow.',
      status: 'In Progress',
      tag: 'Design',
    },
    {
      id: 2,
      title: 'Write API endpoints',
      description: 'CRUD for tasks, comments, and activity feed.',
      status: 'Backlog',
      tag: 'Backend',
    },
    {
      id: 3,
      title: 'Interaction polish',
      description: 'Micro-interactions on hover and Press states.',
      status: 'Review',
      tag: 'UI/UX',
    },
  ]);

  const addTask = () => {
    const newTask = {
      id: Date.now(),
      title: 'New task',
      description: 'Describe your task here',
      status: 'Backlog',
      tag: 'General',
    };
    setTasks((t) => [newTask, ...t]);
  };

  return (
    <div className="min-h-screen bg-[#0F0F10] text-white">
      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden md:flex md:w-72 flex-col gap-3 p-6 border-r border-white/5 bg-[#0F0F10]/60 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="size-3 rounded-full bg-[#FFD580] shadow-[0_0_20px_6px_rgba(255,213,128,0.6)]" />
            <span className="text-lg font-semibold">Taskify</span>
          </div>
          <nav className="mt-8 space-y-2">
            <NavItem icon={Home} label="Home" active />
            <NavItem icon={ListTodo} label="My Tasks" />
            <NavItem icon={User} label="Profile" />
            <NavItem icon={Settings} label="Settings" />
          </nav>
          <div className="mt-auto">
            <button onClick={onLogout} className="w-full text-left text-sm text-white/60 hover:text-white">Log out</button>
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1 p-6">
          <header className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold">Dashboard</h1>
              <p className="text-sm text-[#A0A0A0]">Stay on top of your work with focus</p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={addTask}
                className="inline-flex items-center gap-2 rounded-xl bg-[#FFD580] text-black px-4 py-2 hover:brightness-95 transition"
              >
                <Plus size={18} /> Add Task
              </button>
              <div className="p-[1px] rounded-xl bg-gradient-to-r from-[#4271FD] to-[#841FEA]">
                <div className="rounded-xl bg-white/5 px-3 py-2 text-sm text-white/80">Focus: ON</div>
              </div>
            </div>
          </header>

          {/* Task lists */}
          <section className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {tasks.map((task) => (
              <button
                key={task.id}
                onClick={() => onOpenTask(task)}
                className="text-left group p-[1px] rounded-2xl bg-gradient-to-r from-[#4271FD] to-[#841FEA] transition-transform hover:scale-[1.01]"
              >
                <div className="rounded-2xl bg-[#0F0F10]/70 backdrop-blur-xl p-5 h-full">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#A0A0A0]">{task.tag}</span>
                    <span className="text-xs rounded-full border border-white/10 px-2 py-0.5 text-white/70">
                      {task.status}
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-medium text-white group-hover:text-white">{task.title}</h3>
                  <p className="mt-1 text-sm text-[#A0A0A0] line-clamp-2">{task.description}</p>
                </div>
              </button>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
}

function NavItem({ icon: Icon, label, active }) {
  return (
    <button
      className={`w-full inline-flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition ${
        active
          ? 'bg-white/5 text-white'
          : 'text-white/70 hover:bg-white/5 hover:text-white'
      }`}
    >
      <Icon size={18} /> {label}
    </button>
  );
}
