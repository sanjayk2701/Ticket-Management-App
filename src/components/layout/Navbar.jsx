import { Menu } from 'lucide-react';

export default function Navbar({ onToggleSidebar }) {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 fixed top-0 left-0 right-0 z-30 h-16">
      <div className="flex items-center justify-between h-full px-4">
        <div className="flex items-center gap-4">
          <button
            onClick={onToggleSidebar}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors lg:hidden"
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
          <h1 className="text-xl font-semibold text-gray-800">Ticket Management System</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-medium">
            U
          </div>
        </div>
      </div>
    </nav>
  );
}
