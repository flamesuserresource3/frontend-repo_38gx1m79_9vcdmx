import { useState } from 'react';
import LoginHero from './components/LoginHero';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import TaskModal from './components/TaskModal';

export default function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [activeTask, setActiveTask] = useState(null);

  return (
    <div className="min-h-screen bg-[#0F0F10] text-white font-inter">
      {!authenticated ? (
        <div className="grid md:grid-cols-2 min-h-screen">
          {/* Left: Spline hero */}
          <div className="h-[50vh] md:h-auto">
            <LoginHero />
          </div>
          {/* Right: Login form */}
          <div className="h-full">
            <LoginForm onLogin={() => setAuthenticated(true)} />
          </div>
        </div>
      ) : (
        <>
          <Dashboard
            onOpenTask={(task) => setActiveTask(task)}
            onLogout={() => setAuthenticated(false)}
          />
          <TaskModal open={!!activeTask} task={activeTask} onClose={() => setActiveTask(null)} />
        </>
      )}
    </div>
  );
}
