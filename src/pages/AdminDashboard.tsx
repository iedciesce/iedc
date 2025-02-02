// import React, { useState, useEffect } from 'react';
// import { Routes, Route, Link, useNavigate } from 'react-router-dom';
// import { LayoutDashboard, Calendar, Newspaper, Image, Users, MessageSquare, LogOut } from 'lucide-react';

// const AdminDashboard = () => {
//   const [role, setRole] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const userRole = localStorage.getItem('role');
//     if (!userRole) {
//       navigate('/admin/login');
//     }
//     setRole(userRole || '');
//   }, [navigate]);

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('role');
//     navigate('/admin/login');
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex">
//       {/* Sidebar */}
//       <div className="w-64 bg-white shadow-md">
//         <div className="p-4">
//           <h2 className="text-xl font-bold text-blue-600">IEDC Admin</h2>
//           <p className="text-sm text-gray-600">Role: {role}</p>
//         </div>
//         <nav className="mt-4">
//           <Link
//             to="/admin/dashboard"
//             className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-50"
//           >
//             <LayoutDashboard className="h-5 w-5 mr-2" />
//             Dashboard
//           </Link>
//           <Link
//             to="/admin/dashboard/events"
//             className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-50"
//           >
//             <Calendar className="h-5 w-5 mr-2" />
//             Events
//           </Link>
//           <Link
//             to="/admin/dashboard/news"
//             className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-50"
//           >
//             <Newspaper className="h-5 w-5 mr-2" />
//             News
//           </Link>
//           <Link
//             to="/admin/dashboard/gallery"
//             className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-50"
//           >
//             <Image className="h-5 w-5 mr-2" />
//             Gallery
//           </Link>
//           {role === 'webdev' && (
//             <Link
//               to="/admin/dashboard/team"
//               className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-50"
//             >
//               <Users className="h-5 w-5 mr-2" />
//               Team
//             </Link>
//           )}
//           <Link
//             to="/admin/dashboard/messages"
//             className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-50"
//           >
//             <MessageSquare className="h-5 w-5 mr-2" />
//             Messages
//           </Link>
//           <button
//             onClick={handleLogout}
//             className="flex items-center px-4 py-2 text-red-600 hover:bg-red-50 w-full text-left"
//           >
//             <LogOut className="h-5 w-5 mr-2" />
//             Logout
//           </button>
//         </nav>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-8">
//         <Routes>
//           <Route path="/" element={<DashboardHome />} />
//           <Route path="/events" element={<EventsManager />} />
//           <Route path="/news" element={<NewsManager />} />
//           <Route path="/gallery" element={<GalleryManager />} />
//           <Route path="/team" element={<TeamManager />} />
//           <Route path="/messages" element={<MessagesManager />} />
//         </Routes>
//       </div>
//     </div>
//   );
// };

// // Placeholder components for dashboard sections
// const DashboardHome = () => <h2>Dashboard Overview</h2>;
// const EventsManager = () => <h2>Events Manager</h2>;
// const NewsManager = () => <h2>News Manager</h2>;
// const GalleryManager = () => <h2>Gallery Manager</h2>;
// const TeamManager = () => <h2>Team Manager</h2>;
// const MessagesManager = () => <h2>Messages Manager</h2>;

// export default AdminDashboard;
// AdminDashboard.tsx
import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import AdminLayout from './AdminLayout';  // Import the AdminLayout
import Addashboard from '../components/admin/addashboard';  // Import the Addashboard component
import EventPage from '../components/admin/adevent'; // Import the EventPage component
import Adgallery from '../components/admin/adgallery'
import Adnews from '../components/admin/adnews'

import Adteam from '../components/admin/adteam'
import AdminMessages from '../components/admin/admessage';

const AdminDashboard = () => {
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const userRole = localStorage.getItem('role');
    if (!userRole) {
      navigate('/admin/login');
    }
    setRole(userRole || '');
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    navigate('/admin/login');
  };

  return (
    <AdminLayout>
      <Routes>
        <Route path="/" element={<Addashboard />} />
        <Route path="/events" element={<EventPage />} />  {/* Updated route */}
        <Route path="/news" element={<Adnews />} />  {/* Updated route */}
        <Route path="/gallery" element={<Adgallery />} />  {/* Updated route */}
        <Route path="/teams" element={<Adteam/>} />  {/* Updated route */}
        <Route path="/messages" element={<AdminMessages/>} /> {/* Updated route */}
      </Routes>
    </AdminLayout>
  );
};

export default AdminDashboard;

