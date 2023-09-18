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
import Button from '@mui/material/Button';
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
import { FormControl, TextField } from '@mui/material';

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

export default function Form() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [name, setName] = React.useState('');
  const [message, setMessage] = React.useState('');

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const setSubmit = () => {
    console.log("ok");

    var data = {
      "email": email,
      "name": name,
      "message": message
    };
    // 送信する関数を書く
    // バックエンド側を作成する必要がある

  }


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
            Form -お問い合わせフォーム-
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
          <Link href="/portfolio/" className='links' underline='none' color="inherit">
            <ListItem key='About' disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText primary='About' />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link href="/portfolio/profile" className='links' underline='none' color="inherit">
            <ListItem key='Profile' disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <AccountBoxIcon />
                </ListItemIcon>
                <ListItemText primary='Profile' />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link href="/portfolio/history" className='links' underline='none' color="inherit">
            <ListItem key='History' disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HistoryIcon />
                </ListItemIcon>
                <ListItemText primary='History' />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link href="/portfolio/links" className='links' underline='none' color="inherit">
            <ListItem key='Links' disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <LinkIcon />
                </ListItemIcon>
                <ListItemText primary='Links' />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link href="/portfolio/form" className='links' underline='none' color="inherit">
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
          <Box component="form" autoComplete='off'>
            <FormControl fullWidth>
              <Stack spacing={3}>
                <Typography variant="h4" component="div">
                  お問い合わせフォーム
                </Typography>
                <Typography variant="body1" component="div">
                  注意:現在はご利用いただけません。
                </Typography>
                <TextField
                  name="fbname"
                  id="fbname"
                  label="お名前"
                  placeholder="山田 太郎"
                  variant="filled"
                  margin="dense"
                  size="small"
                  value={name}
                  onChange={e =>
                    setName(e.target.value)
                  }
                />
                <TextField
                  name="fbemail"
                  id="fbemail"
                  label="メールアドレス"
                  placeholder="example@example.com"
                  variant="filled"
                  margin="dense"
                  size="small"
                  value={email}
                  onChange={e =>
                    setEmail(e.target.value)
                  }
                />
                <TextField
                  name="fbmessage"
                  id="fbmessage"
                  label="メッセージ"
                  multiline
                  minRows={8}
                  placeholder="メッセージを入力してください。"
                  variant="filled"
                  margin="dense"
                  size="small"
                  value={message}
                  onChange={e =>
                    setMessage(e.target.value)
                  }
                />
                <Button variant="contained" onClick={setSubmit}>送信</Button>
              </Stack>
            </FormControl>
          </Box>
        </Box>
      </Main>
    </Box>
  );
}