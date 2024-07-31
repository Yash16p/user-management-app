import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../redux/userSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const AccountPage = () => {
  const user = useSelector((state) => state.user.user);
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUser({ name, email }));
      toast.success("Updated successfully!");
    } catch (error) {
      toast.error("Update failed! Please try again.");
    }
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card shadow-lg" style={{ width: '400px', backgroundColor: '#f8f9fa' }}>
        <div className="card-body">
          <h2 className="card-title text-center mb-4" style={{ color: '#007bff' }}>Account Information</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label style={{ color: '#007bff' }}>Name</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ borderColor: '#007bff' }}
                required
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
                required
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block" style={{ backgroundColor: '#007bff', borderColor: '#007bff' }}>
              Update
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AccountPage;
