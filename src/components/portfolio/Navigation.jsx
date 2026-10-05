import React from 'react';
import { User, Briefcase, Code, Clock, Mail, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { id: 'hero', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'portfolio', label: 'Work', icon: Briefcase },
  { id: 'skills', label: 'Skills', icon: Code },
  { id: 'experience', label: 'Experience', icon: Clock },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export default function Navigation({ activeSection, onNavigate }) {
  return (
    <nav className="fixed left-0 top-0 h-full w-20 lg:w-64 bg-slate-900 text-white z-50 flex flex-col">
      {/* Logo */}
      <div className="p-4 lg:p-6 border-b border-slate-800">
        <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center mx-auto lg:mx-0">
          <span className="text-xl lg:text-2xl font-bold text-white">MH</span>
        </div>
        <p className="hidden lg:block mt-3 text-sm text-slate-400">Molly Hickey</p>
      </div>

      {/* Nav Items */}
      <div className="flex-1 py-6">
        <ul className="space-y-1 px-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => onNavigate(item.id)}
                  className={cn(
                    "w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200",
                    "hover:bg-slate-800 group",
                    isActive && "bg-gradient-to-r from-orange-500/20 to-amber-500/20 text-orange-400"
                  )}
                >
                  <Icon className={cn(
                    "w-5 h-5 flex-shrink-0 mx-auto lg:mx-0",
                    isActive ? "text-orange-400" : "text-slate-400 group-hover:text-white"
                  )} />
                  <span className={cn(
                    "hidden lg:block text-sm font-medium",
                    isActive ? "text-orange-400" : "text-slate-300 group-hover:text-white"
                  )}>
                    {item.label}
                  </span>
                  {isActive && (
                    <div className="hidden lg:block ml-auto w-1.5 h-1.5 rounded-full bg-orange-400" />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-slate-800">
        <p className="hidden lg:block text-xs text-slate-500 text-center">
          © 2025 Molly Hickey
        </p>
      </div>
    </nav>
  );
}
