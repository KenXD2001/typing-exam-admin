import { Icon } from '@iconify/react';

const Dashboard = () => {
  const stats = [
    {
      label: 'Total Candidates',
      value: 2560,
      icon: 'mdi:account-multiple-outline',
      bg: 'bg-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      label: 'Hall Tickets Generated',
      value: 1984,
      icon: 'mdi:ticket-confirmation-outline',
      bg: 'bg-green-100',
      iconColor: 'text-green-600',
    },
    {
      label: 'Total Admin Users',
      value: 5,
      icon: 'mdi:shield-account-outline',
      bg: 'bg-purple-100',
      iconColor: 'text-purple-600',
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Welcome to Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className={`flex items-center gap-4 p-6 rounded-xl shadow-sm border ${stat.bg}`}
          >
            <div className={`text-4xl ${stat.iconColor}`}>
              <Icon icon={stat.icon} />
            </div>
            <div>
              <div className="text-lg font-medium text-gray-700">{stat.label}</div>
              <div className="text-2xl font-semibold text-gray-900">{stat.value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
