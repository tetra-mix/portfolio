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
import LanguageIcon from '@mui/icons-material/Language';
// images
import torima from '../img/torima.jpg'
import cranegame from '../img/cranegame.jpg'
import morestem from '../img/morestem.jpg'
import intercom from '../img/intercom.jpg'
import mors from '../img/mors.jpg'
import MAPUSHv1 from '../img/MAPUSHv1.jpg'
import MAPUSHv2 from '../img/MAPUSHv2.jpg'

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

export default function History() {
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
            History -制作物履歴-
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
          <Typography variant="h4" component="div" sx={{ marginTop: 5, marginBottom: 2 }}>
            制作物一覧
          </Typography>
          <Grid container spacing={5}>
            <Grid item xs>
              <Card sx={{ maxWidth: 330, height: 560 }}>
                <CardMedia
                  sx={{ width: 330, height: 330 }}
                  image={torima}
                  title="とりまとりま"
                />
                <CardContent>
                  <Typography gutterBottom variant="h10" component="div">
                    第四回U-16プログラミングコンテスト三重大会 最優秀賞
                  </Typography>
                  <Typography variant='h6' component={'div'}>
                    とりまとりま
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    これはICHIGOJAMを使って制御しています。
                  </Typography>
                </CardContent>
                <CardActions>
                  <IconButton aria-label="torima-youtube" href="https://youtu.be/gzAgePLoNgQ"><YouTubeIcon /></IconButton>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs>
              <Card sx={{ maxWidth: 330, height: 560 }}>
                <CardMedia
                  sx={{ width: 330, height: 330 }}
                  image={cranegame}
                  title="クレーンゲーム"
                />
                <CardContent>
                  <Typography gutterBottom variant="h10" component="div">
                    PCNこどもプログラミングコンテスト2021 入賞
                  </Typography>
                  <Typography variant='h6' component={'div'}>
                    クレーンゲーム
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    単純にモーターをIchigojamとモータードライバーで制御しているだけです。
                  </Typography>
                </CardContent>
                <CardActions>
                  <IconButton aria-label="cranegame-youtube" href="https://www.youtube.com/shorts/j8PVrE8afVk"><YouTubeIcon /></IconButton>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs>
              <Card sx={{ maxWidth: 330, height: 560 }}>
                <CardMedia
                  sx={{ width: 330, height: 330 }}
                  image={morestem}
                  title="MoreSTEM"
                />
                <CardContent>
                  <Typography gutterBottom variant="h10" component="div">
                    第五回U-16プログラミングコンテスト三重大会 優秀賞
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    More STEM
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Ichigojamでノーコードプログラムができるようにしようとしたものです。
                  </Typography>
                </CardContent>
                <CardActions>
                  <IconButton aria-label="morestem-youtube" href="https://youtu.be/7DQUNb1CKco"><YouTubeIcon /></IconButton>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs>
              <Card sx={{ maxWidth: 330, height: 560 }}>
                <CardMedia
                  sx={{ width: 330, height: 330 }}
                  image={intercom}
                  title="メッセージインターフォン"
                />
                <CardContent>
                  <Typography gutterBottom variant="h10" component="div">
                    PCNこどもプログラミングコンテスト2022① 入賞
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    メッセージインターフォン
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ESP32というマイコンを使って、Wi-Fi経由でメッセージを送ることができるインターフォンです。
                  </Typography>
                </CardContent>
                <CardActions>
                  <IconButton aria-label="intercom-youtube" href="https://www.youtube.com/watch?v=T970zV6zuI8"><YouTubeIcon /></IconButton>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs>
              <Card sx={{ maxWidth: 330, height: 560 }}>
                <CardMedia
                  sx={{ width: 330, height: 330 }}
                  image={mors}
                  title="MorS"
                />
                <CardContent>
                  <Typography gutterBottom variant="h10" component="div">
                    PCNこどもプログラミングコンテスト2022②
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    MorS
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    IchigojamとMixjuiceを使ってIFTTT経由で勉強時間をLINEに送ることができるツールです。詳しくはWebサイトをご覧ください。
                  </Typography>
                </CardContent>
                <CardActions>
                  <IconButton aria-label="mors-youtube" href="https://youtu.be/ZN3UspFKI-o"><YouTubeIcon /></IconButton>
                  <IconButton aria-lavel="mors-web" href="https://amphiprion.sakura.ne.jp/contest/mors/index.html"><LanguageIcon /></IconButton>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs>
              <Card sx={{ maxWidth: 330, height: 560 }}>
                <CardMedia
                  sx={{ width: 330, height: 330 }}
                  image={MAPUSHv1}
                  title="MAPUSH"
                />
                <CardContent>
                  <Typography gutterBottom variant="h10" component="div">
                    第六回U-16プログラミングコンテスト三重大会 最優秀賞
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    MAPUSH
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ESP32というマイコンを使ってアクセスポイントを設定、ボタンが押されたらホームページの内容が変わるといってものです。 合成音声モジュールやアンプなども併用している自信作です。
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs>
              <Card sx={{ maxWidth: 330, height: 625 }}>
                <CardMedia
                  sx={{ width: 330, height: 330 }}
                  image={MAPUSHv2}
                  title="MAPUSH vr.2"
                />
                <CardContent>
                  <Typography gutterBottom variant="h10" component="div">
                    PCNこどもプログラミングコンテスト2023
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    MAPUSH vr.2
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    当初はボタンだけでしたがのちに改良されてLEDが付きました。しかし、配線が複雑になり動いたのは一度だけでした。 ESP32というマイコンを使ってアクセスポイントを設定、ボタンが押されたらホームページの内容が変わるといってものです。
                  </Typography>
                </CardContent>
                <CardActions>
                  <IconButton aria-label="mapushv2-youtube" href="https://youtu.be/i8REdelv-hU"><YouTubeIcon /></IconButton>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Main>
    </Box>
  );
}