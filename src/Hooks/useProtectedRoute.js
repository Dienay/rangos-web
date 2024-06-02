import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useProtectedRoute = () => {
  const navigate = useNavigate();
  const token = window.localStorage.getItem('token');

  useEffect(() => {
    if (token === null) {
      navigate('/login');
    }
  }, [navigate, token]);

  return token;
};

export default useProtectedRoute;
