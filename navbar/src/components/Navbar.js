import React from 'react';
import { AppBar, Toolbar, Box, Button, IconButton } from '@mui/material';

const Navbar = ({ orientation = 'horizontal', items = [], style }) => {
  const isVertical = orientation === 'vertical';

  return (
    <AppBar
      position="static"
      sx={{
        flexDirection: isVertical ? 'column' : 'row',
        ...style, // Allow custom styles from the parent
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          flexDirection: isVertical ? 'column' : 'row',
          justifyContent: isVertical ? 'flex-start' : 'space-between',
          alignItems: 'center',
        }}
      >
        {items.map((item, index) => (
          <Box key={index} sx={{ margin: isVertical ? '10px 0' : '0 10px' }}>
            {item.type === 'button' ? (
              <Button color="inherit" onClick={item.onClick}>
                {item.label}
              </Button>
            ) : (
              <IconButton color="inherit" onClick={item.onClick}>
                {item.icon}
              </IconButton>
            )}
          </Box>
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
