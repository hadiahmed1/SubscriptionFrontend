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
import useUser from '../hooks/useUser';


type SignInData = {
  username: string;
  password: string;
};

const SignInForm = () => {
  const { setUser } = useUser();
  const signIn = async (data: SignInData) => {
    try {
      const res = await api.post('/auth/token', data);
      console.log(res.data);
      setUser(res.data.user);
    } catch (error) {
      console.log(error);
    }
    return;
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInData>();

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} sx={{ mt: 8, p: 4, borderRadius: 3 }}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>

          <Box component="form" onSubmit={handleSubmit(signIn)} sx={{ mt: 3 }}>
            <TextField
              fullWidth
              label="Email Address or Username"
              margin="normal"
              {...register('username', {
                required: 'Email is required',
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
              Sign In
            </Button>

            <Box mt={2} display="flex" justifyContent="flex-end">
              <Link href="/signup" variant="body2">
                Don't have an account? Sign Up
              </Link>
            </Box>

          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default SignInForm;

