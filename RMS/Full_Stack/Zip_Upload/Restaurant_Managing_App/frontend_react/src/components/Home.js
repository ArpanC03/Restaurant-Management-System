


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import { Container, Typography, Paper, Box, ThemeProvider, createTheme, CssBaseline, Switch, Button } from '@mui/material';
import "bootstrap/dist/css/bootstrap.css";
import '../components/Home.css';

// 🌈 Custom Theme with Dark Mode Support
const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: { main: '#FF6F61' }, 
        secondary: { main: '#6A5ACD' }, 
        background: { default: '#FCE4EC' }, 
        text: { primary: '#000' },
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

function Home() {
    const navigate = useNavigate();
    const [darkMode, setDarkMode] = useState(false);

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <CssBaseline />
            <Container maxWidth="md" sx={{ mt: 6 }}>
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
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
                                🍽️ FOOD APP SYSTEM
                            </Typography>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                        >
                            <img
                                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/09/fd/af/this-multi-cuisine-restaurant.jpg?w=600&h=-1&s=1"
                                height={300}
                                width={500}
                                alt="NO IMG"
                                style={{ borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                            />
                        </motion.div>

                        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', gap: 2 }}>
                            <motion.div whileHover={{ scale: 1.07 }}>
                                <Button
                                    variant="contained"
                                    color="success"
                                    sx={{ p: 1.5, boxShadow: 3 }}
                                    onClick={() => navigate("/register")}
                                >
                                    ➕ Register
                                </Button>
                            </motion.div>

                            <motion.div whileHover={{ scale: 1.07 }}>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    sx={{ p: 1.5, boxShadow: 3 }}
                                    onClick={() => navigate("/login")}
                                >
                                    🔑 Login
                                </Button>
                            </motion.div>
                        </Box>
                    </Paper>
                </motion.div>
            </Container>
        </ThemeProvider>
    );
}

export default Home;
















// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { motion } from "framer-motion";
// import "bootstrap/dist/css/bootstrap.css";
// import '../components/Home.css';

// function Home() {
//     var navigate = useNavigate();

//     return (
//         <div style={{ textAlign: 'center', padding: '20px' }}>
//             <motion.h2
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//                 className='text-primary'
//             >
//                 FOOD APP SYSTEM
//             </motion.h2>
//             <motion.div
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.7, delay: 0.2 }}
//             >
//                 <img
//                     src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/09/fd/af/this-multi-cuisine-restaurant.jpg?w=600&h=-1&s=1"
//                     height={300}
//                     width={500}
//                     alt="NO IMG"
//                     style={{ borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
//                 />
//             </motion.div>
//             <br/><br/>
//             <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
//                 <motion.button
//                     whileHover={{ scale: 1.05, backgroundColor: '#28a745', color: '#fff', transition: { duration: 0.15 } }}
//                     whileTap={{ scale: 0.98 }}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 3, y: 0 }}
//                     transition={{ duration: 0.5, delay: 0.4 }}
//                     className='btn btn-outline-success'
//                     onClick={() => { navigate("/register") }}
//                 >
//                     REGISTER
//                 </motion.button>
//                 <motion.button
//                     whileHover={{ scale: 1.05, backgroundColor: '#6c757d', color: '#fff',  transition: { duration: 0.15 }  }}
//                     whileTap={{ scale: 0.98 }}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 3, y: 0 }}
//                     transition={{ duration: 0.5, delay: 0.5 }}
//                     className='btn btn-outline-secondary'
//                     onClick={() => { navigate("/login") }}
//                 >
//                     LOGIN
//                 </motion.button>
//             </div>
//         </div>
//     );
// }

// export default Home;







// // import React from 'react'

// // import { useNavigate } from 'react-router-dom'

// // function Home() {
// //     var navigate=useNavigate();
// //   return (
// //     <div>
// //       <h2 className='text-primary'>FOOD APP SYSTEM</h2>
// //       <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/09/fd/af/this-multi-cuisine-restaurant.jpg?w=600&h=-1&s=1"
// //       height={300}
// //       width={500}
// //       alt="NO IMG"/><br/><br/>
// //       <button className='btn btn-outline-success' onClick={()=>{
// //         navigate("/register")
// //       }}>REGISTER</button>&nbsp;&nbsp;
// //       <button className='btn btn-outline-secondary' onClick={()=>{
// //         navigate("/login")
// //       }}>LOGIN</button>
// //     </div>
// //   )
// // }

// // export default Home

