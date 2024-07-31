import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../redux/userSlice';
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simplified register logic without validation
    dispatch(login({ email, name }));
    navigate('/dashboard');
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card shadow-lg" style={{ width: '400px', backgroundColor: '#f8f9fa' }}>
        <div className="card-body">
          <h2 className="card-title text-center mb-4" style={{ color: '#007bff' }}>Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label style={{ color: '#007bff' }}>Name</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ borderColor: '#007bff' }}
              />
            </div>
            <div className="form-group mb-3">
              <label style={{ color: '#007bff' }}>Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ borderColor: '#007bff' }}
              />
            </div>
            <div className="form-group mb-3">
              <label style={{ color: '#007bff' }}>Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ borderColor: '#007bff' }}
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block" style={{ backgroundColor: '#007bff', borderColor: '#007bff' }}>
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
