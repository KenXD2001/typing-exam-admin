import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div className="flex h-[100dvh]">
      <div className="flex-1 bg-gray-200 rounded-[40px] m-4">
        {/* Backgorund Image Here */}
      </div>
      <div className="flex-1 flex items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
