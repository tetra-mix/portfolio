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
import Link from '@mui/material/Link';
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
import forest from '../img/22summer.png'
import sushi from '../img/23winter.png'
import amaliris from '../img/amaliris.png'
import takamie from '../img/takamie.png'
import defaultImage from '../img/iconB_BW.png'
import defaultImageColor from '../img/iconB_CL.png'

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

export default function About() {
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
          <Link href="/" className='links' underline='none' color="inherit">
            <ListItem key='About' disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText primary='About' />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link href="/profile" className='links' underline='none' color="inherit">
            <ListItem key='Profile' disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <AccountBoxIcon />
                </ListItemIcon>
                <ListItemText primary='Profile' />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link href="/history" className='links' underline='none' color="inherit">
            <ListItem key='History' disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HistoryIcon />
                </ListItemIcon>
                <ListItemText primary='History' />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link href="/links" className='links' underline='none' color="inherit">
            <ListItem key='Links' disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <LinkIcon />
                </ListItemIcon>
                <ListItemText primary='Links' />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link href="/form" className='links' underline='none' color="inherit">
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
          <Link href="https://github.com/tetra-mix" className='links' underline='none' color="inherit">
            <ListItem key='Github' disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <GitHubIcon />
                </ListItemIcon>
                <ListItemText primary='Github' />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link href="https://www.youtube.com/channel/UCFQP9nTz3g1fsYK1KQw9M8A" className='links' underline='none' color="inherit">
            <ListItem key='YouTube' disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <YouTubeIcon />
                </ListItemIcon>
                <ListItemText primary='YouTube' />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link href="#" className='links' underline='none' color="inherit">
            <ListItem key='Twitter' disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <TwitterIcon />
                </ListItemIcon>
                <ListItemText primary='Twitter' />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link href="#" className='links' underline='none' color="inherit">
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
            はじめに...
          </Typography>
          <Typography paragraph>
            このサイトは私が作った作品を公開したり、参加した作品の一覧が見れるようになっています。
            自分はどんなことができるのかの説明のためのページでもあったり、自分自身でどんなものがあったかを
            確認できるようにするためのものです。このサイトのドメイン名はamphiprion.sakura.jpです。
            さくらインターネットのサーバーを使用しています。
            また、一部通常の検索等では出てこないような設定になっているものもあるので注意してください。
          </Typography>

          <Typography variant="h4" component="div" sx={{ marginTop: 5, marginBottom: 2 }}>
            作品一覧
          </Typography>
          <Typography paragraph>下の青いリンクから飛ぶことができます。</Typography>
          <Grid container spacing={5}>
            <Grid item xs>
              <Card sx={{ maxWidth: 330, height: 510 }}>
                <CardMedia
                  sx={{ width: 330, height: 330 }}
                  image={forest}
                  title="日本の森林"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    ライフイズテックコンテスト<br />
                    2022夏 特別賞
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    SDGs問題解決部門の特別賞を受賞しました。
                    私が中学3年生の時に作った作品です。
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link href="https://amphiprion.sakura.ne.jp/contest/22summer/index.html" underline='none'>リンク</Link>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs>
              <Card sx={{ maxWidth: 330, height: 510 }}>
                <CardMedia
                  sx={{ width: 330, height: 330 }}
                  image={sushi}
                  title="有限会社front ONE"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    ライフイズテックコンテスト<br />
                    2023冬 優秀賞
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    身の回りの問題解決部門の優秀賞を受賞しました。
                    私が中学3年生の時に作った作品です。
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link href="https://frontone.clowntetra.jp/index.html" underline='none'>リンク</Link>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs>
              <Card sx={{ maxWidth: 330, height: 510 }}>
                <CardMedia
                  sx={{ width: 330, height: 330 }}
                  image={takamie}
                  title="「よし、たか高みへ」"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    ホームページの教科書
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    私が中学校を卒業する時に作ったものですが、
                    もっとアップグレードしたいと考えています。
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link href="https://takamie.clowntetra.jp/index.html" underline='none'>リンク</Link>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs>
              <Card sx={{ maxWidth: 330, height: 510 }}>
                <CardMedia
                  sx={{ width: 330, height: 330 }}
                  image={amaliris}
                  title="アマリリス連合王国"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    アマリリス連合王国
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    適当に作ったやつです。というのも、もともと作っていたゲームが
                    完成せず、成仏させようと思い制作しました。
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link href="https://amaliris.clowntetra.jp/" underline='none'>リンク</Link>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs>
              <Card sx={{ maxWidth: 330, height: 510 }}>
                <CardMedia
                  sx={{ width: 330, height: 330 }}
                  image={defaultImageColor}
                  title="ブログ"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    ブログ
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ドメイン名をいただいたので、ブログを作りましたが、一回も変更したことがないです。
                    気が向いたら何か書こうと思います。
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link href="https://clowntetra.jp/" underline='none'>リンク</Link>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs>
              <Card sx={{ maxWidth: 330, height: 510 }}>
                <CardMedia
                  sx={{ width: 330, height: 330 }}
                  image={defaultImage}
                  title="リンク集"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    リンク集
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    関係のあるリンクをすべてまとめたページです。
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link href="/links" underline='none'>リンク</Link>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Main>
    </Box >
  );
}