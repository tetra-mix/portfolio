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
import Stack from '@mui/material/Stack';
import Item from '@mui/material/ListItem';
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

export default function Links() {
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
          <Typography variant="h6" noWrap component="div">
            About -このサイトについて-
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
            参加作品
          </Typography>
          <Stack spacing={4}>
            <Stack>
              <Item>第23回全国中学高校Webコンテスト 銀賞/ベストドメインネーミング賞 「Nipponのお米を食べよう」</Item>
              <Item><Link to="https://contest.japias.jp/tqj23/230240C/">URL:https://contest.japias.jp/tqj23/230240C/</Link></Item>
            </Stack>
            <Stack>
              <Item>第24回全国中学高校Webコンテスト トップ50 「知ろう・守ろう・考えよう地球温暖化」</Item>
            </Stack>
            <Stack>
              <Item>第25回全国中学高校Webコンテスト 金賞 「Let's 茶茶茶 ~お茶を知る・飲む・考える~」</Item>
              <Item><Link to="https://contest.japias.jp/tqj25/250040C/">URL:https://contest.japias.jp/tqj25/250040C/</Link></Item>
            </Stack>
          </Stack>

          <Typography variant="h4" component="div" sx={{ marginTop: 5, marginBottom: 2 }}>
            個人受賞作品
          </Typography>
          <Stack spacing={4}>
            <Stack>
              <Item>ライフイズテックレッスンコンテスト 2022年 夏 SDGs問題解決部門 特別賞 「日本の森林」</Item>
              <Item><Link to="https://amphiprion.sakura.ne.jp/contest/22summer/index.html">URL:https://amphiprion.sakura.ne.jp/contest/22summer/index.html</Link></Item>
            </Stack>
            <Stack>
              <Item>ライフイズテックレッスンコンテスト 2023年 冬 身の回りの問題解決部門 優秀賞 「有限会社 front ONE」</Item>
              <Item><Link to="https://frontone.clowntetra.jp/index.html">URL:https://frontone.clowntetra.jp/index.html</Link></Item>
            </Stack>
          </Stack>

          <Typography variant="h4" component="div" sx={{ marginTop: 5, marginBottom: 2 }}>
            個人制作
          </Typography>
          <Stack spacing={4}>
            <Stack>
              <Item>アマリリス連合王国</Item>
              <Item><Link to="https://amaliris.clowntetra.jp/">URL:https://amaliris.clowntetra.jp/</Link></Item>
            </Stack>
            <Stack>
              <Item>よし、高みへ</Item>
              <Item><Link to="https://takamie.clowntetra.jp/">URL:https://takamie.clowntetra.jp/</Link></Item>
            </Stack>
            <Stack>
              <Item>ブログ</Item>
              <Item><Link to="https://clowntetra.jp/">URL:https://clowntetra.jp/</Link></Item>
            </Stack>
          </Stack>
        </Box>
      </Main>
    </Box>
  );
}