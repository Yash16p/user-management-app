import React from 'react';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = () => {
  const user = useSelector((state) => state.user.user);

  // Example recent activities
  const recentActivities = [
    'Logged in',
    'Viewed Profile',
    'Updated Profile Picture',
    'Changed Password'
  ];

  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h2>Welcome, {user?.email || 'User'}!</h2>
      </div>
      <div className="row">
        <div className="col-md-12 mb-4">
          <div className="card shadow-lg" style={{ backgroundColor: '#f8f9fa' }}>
            <div className="card-body">
              <h5 className="card-title" style={{ color: '#007bff' }}>Recent Activity</h5>
              <ul className="list-group">
                {recentActivities.map((activity, index) => (
                  <li key={index} className="list-group-item">
                    {activity}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-12 mb-4">
          <div className="card shadow-lg" style={{ backgroundColor: '#f8f9fa' }}>
            <div className="card-body">
              <h5 className="card-title" style={{ color: '#007bff' }}>Profile Overview</h5>
              <p className="card-text">Here you can view and edit your profile information.</p>
              {/* Profile details can be shown here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
