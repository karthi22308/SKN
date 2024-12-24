import React, { useState } from 'react';
import { Box, TextField, Button, CircularProgress } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const navigate = useNavigate(); // Hook for navigation

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('/api/validate', credentials);
      console.log('Login successful:', response.data);
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, margin: 'auto' }}>
      <TextField
        fullWidth
        margin="normal"
        label="Usernameeeeeeeeeeeeee"
        name="usernameweeeer"
        value={credentials.username}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        margin="normal"
        label="Password"
        type="password"
        name="password"
        value={credentials.password}
        onChange={handleChange}
      />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2, mt: 2 }}>
        <Button type="submit" variant="contained" color="primary" disabled={loading} fullWidth>
          {loading ? <CircularProgress size={24} /> : 'Login'}
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => navigate('/Register')}
          fullWidth
        >
          Register
        </Button>
      </Box>
    </Box>
  );
};

export default LoginForm;
