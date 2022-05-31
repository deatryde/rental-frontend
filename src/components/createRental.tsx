import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Grid from '@mui/material/Grid';
import { BASE_URL } from '../constants';
import HTTP from '../utils/httpInstances';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export default function BasicModal() {
  const authToken = localStorage.getItem('access-token');
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [rentals, setRentals] = React.useState([])

  const fetchRentals = async () => {
    const { data } = await HTTP.get(`${BASE_URL}/rental`,  { headers: { Authorization: `Bearer ${authToken}`} })
    setRentals(data)
  }

  React.useEffect(() => {
    fetchRentals()
  }, [])


  const { handleChange, handleSubmit, touched, errors } = useFormik({
    initialValues: {
      title: '',
      address: '',
      size: '',
      rooms: '',
      rent: '',
    },
    validationSchema: Yup.object({
      title: Yup.string().min(8).max(255).required('Password is required'),
      address: Yup.string().min(8).max(255).required('Address is required'),
      rooms: Yup.string().min(8).max(255).required('Rooms is required'),
    }),
    onSubmit: async (values) => {
      try {
        await HTTP.post(`${BASE_URL}/rental`, values, { headers: { Authorization: `Bearer ${authToken}`} })
      } catch (error) {
        console.log(error)
      }
    },
  });

  return (
    <div>
      <Button onClick={handleOpen} variant='contained'>Create Rental</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              error={errors.title && touched.title ? true : false}
              margin="normal"
              required
              fullWidth
              id="title"
              onChange={handleChange('title')}
              label="Title"
              name="title"
              autoComplete="title"
              helperText={errors.title}
              autoFocus
            />
            <TextField
              error={errors.address && touched.address ? true : false}
              margin="normal"
              required
              fullWidth
              name="address"
              label="Address"
              type="address"
              onChange={handleChange('address')}
              id="address"
              autoComplete="current-address"
              helperText={errors.address}
            />
            <TextField
              error={errors.rooms && touched.rooms ? true : false}
              margin="normal"
              required
              fullWidth
              name="rooms"
              label="Rooms"
              type="rooms"
              onChange={handleChange('rooms')}
              id="rooms"
              autoComplete="current-rooms"
              helperText={errors.rooms}
            />
            <TextField
              error={errors.size && touched.size ? true : false}
              margin="normal"
              required
              fullWidth
              name="size"
              label="Size"
              type="size"
              onChange={handleChange('size')}
              id="size"
              autoComplete="current-size"
              helperText={errors.size}
            />
            <TextField
              error={errors.rent && touched.rent ? true : false}
              margin="normal"
              required
              fullWidth
              name="rent"
              label="Rent"
              type="rent"
              onChange={handleChange('rent')}
              id="rent"
              autoComplete="current-rent"
              helperText={errors.rent}
            />
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={6}>
                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                  Create
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button onClick={() => setOpen(false)} fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}