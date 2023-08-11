import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import cs from '../assets/images/cs.jpg';
import school from '../assets/images/school.jpg';
import js from '../assets/images/js.webp';
import art from '../assets/images/art.jpg';
import swm from '../assets/images/swm.jpg';
import trek from '../assets/images/trek.jpg';
import grd from '../assets/images/grd.webp';
import cking from '../assets/images/cking.webp';
import scr from '../assets/images/scr.jpg';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';

import {
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TableCell,
  TableRow,
} from '@mui/material';

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [classNames, setClassNames] = React.useState([]);
  const [className, setClassName] = React.useState('');
  const [totalStudents, setTotalStudents] = React.useState();
  const [totalClasses, setTotalClasses] = React.useState();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  React.useEffect(() => {
    fetch('http://localhost:1010/dashboard/')
      .then((res) => res.json())
      .then((result) => {
        console.log('totalClasses    ', result.totalClasses);
        setTotalClasses(result.totalClasses);
        console.log('totalStudents    ', result.totalStudents);
        setTotalStudents(result.totalStudents);
      });
  }, []);

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {['ClassName'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              component={Link}
              to={text === 'ClassName' ? '/className' : '#'}
            >
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Student'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              component={Link}
              to={text === 'Student' ? '/student' : '#'}
            >
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Bus'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton component={Link} to={text === 'Bus' ? '/bus' : '#'}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Divider />
      <List>
        {['Fee'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton component={Link} to={text === 'Fee' ? '/fee' : '#'}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Divider />
      <List>
        {['Teacher'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              component={Link}
              to={text === 'Teacher' ? '/teacher' : '#'}
            >
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Divider />
      <List>
        {['Attendence'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              component={Link}
              to={text === 'Attendence' ? '/attendence' : '#'}
            >
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Divider />
      <List>
        {['Subject'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              component={Link}
              to={text === 'Subject' ? '/subject' : '#'}
            >
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />

      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const bull = (
    <Box
      component='span'
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          position='fixed'
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              edge='start'
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' noWrap component='div'>
              School
            </Typography>
          </Toolbar>
        </AppBar>

        <Box
          component='nav'
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label='mailbox folders'
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant='temporary'
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant='permanent'
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
            <Link to='/learn'>
              <Typography variant='body3'>LEARN</Typography>
            </Link>
          </Drawer>
        </Box>

        <Box
          component='main'
          sx={{
            flexGrow: 1,

            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          {/* <Link to={'/link'}>
            <Typography variant='body3'>LEARN</Typography>
          </Link> */}

          <Grid container p={2}>
            {/* <Grid item xs={6} md={2} p={1} pl={11}>
              <img src={logo} width='70px'></img>
            </Grid> */}
            <Grid
              item
              p={2}
              xs={0}
              md={8}
              sx={{ display: { xs: 'none', lg: 'block' } }}
            >
              <Stack
                direction='row'
                spacing={9}
                sx={{ color: 'white', fontWeight: 'bold' }}
                className='navButtons'
              >
                <Link to='/learn'>
                  <Typography variant='body3'>LEARN</Typography>
                </Link>
                <Link to='/blog'>
                  <Typography variant='body3'>BLOG</Typography>
                </Link>
                <Link to='/bookmarks'>
                  <Typography variant='body3'>BOOKMARKS</Typography>
                </Link>
                <Link to='/examinations'>
                  <Typography variant='body3'>Examinations</Typography>
                </Link>
                <Link to='/management'>
                  <Typography variant='body3'>Management</Typography>
                </Link>
                <Link to='/about'>
                  <Typography variant='body3'>ABOUT</Typography>
                </Link>
              </Stack>
            </Grid>

            <Grid item xs={6} md={2} spacing={9} textAlign='right' mt={1}>
              <TwitterIcon />
              <InstagramIcon />
              <FacebookIcon />
              <Button variant='outlined' className='button' color='error'>
                Let's Talk
              </Button>
            </Grid>
          </Grid>
          <hr
            style={{
              backgroundColor: 'black',
              height: '3px',
              marginTop: '5px',
              marginLeft: '30px',
              marginRight: '100px',
            }}
          />

          {/* <Grid container pl={2}>
            <Grid item xs={7} mt={13}>
              <Stack direction='row' sx={{ marginLeft: '91px' }}>
                <img src={cs} width='300px' height='150px'></img>
                <Grid ml={3}>
                  <Typography>9 December 10:00 am </Typography>
                  <Typography sx={{ fontWeight: 'bold' }}>
                    Technology today is evolving at a rapid pace, enabling
                    faster change and progress,
                    <br /> causing an acceleration of the rate of change.
                    However, it is not only technology trends and <br />{' '}
                    emerging technologies that are evolving
                  </Typography>
                  <Link to='/tech' style={{ textDecoration: 'none' }}>
                    <Typography>Read more...</Typography>
                  </Link>
                </Grid>
              </Stack>
              <Stack direction='row' mt={3} sx={{ marginLeft: '91px' }}>
                <img src={js} width='300px' height='170px'></img>
                <Grid ml={3}>
                  <Typography>9 December 11:00 am</Typography>
                  <Typography sx={{ fontWeight: 'bold' }}>
                    The JavaScript family is ever-evolving and is set to launch
                    new JavaScript features in June 2022. The ES2022 will be the
                    13th edition of features after it was initially launched in
                    1997. The ES2022 features that reach the stage 4
                    verification are added to the JavaScript family.
                  </Typography>
                  <Link to='/javascript' style={{ textDecoration: 'none' }}>
                    <Typography>Read more...</Typography>
                  </Link>
                </Grid>
              </Stack>
            </Grid>
          </Grid>
          <hr
            style={{
              backgroundColor: 'black',
              height: '3px',
              marginTop: '5px',
              marginLeft: '30px',
              marginRight: '100px',
            }}
          />
          <Grid item xs={7} p={2}>
            <Typography
              variant='h5'
              sx={{ fontWeight: 'bold', mb: '11px', pl: '91px' }}
            >
              Extracurricular Activities
            </Typography>
          </Grid>
          <Grid
            item
            xs={5}
            ml={13}
            sx={{
              display: 'flex',

              alignItems: 'center',
            }}
          >
            <Stack direction='column'>
              <img src={art} width='300px' height='200px'></img>
              <Typography>
                They are an aspect of any famous <br />
                venture. It leverages the company's <br />
                growth and boosts its economic power.
                <br /> Moreover, they support inventions
                <br /> and they create a multitude of <br />
                career opportunities
              </Typography>
            </Stack>
            <Stack direction='column' pl='39px'>
              <img src={swm} width='300px' height='200px'></img>
              <Typography>
                They are an aspect of any famous <br />
                venture. It leverages the company's <br />
                growth and boosts its economic power.
                <br /> Moreover, they support inventions
                <br /> and they create a multitude of <br />
                career opportunities
              </Typography>
            </Stack>
            <Stack direction='column' pl='39px'>
              <img src={trek} width='300px' height='200px'></img>
              <Typography>
                They are an aspect of any famous <br />
                venture. It leverages the company's <br />
                growth and boosts its economic power.
                <br /> Moreover, they support inventions
                <br /> and they create a multitude of <br />
                career opportunities
              </Typography>
            </Stack>
          </Grid>

          <Grid
            item
            xs={5}
            ml={13}
            mt={9}
            mb={3}
            sx={{
              display: 'flex',

              alignItems: 'center',
            }}
          >
            <Stack direction='column'>
              <img src={grd} width='300px' height='200px'></img>
              <Typography>
                They are an aspect of any famous <br />
                venture. It leverages the company's <br />
                growth and boosts its economic power.
                <br /> Moreover, they support inventions
                <br /> and they create a multitude of <br />
                career opportunities
              </Typography>
            </Stack>

            <Stack direction='column' pl='39px'>
              <img src={cking} width='300px' height='200px'></img>
              <Typography>
                They are an aspect of any famous <br />
                venture. It leverages the company's <br />
                growth and boosts its economic power.
                <br /> Moreover, they support inventions
                <br /> and they create a multitude of <br />
                career opportunities
              </Typography>
            </Stack>
            <Stack direction='column' pl='39px'>
              <img src={scr} width='300px' height='200px'></img>
              <Typography>
                They are an aspect of any famous <br />
                venture. It leverages the company's <br />
                growth and boosts its economic power.
                <br /> Moreover, they support inventions
                <br /> and they create a multitude of <br />
                career opportunities
              </Typography>
            </Stack>
          </Grid> */}
          <Grid container={3}>
            <Grid
              item
              xs={5}
              ml={13}
              mt={3}
              mb={3}
              sx={{
                display: 'flex',

                alignItems: 'center',
              }}
            >
              <Card sx={{ minWidth: 100 }}>
                <CardContent sx={{ padding: '71px' }}>
                  <Diversity3OutlinedIcon sx={{ fontSize: '90px' }} />
                  <Typography
                    sx={{ fontSize: 17 }}
                    color='text.secondary'
                    gutterBottom
                  >
                    Number of Classes
                  </Typography>

                  <li>{totalClasses}</li>

                  <Link to='/viewclass'>
                    <Typography variant='body2'>View Classes</Typography>
                  </Link>
                </CardContent>
                <CardActions>
                  <Button size='small'>Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid
              item
              xs={5}
              ml={13}
              mt={3}
              mb={3}
              sx={{
                display: 'flex',

                alignItems: 'center',
              }}
            >
              <Card sx={{ minWidth: 100, ml: '33px' }}>
                <CardContent sx={{ padding: '71px' }}>
                  <PersonOutlineOutlinedIcon sx={{ fontSize: '90px' }} />
                  <Typography
                    sx={{ fontSize: 17 }}
                    color='text.secondary'
                    gutterBottom
                  >
                    Number of Students
                  </Typography>
                  <li>{totalStudents}</li>

                  <Link to='/viewStudent'>
                    <Typography variant='body2'>View Students</Typography>
                  </Link>
                </CardContent>
                <CardActions>
                  <Button size='small'>Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
