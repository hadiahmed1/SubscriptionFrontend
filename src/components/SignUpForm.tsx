import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  Avatar,
  Link,
  Paper,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useForm } from 'react-hook-form';
import api from '../utils/axiosInstace';

const signUp = async (data: SignUpData) => {
  try {
    const res = await api.post('/users', data);
    console.log(res.data);

  } catch (error) {
    console.log(error);
  }
  return;
};

type SignUpData = {
  username: string;
  email: string;
  password: string;
};

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpData>();

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} sx={{ mt: 8, p: 4, borderRadius: 3 }}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>

          <Box component="form" onSubmit={handleSubmit(signUp)} sx={{ mt: 3 }}>
            <TextField
              fullWidth
              label="Username"
              margin="normal"
              {...register('username', {
                required: 'Username is required',
              })}
              error={!!errors.username}
              helperText={errors.username?.message}
            />

            <TextField
              fullWidth
              label="Email"
              margin="normal"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Invalid email address',
                },
              })}
              error={!!errors.username}
              helperText={errors.username?.message}
            />

            <TextField
              fullWidth
              label="Password"
              type="password"
              margin="normal"
              {...register('password', { required: 'Password is required' })}
              error={!!errors.password}
              helperText={errors.password?.message}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 2 }}
            >
              Sign Up
            </Button>

            <Box mt={2} display="flex" justifyContent="flex-end">
              <Link href="/signin" variant="body2">
                Have an account? Sign In
              </Link>
            </Box>

          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default SignUpForm;

