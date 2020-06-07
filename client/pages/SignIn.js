import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import MaterialLink from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import PetsIcon from '@material-ui/icons/Pets';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import Main from './Main';
import { Link } from 'react-router-dom';
import Styles from '../../styles.css';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <MaterialLink color="inherit" href="https://material-ui.com/">
        Pet-Match, LLC
      </MaterialLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    elevation: 3,
    marginTop: theme.spacing(9),
    display: 'flex',
    // aligns input fields vertically
    flexDirection: 'column',
    // centers our pawprint icon
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    // changes our icon color
    backgroundColor: theme.palette.success.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
}));

export default function SignIn() {
  const classes = useStyles();

  const handleClick = (e) => {
    let getEmail = document.getElementById('password');
    e.preventDefault();
    console.log(getEmail.value);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <PetsIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Link
            className="signinButton"
            to="/main"
            type="submit"
            variant="contained"
            color="primary"
          >
            Sign In
          </Link>
          <Grid container>
            <Grid item xs>
              {/* forgot password route */}
              <MaterialLink href="#" variant="body2">
                Forgot password?
              </MaterialLink>
            </Grid>
            <Grid item>
              {/* link to sign up route */}
              <MaterialLink href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </MaterialLink>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}