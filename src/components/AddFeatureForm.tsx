import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import api from '../utils/axiosInstace';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

type AddFeatureFormData = {
  name: string;
  description: string;
};

const AddFeatureForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AddFeatureFormData>();
  const navigate = useNavigate();
  const onSubmit = async (data: AddFeatureFormData) => {
    try {
      await api.post('/feature', data);
      toast.success("Feature Created Sucessfully")
      reset();
      navigate(-1)
    } catch (error) {
      toast.error('Failed to create feature')
      console.error('Failed to create feature:', error);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h6" gutterBottom>
          Add Feature
        </Typography>

        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <TextField
            fullWidth
            label="Name"
            margin="normal"
            {...register('name', { required: 'Name is required' })}
            error={!!errors.name}
            helperText={errors.name?.message}
          />

          <TextField
            fullWidth
            label="Description"
            margin="normal"
            multiline
            rows={4}
            {...register('description', {
              required: 'Description is required',
            })}
            error={!!errors.description}
            helperText={errors.description?.message}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 2 }}
            disabled={isSubmitting}
          >
            Add Feature
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default AddFeatureForm;
