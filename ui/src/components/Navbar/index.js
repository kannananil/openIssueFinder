import { AppBar, Typography } from '@mui/material';
import './index.css';

const Navbar = () => {
  return (
    <AppBar className='navbar' position='static'>
      <div className='navbar-left-side'>
        <img className='navbar-icon' src='https://img.icons8.com/material-rounded/96/null/github.png' alt='navbar-icon'/>
        <Typography className='navbar-title' variant='h6' color='text.secondary'>Open Issue Finder</Typography>
      </div>
      <img className='navbar-icon' src="https://img.icons8.com/material-rounded/96/null/user-male-circle.png" alt='avatar'/>
    </AppBar>
  )
};

export default Navbar;