
import React, { useState } from 'react';
import "./Food.css";
import { Link, Outlet } from 'react-router-dom';
import { 
    Container, Button, Typography, Paper, Box, ThemeProvider, createTheme, CssBaseline, Switch 
} from '@mui/material';
import { motion } from 'framer-motion';
import Nav from './Nav';

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

function Food() {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <CssBaseline />
            <Container maxWidth="md" sx={{ mt: 6 }}>
                {/* <Nav /> */}

                {/* Dark Mode Toggle */}
                <Box sx={{ textAlign: 'center', mb: 3 }}>
                    <Typography variant="body1" color="text.secondary">
                        🌙 Dark Mode
                    </Typography>
                    <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
                </Box>

                {/* Page Load Animation */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <Paper elevation={10} sx={{
                        p: 4,
                        borderRadius: 6,
                        backdropFilter: 'blur(10px)',
                        background: darkMode 
                            ? 'linear-gradient(135deg, #333, #444)' 
                            : 'linear-gradient(135deg, #FF6F61, #6A5ACD)',
                        color: '#fff',
                        textAlign: 'center',
                    }}>
                        <Typography 
                            variant="h4" 
                            sx={{ 
                                fontWeight: 'bold', mb: 3, 
                                background: '-webkit-linear-gradient(45deg, #FFD700, #FF4081)', 
                                WebkitBackgroundClip: 'text', 
                                WebkitTextFillColor: 'transparent' 
                            }}
                        >
                            🍽️ Manage Food Items
                        </Typography>

                        {/* Animated Navigation Links */}
                        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 3 }}>
                            <motion.div whileHover={{ scale: 1.07 }}>
                                <Button variant="contained" color="primary" component={Link} to="afood">
                                    ➕ Add Food
                                </Button>
                            </motion.div>

                            <motion.div whileHover={{ scale: 1.07 }}>
                                <Button variant="contained" color="error" component={Link} to="dfood">
                                    🗑️ Delete Food
                                </Button>
                            </motion.div>

                            <motion.div whileHover={{ scale: 1.07 }}>
                                <Button variant="contained" color="secondary" component={Link} to="ufood">
                                    ✏️ Update Food
                                </Button>
                            </motion.div>
                        </Box>

                        {/* Outlet for Nested Routes */}
                        <Box sx={{ mt: 4 }}>
                            <Outlet />
                        </Box>
                    </Paper>
                </motion.div>
            </Container>
        </ThemeProvider>
    );
}

export default Food;











// import React from 'react'
// import "./Food.css"
// import { Link } from 'react-router-dom'
// import { Outlet } from 'react-router-dom'
// function Food() {
//   return (
//     <div className='prdContainer'>
//         <div className='prdlContainer'>
//          <Link to="afood">ADD FOOD</Link>
//          <Link to="dfood">DELETE FOOD</Link>
//          <Link to="ufood">UPDATE FOOD</Link>
//         </div>
//         <div className='prdrContainer' style={{textAlign:"center",marginLeft:"500px"}}>
//             <Outlet/>
//             </div>
      
//     </div>
//   )
// }

// export default Food