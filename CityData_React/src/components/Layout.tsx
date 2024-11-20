import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import {
  Map as MapIcon,
  LocalHospital as HealthIcon,
  School as EducationIcon,
  DirectionsBus as TransportIcon,
} from '@mui/icons-material';

interface LayoutProps {
  children: ReactNode;
}

const drawerWidth = 240;

const menuItems = [
  { text: 'Map', icon: <MapIcon />, path: '/' },
  { text: 'Education', icon: <EducationIcon />, path: '/education' },
  { text: 'Health', icon: <HealthIcon />, path: '/health' },
  { text: 'Transport', icon: <TransportIcon />, path: '/transport' },
];

export default function Layout({ children }: LayoutProps) {
  return (
    <div style={{ display: 'flex' }}>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            City Data Platform
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        <Toolbar />
        <List>
          {menuItems.map((item) => (
            <ListItem button key={item.text} component={Link} to={item.path}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main style={{ flexGrow: 1, padding: '24px' }}>
        <Toolbar />
        {children}
      </main>
    </div>
  );
}