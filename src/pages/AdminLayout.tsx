// AdminLayout.tsx
import React from 'react';
import { Menu, X, LayoutDashboard, Calendar, Image, Newspaper, Users, MessageSquare, LogOut, FileImage } from 'lucide-react';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const menuItems = [
    { icon: <LayoutDashboard className="w-5 h-5" />, label: 'Dashboard', href: '/admin/dashboard' },
    { icon: <Calendar className="w-5 h-5" />, label: 'Events', href: '/admin/dashboard/events' },
    { icon: <Image className="w-5 h-5" />, label: 'Gallery', href: '/admin/dashboard/gallery' },
    { icon: <Newspaper className="w-5 h-5" />, label: 'News', href: '/admin/dashboard/news' },
    { icon: <Users className="w-5 h-5" />, label: 'Teams', href: '/admin/dashboard/teams' },
    { icon: <MessageSquare className="w-5 h-5" />, label: 'Messages', href: '/admin/dashboard/messages' },
    { icon: <FileImage className="w-5 h-5" />, label: 'Image Converter', href: 'https://img-converter-lime.vercel.app/' }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 bg-white shadow-lg w-64 hidden md:block">
        <div className="flex items-center justify-between h-16 px-6 border-b">
          <span className="text-xl font-bold text-gray-800">IES | IEDC Admin</span>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="flex items-center space-x-3 px-4 py-2.5 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
            <li className="pt-4 mt-4 border-t">
              <button className="flex items-center space-x-3 px-4 py-2.5 rounded-lg hover:bg-red-50 text-gray-700 hover:text-red-600 w-full">
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Mobile Header */}
      <div className="md:hidden bg-white shadow-lg">
        <div className="flex items-center justify-between h-16 px-4">
          <span className="text-xl font-bold text-gray-800">IEDC Admin</span>
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="px-4 pb-4">
            <ul className="space-y-2">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="flex items-center space-x-3 px-4 py-2.5 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
              <li className="pt-4 mt-4 border-t">
                <button className="flex items-center space-x-3 px-4 py-2.5 rounded-lg hover:bg-red-50 text-gray-700 hover:text-red-600 w-full">
                  <LogOut className="w-5 h-5" />
                  <span>Logout</span>
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>

      {/* Main Content */}
      <main className="md:ml-64 min-h-screen">
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
};

export default AdminLayout;
