import { Link, useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    {
      name: 'Dashboard',
      path: '/dashboard',
      icon: 'mdi:view-dashboard-outline',
    },
    {
      name: 'Candidates Upload',
      path: '/candidate-upload',
      icon: 'mdi:file-upload-outline',
    },
    {
      name: 'Candidate Details',
      path: '/candidate-details',
      icon: 'mdi:account-box-outline',
    },
    {
      name: 'Generate Hall Ticket',
      path: '/generate-hall-ticket',
      icon: 'mdi:ticket-confirmation-outline',
    },
  ];

  return (
    <div className="w-60 bg-gray-900 text-white h-screen flex flex-col shadow-lg">
      <div className="p-6 border-b border-gray-700">
        <h2 className="text-2xl font-bold">Admin Panel</h2>
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  <Icon icon={item.icon} width="20" height="20" />
                  <span>{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
