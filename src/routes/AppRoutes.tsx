import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout';
import MainLayout from '../layouts/MainLayout';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import CandidatesUpload from '../pages/CandidatesUpload';
import CandidateDetails from '../pages/CandidateDetails';
import GenerateHallTicket from '../pages/GenerateHallTicket';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Login />} />
        </Route>

        <Route path="/" element={<MainLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="candidate-upload" element={<CandidatesUpload />} />
          <Route path="candidate-details" element={<CandidateDetails />} />
          <Route path="generate-hall-ticket" element={<GenerateHallTicket />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
