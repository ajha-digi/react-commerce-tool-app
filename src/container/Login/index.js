import React from 'react'
import {
  Box,
  TextField,
  Grid,
  Typography,
  Button,
  FormControlLabel,
  Checkbox
} from '@mui/material';

import SendIcon from '@mui/icons-material/Send';

function Login() {
  return (
    <Box sx={{ flexGrow: 1 }} component="form">
      <Grid container spacing={2}>

        <Grid container item lg={6} md={12} >
          <Typography variant="h4" gutterBottom>
            Login
          </Typography>
          <Grid item xs={12}>
            <TextField
              required
              id="outlined-required"
              label="EMAIL"
              sx={{ m: 1, width: '100ch' }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-password-input"
              label="PASSWORD"
              type="password"
              autoComplete="current-password"
              sx={{ m: 1, width: '100ch' }}
            />
          </Grid>

          <Button variant="contained" endIcon={<SendIcon />}>
            Login
          </Button>

        </Grid>

        <Grid container item lg={6} md={12}>
          <Typography variant="h3" gutterBottom>
            Register
          </Typography>
          <Grid container item xs={12}>
            <Grid item lg={6} xs={12}>
              <TextField
                required
                id="outlined-required"
                label="FIRST NAME"
                sx={{ m: 1, width: { xs: '100ch', lg: "50ch" } }}
              />
            </Grid>
            <Grid item lg={6} xs={12}>
              <TextField
                required
                id="outlined-required"
                label="SECOND NAME"
                sx={{ m: 1, width: { xs: '100ch', lg: "45ch" } }}
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="outlined-required"
              label="EMAIL"
              sx={{ m: 1, width: '100ch' }}
            />
          </Grid>
          <Grid container item xs={12}>
            <Grid item lg={6} xs={12}>
              <TextField
                required
                id="outlined-required"
                label="PASSWORD"
                sx={{ m: 1, width: { xs: '100ch', lg: "50ch" } }}
              />
            </Grid>
            <Grid item lg={6} xs={12}>
              <TextField
                required
                id="outlined-required"
                label="REPEAT PASSWORD"
                sx={{ m: 1, width: { xs: '100ch', lg: "45ch" } }}
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel control={<Checkbox defaultChecked />} label="AGREE TO" />
          </Grid>
          
          <Button variant="contained" endIcon={<SendIcon />}>
            Register
          </Button>
        </Grid>
      </Grid>
    </Box>
  );

}

export default Login;
