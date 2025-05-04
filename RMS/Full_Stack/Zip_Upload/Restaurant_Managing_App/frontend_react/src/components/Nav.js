

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
    AppBar, Toolbar, Typography, Box, ThemeProvider, createTheme, CssBaseline, Switch 
} from '@mui/material';
import "./Nav.css";

// 🌈 Custom Theme with Dark Mode Support
const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: { main: '#FF6F61' }, 
        secondary: { main: '#6A5ACD' }, 
        background: { default: '#FCE4EC' }, 
        text: { primary: '#333' },
    },
    typography: { fontFamily: 'Poppins, sans-serif' },
});

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: { main: '#FF6F61' },
        secondary: { main: '#6A5ACD' },
        background: { default: '#222' },
        text: { primary: '#fff' },
    },
    typography: { fontFamily: 'Poppins, sans-serif' },
});

function Nav() {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <CssBaseline />
            <AppBar position="static" sx={{ bgcolor: darkMode ? '#222' : '#FF6F61', p: 1 }}>
                <Toolbar>
                    {/* <Typography variant="h5" sx={{ fontWeight: 'bold', flexGrow: 1 }}>
                        🍽️ FOOD APP
                    </Typography> */}
                    <Typography variant="h5" sx={{ fontWeight: 'bold', flexGrow: 1, cursor: 'pointer' }} onClick={() => window.location.href = "/"}>
    🍽️ FOOD APP
</Typography>


                    {/* Dark Mode Toggle */}
                    <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />

                    {/* Animated Navigation Links */}
                    <Box sx={{ display: "flex", gap: 3 }}>
                        {["food", "flist", "sfood", "contact"].map((link, index) => (
                            <motion.div whileHover={{ scale: 1.1 }} key={index}>
                                <Link to={`/${link}`} style={{ textDecoration: 'none', color: '#fff', fontWeight: 'bold' }}>
                                    {link.toUpperCase()}
                                </Link>
                            </motion.div>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
}

export default Nav;









// import React from 'react'
// import "./Nav.css"
// function Nav() {
//   return (
//     <div className='navContainer'>
      
//         <div className='navltContainer'>
//           <h2>FOOD APP</h2>
//         </div>
//         <div className='navrtContainer'>
//            <a href="/food">FOOD</a>
//            <a href="/flist">FOODLIST</a>
//            <a href="/sfood">SEARCHFOOD</a>
//            <a href="/contact">CONTACTUS</a>
           
//         </div>
      
//     </div>
//   )
// }

// export default Nav