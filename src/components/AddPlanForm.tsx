import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  CircularProgress,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import api from '../utils/axiosInstace';
import  useUser  from '../hooks/useUser'; // adjust import as needed

type Feature = {
  id: string;
  name: string;
  description: string;
};

type PlanFormData = {
  name: string;
  description: string;
  cost: number;
  discount: number;
  validity: number;
  feature_ids: string[];
};

const AddPlanForm = () => {
  const { user } = useUser();
  const [features, setFeatures] = useState<Feature[]>([]);
  const [loading, setLoading] = useState(true);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<PlanFormData>({
    defaultValues: {
      feature_ids: [],
    },
  });

  useEffect(() => {
    const fetchFeatures = async () => {
      try {
        const res = await api.get(`feature/${user?.id}`);
        setFeatures(res.data);
      } catch (error) {
        console.error('Failed to fetch features', error);
      } finally {
        setLoading(false);
      }
    };

    if (user?.id) fetchFeatures();
  }, [user]);

  const onSubmit = async (data: PlanFormData) => {
    try {
      const res = await api.post('/plan', data);
      console.log('Plan created:', res.data);
      reset();
    } catch (error) {
      console.error('Error creating plan:', error);
    }
  };

  if (loading) return <CircularProgress />;

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h6" gutterBottom>
          Create New Plan
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
            rows={3}
            {...register('description', { required: 'Description is required' })}
            error={!!errors.description}
            helperText={errors.description?.message}
          />

          <TextField
            fullWidth
            type="number"
            label="Cost"
            margin="normal"
            {...register('cost', { valueAsNumber: true })}
          />

          <TextField
            fullWidth
            type="number"
            label="Discount (%)"
            margin="normal"
            {...register('discount', { valueAsNumber: true })}
          />

          <TextField
            fullWidth
            type="number"
            label="Validity (in days)"
            margin="normal"
            {...register('validity', {
              valueAsNumber: true,
              required: 'Validity is required',
            })}
            error={!!errors.validity}
            helperText={errors.validity?.message}
          />

          <Typography variant="subtitle1" mt={2}>
            Select Features
          </Typography>
          <FormGroup>
            <Controller
              name="feature_ids"
              control={control}
              render={({ field }) => (
                <>
                  {features.map((feature) => (
                    <FormControlLabel
                      key={feature.id}
                      control={
                        <Checkbox
                          checked={field.value.includes(feature.id)}
                          onChange={(e) => {
                            const checked = e.target.checked;
                            const value = feature.id;
                            const newValue = checked
                              ? [...field.value, value]
                              : field.value.filter((v) => v !== value);
                            field.onChange(newValue);
                          }}
                        />
                      }
                      label={feature.name}
                    />
                  ))}
                </>
              )}
            />
          </FormGroup>

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 3 }}
            disabled={isSubmitting}
          >
            Create Plan
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default AddPlanForm;
