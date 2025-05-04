
import React, { useState, lazy, Suspense } from 'react';
import { 
    Container, Typography, ThemeProvider, createTheme, CssBaseline, Paper, Box, Switch, CircularProgress 
} from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Nav from './components/Nav';
import Contact from './components/Contact';

// **Lazy Loaded Components**
const Food = lazy(() => import('./components/Food'));
const AddFood = lazy(() => import('./components/AddFood'));
const FoodList = lazy(() => import('./components/FoodList'));
const DeleteFood = lazy(() => import('./components/DeleteFood'));
const SearchFood = lazy(() => import('./components/SearchFood'));
const UpdateFood = lazy(() => import('./components/UpdateFood'));
const Home = lazy(() => import('./components/Home'));
const Register = lazy(() => import('./components/Register'));
const Login = lazy(() => import('./components/Login'));
const NavClient = lazy(() => import('./components/NavClient'));
const AddOrder = lazy(() => import('./components/AddOrder'));
const Billing = lazy(() => import('./components/Billing'));

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

function App() {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <CssBaseline />
            <Container maxWidth="md" sx={{ mt: 4 }}>

                {/* Dark Mode Toggle */}
                <Box sx={{ textAlign: 'center', mb: 2 }}>
                    <Typography variant="body1" color="text.secondary">
                        🌙 Dark Mode
                    </Typography>
                    <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
                </Box>

                {/* Animated Gradient Heading */}
                <motion.div 
                    initial={{ y: -30, opacity: 0 }} 
                    animate={{ y: 0, opacity: 1 }} 
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <Typography 
                        variant="h2" 
                        color="primary" 
                        sx={{
                            fontWeight: 'bold',
                            textAlign: 'center',
                            textTransform: 'uppercase',
                            mb: 2,
                            padding: '12px',
                            bgcolor: darkMode ? '#222' : '#FF6F61',
                            color: '#fff',
                            borderRadius: '10px',
                            boxShadow: '0px 4px 8px rgba(0,0,0,0.2)',
                            background: '-webkit-linear-gradient(45deg, #FFD700, #FF4081)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        🍕 FOOD APP
                    </Typography>
                </motion.div>

                <Nav />

                {/* Suspense Loading for Lazy Components */}
                <Suspense fallback={<CircularProgress color="primary" sx={{ display: 'block', margin: 'auto' }} />}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <Paper elevation={8} sx={{
                            p: 4,
                            borderRadius: 6,
                            backdropFilter: 'blur(10px)',
                            background: darkMode 
                                ? 'linear-gradient(135deg, #333, #444)' 
                                : 'linear-gradient(135deg, #FF6F61, #6A5ACD)',
                            color: '#fff',
                        }}>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/billing" element={<Billing />} />
                                <Route path="/contact" element={<Contact/>} />
                                <Route path="/register" element={<Register />} />
                                <Route path="/login" element={<Login />} />
                                <Route path="/nav" element={<Nav />} />
                                <Route path="/navclient" element={<NavClient />} />
                                <Route path="/addorder" element={<AddOrder />} />
                                <Route path="/flist" element={<FoodList />} />
                                <Route path="/sfood" element={<SearchFood />} />
                                <Route path="/food" element={<Food />}>
                                    <Route path="afood" element={<AddFood />} />
                                    <Route path="dfood" element={<DeleteFood />} />
                                    <Route path="ufood" element={<UpdateFood />} />
                                </Route>
                            </Routes>
                        </Paper>
                    </motion.div>
                </Suspense>
            </Container>
        </ThemeProvider>
    );
}

export default App;














// import React, { useState } from 'react';
// import { 
//     Container, Typography, ThemeProvider, createTheme, CssBaseline, Paper, Box, Switch, CircularProgress 
// } from '@mui/material';
// import { Routes, Route } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import Nav from './components/Nav';
// import Food from './components/Food';
// import AddFood from './components/AddFood';
// import FoodList from './components/FoodList';
// import DeleteFood from './components/DeleteFood';
// import SearchFood from './components/SearchFood';
// import UpdateFood from './components/UpdateFood';
// import Home from './components/Home';
// import Register from './components/Register';
// import Login from './components/Login';
// import NavClient from './components/NavClient';
// import AddOrder from './components/AddOrder';
// import Billing from './components/Billing';

// // 🌈 Custom Theme with Dark Mode Support
// const lightTheme = createTheme({
//     palette: {
//         mode: 'light',
//         primary: { main: '#FF6F61' }, 
//         secondary: { main: '#6A5ACD' }, 
//         background: { default: '#FCE4EC' }, 
//         text: { primary: '#333' },
//     },
//     typography: { fontFamily: 'Poppins, sans-serif' },
// });

// const darkTheme = createTheme({
//     palette: {
//         mode: 'dark',
//         primary: { main: '#FF6F61' },
//         secondary: { main: '#6A5ACD' },
//         background: { default: '#222' },
//         text: { primary: '#fff' },
//     },
//     typography: { fontFamily: 'Poppins, sans-serif' },
// });

// function App() {
//     const [darkMode, setDarkMode] = useState(false);
//     const [loading, setLoading] = useState(true);

//     return (
//         <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
//             <CssBaseline />
//             <Container maxWidth="md" sx={{ mt: 4 }}>

//                 {/* Dark Mode Toggle */}
//                 <Box sx={{ textAlign: 'center', mb: 2 }}>
//                     <Typography variant="body1" color="text.primary">
//                         🌙 Dark Mode
//                     </Typography>
//                     <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
//                 </Box>

//                 {/* Animated Gradient Heading */}
//                 <motion.div 
//                     initial={{ y: -30, opacity: 0 }} 
//                     animate={{ y: 0, opacity: 1 }} 
//                     transition={{ duration: 0.8, ease: "easeOut" }}
//                 >
//                     <Typography 
//                         variant="h2" 
//                         color="primary" 
//                         sx={{
//                             fontWeight: 'bold',
//                             textAlign: 'center',
//                             textTransform: 'uppercase',
//                             mb: 2,
//                             padding: '12px',
//                             bgcolor: darkMode ? '#222' : '#FF6F61',
//                             color: '#fff',
//                             borderRadius: '10px',
//                             boxShadow: '0px 4px 8px rgba(0,0,0,0.2)',
//                             background: '-webkit-linear-gradient(45deg, #FFD700, #FF4081)',
//                             WebkitBackgroundClip: 'text',
//                             WebkitTextFillColor: 'transparent',
//                         }}
//                     >
//                         🍕 FOOD APP
//                     </Typography>
//                 </motion.div>

//                 <Nav />

//                 {/* Page Load Animation */}
//                 {loading && (
//                     <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
//                         <CircularProgress color="primary" />
//                     </Box>
//                 )}

//                 <motion.div
//                     initial={{ opacity: 0, scale: 0.95 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.6, ease: "easeOut" }}
//                 >
//                     <Paper elevation={8} sx={{
//                         p: 4,
//                         borderRadius: 6,
//                         backdropFilter: 'blur(10px)',
//                         background: darkMode 
//                             ? 'linear-gradient(135deg, #333, #444)' 
//                             : 'linear-gradient(135deg, #FF6F61, #6A5ACD)',
//                         color: '#fff',
//                     }}>
//                         <Routes>
//                             <Route path="/" element={<Home />} />
//                             <Route path="/billing" element={<Billing />} />
//                             <Route path="/register" element={<Register />} />
//                             <Route path="/login" element={<Login />} />
//                             <Route path="/nav" element={<Nav />} />
//                             <Route path="/navclient" element={<NavClient />} />
//                             <Route path="/addorder" element={<AddOrder />} />
//                             <Route path="/flist" element={<FoodList />} />
//                             <Route path="/sfood" element={<SearchFood />} />
//                             <Route path="/food" element={<Food />}>
//                                 <Route path="afood" element={<AddFood />} />
//                                 <Route path="dfood" element={<DeleteFood />} />
//                                 <Route path="ufood" element={<UpdateFood />} />
//                             </Route>
//                         </Routes>
//                     </Paper>
//                 </motion.div>
//             </Container>
//         </ThemeProvider>
//     );
// }

// export default App;
















// // import React, { useState } from 'react';
// // import { 
// //     Container, Typography, ThemeProvider, createTheme, CssBaseline, Paper, Box, Switch 
// // } from '@mui/material';
// // import { Routes, Route } from 'react-router-dom';
// // import { motion } from 'framer-motion';
// // import Nav from './components/Nav';
// // import Food from './components/Food';
// // import AddFood from './components/AddFood';
// // import FoodList from './components/FoodList';
// // import DeleteFood from './components/DeleteFood';
// // import SearchFood from './components/SearchFood';
// // import UpdateFood from './components/UpdateFood';
// // import Home from './components/Home';
// // import Register from './components/Register';
// // import Login from './components/Login';
// // import NavClient from './components/NavClient';
// // import AddOrder from './components/AddOrder';
// // import Billing from './components/Billing';

// // // 🌈 Custom Theme with Dark Mode Support
// // const lightTheme = createTheme({
// //     palette: {
// //         mode: 'light',
// //         primary: { main: '#FF6F61' }, 
// //         secondary: { main: '#6A5ACD' }, 
// //         background: { default: '#FCE4EC' }, 
// //         text: { primary: '#333' },
// //     },
// //     typography: {
// //         fontFamily: 'Poppins, sans-serif',
// //     },
// // });

// // const darkTheme = createTheme({
// //     palette: {
// //         mode: 'dark',
// //         primary: { main: '#FF6F61' },
// //         secondary: { main: '#6A5ACD' },
// //         background: { default: '#222' },
// //         text: { primary: '#fff' },
// //     },
// //     typography: {
// //         fontFamily: 'Poppins, sans-serif',
// //     },
// // });

// // function App() {
// //     const [darkMode, setDarkMode] = useState(false);

// //     return (
// //         <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
// //             <CssBaseline />
// //             <Container maxWidth="md" sx={{ mt: 4 }}>

// //                 {/* Dark Mode Toggle */}
// //                 <Box sx={{ textAlign: 'center', mb: 2 }}>
// //                     <Typography variant="body1" color="text.primary">
// //                         🌙 Dark Mode
// //                     </Typography>
// //                     <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
// //                 </Box>

// //                 {/* Animated Gradient Heading */}
// //                 <motion.div 
// //                     initial={{ y: -30, opacity: 0 }} 
// //                     animate={{ y: 0, opacity: 1 }} 
// //                     transition={{ duration: 0.8, ease: "easeOut" }}
// //                 >
// //                     <Typography 
// //                         variant="h2" 
// //                         color="primary" 
// //                         sx={{
// //                             fontWeight: 'bold',
// //                             textAlign: 'center',
// //                             textTransform: 'uppercase',
// //                             mb: 2,
// //                             padding: '12px',
// //                             bgcolor: darkMode ? '#222' : '#FF6F61',
// //                             color: '#fff',
// //                             borderRadius: '10px',
// //                             boxShadow: '0px 4px 8px rgba(0,0,0,0.2)',
// //                             background: '-webkit-linear-gradient(45deg, #FFD700, #FF4081)',
// //                             WebkitBackgroundClip: 'text',
// //                             WebkitTextFillColor: 'transparent',
// //                         }}
// //                     >
// //                         🍕 FOOD APP
// //                     </Typography>
// //                 </motion.div>

// //                 <Nav />

// //                 {/* Page Load Animation */}
// //                 <motion.div
// //                     initial={{ opacity: 0, scale: 0.95 }}
// //                     animate={{ opacity: 1, scale: 1 }}
// //                     transition={{ duration: 0.6, ease: "easeOut" }}
// //                 >
// //                     <Paper elevation={8} sx={{
// //                         p: 4,
// //                         borderRadius: 6,
// //                         backdropFilter: 'blur(10px)',
// //                         background: darkMode 
// //                             ? 'linear-gradient(135deg, #333, #444)' 
// //                             : 'linear-gradient(135deg, #FF6F61, #6A5ACD)',
// //                         color: '#fff',
// //                     }}>
// //                         <Routes>
// //                             <Route path="/" element={<Home />} />
// //                             <Route path="/billing" element={<Billing />} />
// //                             <Route path="/register" element={<Register />} />
// //                             <Route path="/login" element={<Login />} />
// //                             <Route path="/nav" element={<Nav />} />
// //                             <Route path="/navclient" element={<NavClient />} />
// //                             <Route path="/addorder" element={<AddOrder />} />
// //                             <Route path="/flist" element={<FoodList />} />
// //                             <Route path="/sfood" element={<SearchFood />} />
// //                             <Route path="/food" element={<Food />}>
// //                                 <Route path="afood" element={<AddFood />} />
// //                                 <Route path="dfood" element={<DeleteFood />} />
// //                                 <Route path="ufood" element={<UpdateFood />} />
// //                             </Route>
// //                         </Routes>
// //                     </Paper>
// //                 </motion.div>
// //             </Container>
// //         </ThemeProvider>
// //     );
// // }

// // export default App;
















// // // import React from 'react';
// // // import { Container, Typography, ThemeProvider, createTheme, CssBaseline, Paper, Box } from '@mui/material';
// // // import { Routes, Route } from 'react-router-dom';
// // // import Nav from './components/Nav';
// // // import Food from './components/Food';
// // // import AddFood from './components/AddFood';
// // // import FoodList from './components/FoodList';
// // // import DeleteFood from './components/DeleteFood';
// // // import SearchFood from './components/SearchFood';
// // // import UpdateFood from './components/UpdateFood';
// // // import Home from './components/Home';
// // // import Register from './components/Register';
// // // import Login from './components/Login';
// // // import NavClient from './components/NavClient';
// // // import AddOrder from './components/AddOrder';
// // // import Billing from './components/Billing';

// // // // 🎨 Custom Theme
// // // const theme = createTheme({
// // //     palette: {
// // //         primary: { main: '#FF6F61' },
// // //         secondary: { main: '#6A5ACD' },
// // //         background: { default: '#FCE4EC' },
// // //     },
// // //     typography: {
// // //         fontFamily: 'Poppins, sans-serif',
// // //         h2: { fontWeight: 'bold', textAlign: 'center', letterSpacing: '1px' },
// // //     },
// // // });

// // // function App() {
// // //     return (
// // //         <ThemeProvider theme={theme}>
// // //             <CssBaseline />

// // //             <Container maxWidth="md" sx={{ mt: 4 }}>
// // //                 <Typography 
// // //                     variant="h2" 
// // //                     color="primary" 
// // //                     sx={{
// // //                         fontWeight: 'bold',
// // //                         textAlign: 'center',
// // //                         textTransform: 'uppercase',
// // //                         mb: 2, // Moves it outside the box
// // //                         padding: '10px',
// // //                         bgcolor: '#FF6F61', // Background color behind text
// // //                         color: '#fff', // White text
// // //                         borderRadius: '8px'
// // //                     }}
// // //                 >
// // //                     🍕 FOOD APP
// // //                 </Typography>

// // //                 <Nav />
                
// // //                 <Paper elevation={5} sx={{ p: 4, borderRadius: 5, bgcolor: 'background.default' }}>
// // //                     <Routes>
// // //                         <Route path="/" element={<Home />} />
// // //                         <Route path="/billing" element={<Billing />} />
// // //                         <Route path="/register" element={<Register />} />
// // //                         <Route path="/login" element={<Login />} />
// // //                         <Route path="/nav" element={<Nav />} />
// // //                         <Route path="/navclient" element={<NavClient />} />
// // //                         <Route path="/addorder" element={<AddOrder />} />
// // //                         <Route path="/flist" element={<FoodList />} />
// // //                         <Route path="/sfood" element={<SearchFood />} />
// // //                         <Route path="/food" element={<Food />}>
// // //                             <Route path="afood" element={<AddFood />} />
// // //                             <Route path="dfood" element={<DeleteFood />} />
// // //                             <Route path="ufood" element={<UpdateFood />} />
// // //                         </Route>
// // //                     </Routes>
// // //                 </Paper>
// // //             </Container>
// // //         </ThemeProvider>
// // //     );
// // // }

// // // export default App;













// // // // import React from 'react';
// // // // import { Container, Typography, ThemeProvider, createTheme, CssBaseline, Paper } from '@mui/material';
// // // // import { Routes, Route } from 'react-router-dom';
// // // // import Nav from './components/Nav';
// // // // import Food from './components/Food';
// // // // import AddFood from './components/AddFood';
// // // // import FoodList from './components/FoodList';
// // // // import DeleteFood from './components/DeleteFood';
// // // // import SearchFood from './components/SearchFood';
// // // // import UpdateFood from './components/UpdateFood';
// // // // import Home from './components/Home';
// // // // import Register from './components/Register';
// // // // import Login from './components/Login';
// // // // import NavClient from './components/NavClient';
// // // // import AddOrder from './components/AddOrder';
// // // // import Billing from './components/Billing';

// // // // // 🎨 Custom Theme for Stylish UI
// // // // const theme = createTheme({
// // // //     palette: {
// // // //         primary: {
// // // //             main: '#FF6F61', // Vibrant Coral
// // // //         },
// // // //         secondary: {
// // // //             main: '#6A5ACD', // Soft Purple
// // // //         },
// // // //         background: {
// // // //             default: '#FCE4EC', // Light Pink Background
// // // //         },
// // // //         text: {
// // // //             primary: '#333',
// // // //             secondary: '#FFF'
// // // //         }
// // // //     },
// // // //     typography: {
// // // //         fontFamily: 'Poppins, sans-serif',
// // // //         h2: {
// // // //             fontWeight: 'bold',
// // // //             textAlign: 'center',
// // // //             padding: '10px',
// // // //         },
// // // //     },
// // // // });

// // // // function App() {
// // // //     return (
// // // //         <ThemeProvider theme={theme}>
// // // //             <CssBaseline />
// // // //             <Container maxWidth="md" sx={{ mt: 4 }}>
// // // //                 <Nav />
// // // //                 <Paper elevation={5} sx={{ p: 4, borderRadius: 5, textAlign: 'center', bgcolor: 'background.default' }}>
// // // //                     <Typography variant="h2" color="primary">
// // // //                         🍕 FOOD APP
// // // //                     </Typography>

// // // //                     <Routes>
// // // //                         <Route path="/" element={<Home />} />
// // // //                         <Route path="/billing" element={<Billing />} />
// // // //                         <Route path="/register" element={<Register />} />
// // // //                         <Route path="/login" element={<Login />} />
// // // //                         <Route path="/nav" element={<Nav />} />
// // // //                         <Route path="/navclient" element={<NavClient />} />
// // // //                         <Route path="/addorder" element={<AddOrder />} />
// // // //                         <Route path="/flist" element={<FoodList />} />
// // // //                         <Route path="/sfood" element={<SearchFood />} />
// // // //                         <Route path="/food" element={<Food />}>
// // // //                             <Route path="afood" element={<AddFood />} />
// // // //                             <Route path="dfood" element={<DeleteFood />} />
// // // //                             <Route path="ufood" element={<UpdateFood />} />
// // // //                         </Route>
// // // //                     </Routes>
// // // //                 </Paper>
// // // //             </Container>
// // // //         </ThemeProvider>
// // // //     );
// // // // }

// // // // export default App;




// // // // // // import logo from './logo.svg';
// // // // // import './App.css';
// // // // // import "bootstrap/dist/css/bootstrap.css";
// // // // // import Nav from './components/Nav';
// // // // // import { Routes, Route } from 'react-router-dom';
// // // // // import Food from './components/Food';
// // // // // import AddFood from './components/AddFood';
// // // // // import FoodList from './components/FoodList';
// // // // // import DeleteFood from './components/DeleteFood';
// // // // // import SearchFood from './components/SearchFood';
// // // // // import UpdateFood from './components/UpdateFood';
// // // // // import Home from './components/Home';
// // // // // import Register from './components/Register';
// // // // // import Login from './components/Login';
// // // // // import NavClient from './components/NavClient';
// // // // // import AddOrder from './components/AddOrder';
// // // // // import Billing from './components/Billing';



// // // // // function App() {
// // // // //   return (
// // // // //     <div className="App">
// // // // //       <h2>FOOD APP</h2>
      
// // // // //       <Routes>
// // // // //       <Route path="/" element={<Home/>}/>
// // // // //       <Route path="/billing" element={<Billing/>}/>
// // // // //       <Route path="/register" element={<Register/>}/>
// // // // //       <Route path="/login" element={<Login/>}/>
// // // // //       <Route path="/nav" element={<Nav/>}/>
// // // // //       <Route path="/navclient" element={<NavClient/>}/>
// // // // //       <Route path="/addorder" element={<AddOrder/>}/>
      
      
      
// // // // //         <Route path="/flist" element={<FoodList/>}/>
// // // // //         <Route path="/sfood" element={<SearchFood/>}/>
// // // // //         <Route path="/food" element={<Food/>}>

// // // // //           <Route path="afood" element={<AddFood/>}/>
// // // // //           <Route path="dfood" element={<DeleteFood/>}/>
// // // // //           <Route path="ufood" element={<UpdateFood/>}/>

// // // // //         </Route>
        
// // // // //       </Routes>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default App;
