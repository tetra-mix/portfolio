import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Grid from '@mui/material/Grid';
import {Link} from 'react-router-dom';
// Material Icons
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import InfoIcon from '@mui/icons-material/Info';
import HistoryIcon from '@mui/icons-material/History';
import LinkIcon from '@mui/icons-material/Link';
import HelpIcon from '@mui/icons-material/Help';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
// images
import iconme from '../img/iconme.jpg';
const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function Profile() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h7" noWrap component="div">
            Profile -プロフィール-
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <Link to="/" className='links'>
            <ListItem key='About' disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText primary='About' />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to="/profile" className='links'>
            <ListItem key='Profile' disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <AccountBoxIcon />
                </ListItemIcon>
                <ListItemText primary='Profile' />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to="/history" className='links'>
            <ListItem key='History' disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HistoryIcon />
                </ListItemIcon>
                <ListItemText primary='History' />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to="/links" className='links'>
            <ListItem key='Links' disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <LinkIcon />
                </ListItemIcon>
                <ListItemText primary='Links' />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to="/form" className='links'>
            <ListItem key='Form' disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HelpIcon />
                </ListItemIcon>
                <ListItemText primary='Form' />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
          <Link to="https://github.com/tetra-mix" className='links'>
            <ListItem key='Github' disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <GitHubIcon />
                </ListItemIcon>
                <ListItemText primary='Github' />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to="https://www.youtube.com/channel/UCFQP9nTz3g1fsYK1KQw9M8A" className='links'>
            <ListItem key='YouTube' disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <YouTubeIcon />
                </ListItemIcon>
                <ListItemText primary='YouTube' />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to="#" className='links'>
            <ListItem key='Twitter' disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <TwitterIcon />
                </ListItemIcon>
                <ListItemText primary='Twitter' />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to="#" className='links'>
            <ListItem key='Facebook' disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <FacebookIcon />
                </ListItemIcon>
                <ListItemText primary='Facebook' />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Box
          sx={{
            borderRadius: '2%',
            padding: '2%',
            width: '85%',
            margin: 'auto',
            backgroundColor: '#f7fbff'
          }}
        >
          <Typography variant="h4" component="div">
            Profile -プロフィール-
          </Typography>
          <Grid container spacing={5}>
            <Grid item xs>
              <Card sx={{ maxWidth: "100%", height: "auto" }}>
                <Grid container spacing={2} direction={"row"}>
                  <Grid item xs={5}>
                    {/*xs == 4 の時 PC表示　xs == 5の時 スマホ表示*/}
                  <CardMedia
                    sx={{ width: 400, height: 400 }}
                    image={iconme}
                    title="アイコン"
                  />
                </Grid>
                <Grid item xs={8}>
                  <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                      吉髙 僚眞 - Ryoma Yoshitaka -
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <Grid>
                        <Grid item xs={2} color="text.secondary">
                          <Typography variant="h10">2019年</Typography>
                        </Grid>
                        <Grid item xs={9} color="text.secondary">
                          <Typography variant="h7" component="h7">
                            <ul>
                              <li>皇学館中学校・高等学校英語スピーチコンテスト 努力賞 受賞</li>
                            </ul>
                          </Typography>
                        </Grid>
                        <Grid item xs={2} color="text.secondary">
                          <Typography variant="h10">2020年</Typography>
                        </Grid>
                        <Grid item xs={9} color="text.secondary">
                          <Typography variant="h7" component="h7">
                            <ul>
                              <li>第4回U-16プログラミングコンテスト三重大会 最優秀賞 受賞</li>
                            </ul>
                          </Typography>
                        </Grid>
                        <Grid item xs={2} color="text.secondary">
                          <Typography variant="h10">2021年</Typography>
                        </Grid>
                        <Grid item xs={9} color="text.secondary">
                          <Typography variant="h7" component="h7">
                            <ul>
                              <li>銀賞/ベストドメインネーミング賞 受賞</li>
                              <li>第5回U-16プログラミングコンテスト三重大会 優秀賞/コスモスコーポレーション企業賞 受賞</li>
                              <li>BCN ITジュニアU-16賞(2021) 受賞</li>
                            </ul>
                          </Typography>
                        </Grid>
                        <Grid item xs={2} color="text.secondary">
                          <Typography variant="h10">2022年</Typography>
                        </Grid>
                        <Grid item xs={9} color="text.secondary">
                          <Typography variant="h7" component="h7">
                            <ul>
                              <li>ライフイズテックコンテスト 夏 SDGs問題解決部門 特別賞 受賞</li>
                              <li>ライフイズテックコンテスト 冬 身の回りの問題解決部門 優秀賞 受賞</li>
                              <li>第6回U-16プログラミングコンテスト三重大会 最優秀賞 受賞</li>
                            </ul>
                          </Typography>
                        </Grid>
                        <Grid item xs={2} color="text.secondary">
                          <Typography variant="h10">2023年</Typography>
                        </Grid>
                        <Grid item xs={9} color="text.secondary">
                          <Typography variant="h7" component="h7">
                            <ul>
                              <li>BCN ITジュニアU-16賞(2023) 受賞</li>
                              <li>第25回全国中学高校Webコンテスト 金賞 受賞</li>
                              <li>村山賞 受賞</li>
                            </ul>
                          </Typography>
                        </Grid>
                      </Grid>
                    </Typography>
                  </CardContent>
                </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Box>
      </Main >
    </Box >
  );
}