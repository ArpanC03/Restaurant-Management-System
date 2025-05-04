


import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import { 
    Container, TextField, Button, Typography, Paper, Box, ThemeProvider, createTheme, CssBaseline, Switch, CircularProgress 
} from '@mui/material';
import Nav from './Nav';
import 'react-toastify/dist/ReactToastify.css';

// 🌈 Custom Theme with Dark Mode Support
const lightTheme = createTheme({
    palette: { mode: 'light', primary: { main: '#FF6F61' }, secondary: { main: '#6A5ACD' }, background: { default: '#FCE4EC' }, text: { primary: '#333' }},
    typography: { fontFamily: 'Poppins, sans-serif' },
});

const darkTheme = createTheme({
    palette: { mode: 'dark', primary: { main: '#FF6F61' }, secondary: { main: '#6A5ACD' }, background: { default: '#222' }, text: { primary: '#fff' }},
    typography: { fontFamily: 'Poppins, sans-serif' },
});

function AddFood() {
    const [food, setFood] = useState({ fid: "", fname: "", price: "" });
    const [loading, setLoading] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const addData = async () => {
        if (!food.fid || !food.fname || !food.price) {
            toast.error("⚠️ Please fill all fields before adding food!");
            return;
        }
        setLoading(true);
        axios.post("http://localhost:1005/food/add", food)
        .then((res) => {
            console.log(res.data);
            toast.success("✅ Food added successfully! Food List updated.");
        })
        .catch(() => {
            toast.error("❌ Failed to add food. Try again.");
        })
        .finally(() => setLoading(false));
    };

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <CssBaseline />
            <Container maxWidth="sm" sx={{ mt: 6 }}>
                {/* <Nav /> */}

                {/* Dark Mode Toggle */}
                <Box sx={{ textAlign: 'center', mb: 3 }}>
                    <Typography variant="body1" color="text.secondary">🌙 Dark Mode</Typography>
                    <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
                </Box>

                {/* Page Load Animation */}
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, ease: "easeOut" }}>
                    <Paper elevation={10} sx={{
                        p: 4, borderRadius: 6, backdropFilter: 'blur(10px)',
                        background: darkMode ? 'linear-gradient(135deg, #333, #444)' : 'linear-gradient(135deg, #FF6F61, #6A5ACD)',
                        color: '#fff', textAlign: 'center',
                    }}>
                        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3 }}>🍕 Add Food Item</Typography>

                        <Box sx={{ mb: 3 }}>
                            <TextField label="Food ID" variant="outlined" fullWidth sx={{ borderRadius: 3, bgcolor: '#aaa', boxShadow: 2 }}
                                value={food.fid} onChange={(e) => setFood({ ...food, fid: e.target.value })} />
                        </Box>

                        <Box sx={{ mb: 3 }}>
                            <TextField label="Food Name" variant="outlined" fullWidth sx={{ borderRadius: 3, bgcolor: '#aaa', boxShadow: 2 }}
                                value={food.fname} onChange={(e) => setFood({ ...food, fname: e.target.value })} />
                        </Box>

                        <Box sx={{ mb: 3 }}>
                            <TextField label="Food Price" variant="outlined" fullWidth sx={{ borderRadius: 3, bgcolor: '#aaa', boxShadow: 2 }}
                                value={food.price} onChange={(e) => setFood({ ...food, price: e.target.value })} />
                        </Box>

                        {/* Animated Add Button */}
                        <motion.div whileHover={{ scale: 1.07 }}>
                            <Button variant="contained" color="primary" fullWidth sx={{ borderRadius: 3, p: 1.5, boxShadow: 5 }}
                                onClick={addData}>🚀 Add Food</Button>
                        </motion.div>

                        {/* Loading Animation */}
                        {loading && <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                            <CircularProgress color="primary" /></Box>}
                    </Paper>
                </motion.div>
            </Container>
        </ThemeProvider>
    );
}

export default AddFood;




















// import React, { useState } from 'react';
// import axios from 'axios';
// import { motion } from 'framer-motion';
// import { toast } from 'react-toastify';
// import { 
//     Container, TextField, Button, Typography, Paper, Box, ThemeProvider, createTheme, CssBaseline, Switch, CircularProgress 
// } from '@mui/material';
// import Nav from './Nav';
// import 'react-toastify/dist/ReactToastify.css';

// // 🌈 Custom Theme with Dark Mode Support
// const lightTheme = createTheme({
//     palette: { mode: 'light', primary: { main: '#FF6F61' }, secondary: { main: '#6A5ACD' }, background: { default: '#FCE4EC' }, text: { primary: '#333' }},
//     typography: { fontFamily: 'Poppins, sans-serif' },
// });

// const darkTheme = createTheme({
//     palette: { mode: 'dark', primary: { main: '#FF6F61' }, secondary: { main: '#6A5ACD' }, background: { default: '#222' }, text: { primary: '#fff' }},
//     typography: { fontFamily: 'Poppins, sans-serif' },
// });

// function AddFood() {
//     const [food, setFood] = useState({ fid: "", fname: "", price: "" });
//     const [loading, setLoading] = useState(false);
//     const [darkMode, setDarkMode] = useState(false);

//     const addData = async () => {
//         if (!food.fid || !food.fname || !food.price) {
//             toast.error("⚠️ Please fill all fields before adding food!");
//             return;
//         }
//         setLoading(true);
//         axios.post("http://localhost:1005/food/add", food)
//         .then((res) => {
//             console.log(res.data);
//             toast.success("✅ Food added successfully!");
//         })
//         .catch(() => {
//             toast.error("❌ Failed to add food. Try again.");
//         })
//         .finally(() => setLoading(false));
//     };

//     const refreshData = () => {
//         setFood({ fid: "", fname: "", price: "" });
//         toast.info("🔄 Form refreshed!");
//     };

//     return (
//         <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
//             <CssBaseline />
//             <Container maxWidth="sm" sx={{ mt: 6 }}>
//                 <Nav />

//                 {/* Dark Mode Toggle */}
//                 <Box sx={{ textAlign: 'center', mb: 3 }}>
//                     <Typography variant="body1" color="text.primary">🌙 Dark Mode</Typography>
//                     <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
//                 </Box>

//                 {/* Page Load Animation */}
//                 <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, ease: "easeOut" }}>
//                     <Paper elevation={10} sx={{
//                         p: 4, borderRadius: 6, backdropFilter: 'blur(10px)',
//                         background: darkMode ? 'linear-gradient(135deg, #333, #444)' : 'linear-gradient(135deg, #FF6F61, #6A5ACD)',
//                         color: '#fff', textAlign: 'center',
//                     }}>
//                         <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3 }}>🍕 Add Food Item</Typography>

//                         <Box sx={{ mb: 3 }}>
//                             <TextField label="Food ID" variant="outlined" fullWidth sx={{ borderRadius: 3, bgcolor: '#fff', boxShadow: 2 }}
//                                 value={food.fid} onChange={(e) => setFood({ ...food, fid: e.target.value })} />
//                         </Box>

//                         <Box sx={{ mb: 3 }}>
//                             <TextField label="Food Name" variant="outlined" fullWidth sx={{ borderRadius: 3, bgcolor: '#fff', boxShadow: 2 }}
//                                 value={food.fname} onChange={(e) => setFood({ ...food, fname: e.target.value })} />
//                         </Box>

//                         <Box sx={{ mb: 3 }}>
//                             <TextField label="Food Price" variant="outlined" fullWidth sx={{ borderRadius: 3, bgcolor: '#fff', boxShadow: 2 }}
//                                 value={food.price} onChange={(e) => setFood({ ...food, price: e.target.value })} />
//                         </Box>

//                         {/* Animated Buttons */}
//                         <motion.div whileHover={{ scale: 1.07 }}>
//                             <Button variant="contained" color="primary" fullWidth sx={{ borderRadius: 3, p: 1.5, mb: 2, boxShadow: 5 }}
//                                 onClick={addData}>🚀 Add Food</Button>
//                         </motion.div>

//                         <motion.div whileHover={{ scale: 1.07 }}>
//                             <Button variant="contained" color="secondary" fullWidth sx={{ borderRadius: 3, p: 1.5, boxShadow: 5 }}
//                                 onClick={refreshData}>🔄 Refresh</Button>
//                         </motion.div>

//                         {/* Loading Animation */}
//                         {loading && <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
//                             <CircularProgress color="primary" /></Box>}
//                     </Paper>
//                 </motion.div>
//             </Container>
//         </ThemeProvider>
//     );
// }

// export default AddFood;


















// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import { motion } from 'framer-motion';
// // import { 
// //     Container, TextField, Button, Typography, Paper, Box, ThemeProvider, createTheme, CssBaseline, Switch, CircularProgress 
// // } from '@mui/material';
// // import Nav from './Nav';

// // // 🌈 Custom Theme with Dark Mode Support
// // const lightTheme = createTheme({
// //     palette: {
// //         mode: 'light',
// //         primary: { main: '#FF6F61' }, 
// //         secondary: { main: '#6A5ACD' }, 
// //         background: { default: '#FCE4EC' }, 
// //         text: { primary: '#333' },
// //     },
// //     typography: { fontFamily: 'Poppins, sans-serif' },
// // });

// // const darkTheme = createTheme({
// //     palette: {
// //         mode: 'dark',
// //         primary: { main: '#FF6F61' },
// //         secondary: { main: '#6A5ACD' },
// //         background: { default: '#222' },
// //         text: { primary: '#fff' },
// //     },
// //     typography: { fontFamily: 'Poppins, sans-serif' },
// // });

// // function AddFood() {
// //     const [food, setFood] = useState({ fid: "", fname: "", price: "" });
// //     const [msg, setMsg] = useState("");
// //     const [loading, setLoading] = useState(false);
// //     const [darkMode, setDarkMode] = useState(false);

// //     const addData = async () => {
// //         if (!food.fid || !food.fname || !food.price) {
// //             alert("Please fill all fields before adding food.");
// //             return;
// //         }
// //         setLoading(true);
// //         axios.post("http://localhost:1005/food/add", food)
// //         .then((res) => {
// //             console.log(res.data);
// //             setMsg(res.data);
// //         })
// //         .catch(() => {
// //             alert("Something went wrong while adding food.");
// //         })
// //         .finally(() => setLoading(false));
// //     };

// //     const refreshData = () => {
// //         setMsg("");
// //         setFood({ fid: "", fname: "", price: "" });
// //     };

// //     return (
// //         <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
// //             <CssBaseline />
// //             <Container maxWidth="sm" sx={{ mt: 6 }}>
// //                 <Nav />

// //                 {/* Dark Mode Toggle */}
// //                 <Box sx={{ textAlign: 'center', mb: 3 }}>
// //                     <Typography variant="body1" color="text.primary">
// //                         🌙 Dark Mode
// //                     </Typography>
// //                     <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
// //                 </Box>

// //                 {/* Page Load Animation */}
// //                 <motion.div
// //                     initial={{ opacity: 0, scale: 0.95 }}
// //                     animate={{ opacity: 1, scale: 1 }}
// //                     transition={{ duration: 0.6, ease: "easeOut" }}
// //                 >
// //                     <Paper elevation={10} sx={{
// //                         p: 4,
// //                         borderRadius: 6,
// //                         backdropFilter: 'blur(10px)',
// //                         background: darkMode 
// //                             ? 'linear-gradient(135deg, #333, #444)' 
// //                             : 'linear-gradient(135deg, #FF6F61, #6A5ACD)',
// //                         color: '#fff',
// //                         textAlign: 'center',
// //                     }}>
// //                         <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3 }}>
// //                             🍕 Add Food Item
// //                         </Typography>

// //                         <Box sx={{ mb: 3 }}>
// //                             <TextField
// //                                 label="Food ID"
// //                                 variant="outlined"
// //                                 fullWidth
// //                                 sx={{ borderRadius: 3, bgcolor: '#fff', boxShadow: 2 }}
// //                                 value={food.fid}
// //                                 onChange={(e) => setFood({ ...food, fid: e.target.value })}
// //                             />
// //                         </Box>

// //                         <Box sx={{ mb: 3 }}>
// //                             <TextField
// //                                 label="Food Name"
// //                                 variant="outlined"
// //                                 fullWidth
// //                                 sx={{ borderRadius: 3, bgcolor: '#fff', boxShadow: 2 }}
// //                                 value={food.fname}
// //                                 onChange={(e) => setFood({ ...food, fname: e.target.value })}
// //                             />
// //                         </Box>

// //                         <Box sx={{ mb: 3 }}>
// //                             <TextField
// //                                 label="Food Price"
// //                                 variant="outlined"
// //                                 fullWidth
// //                                 sx={{ borderRadius: 3, bgcolor: '#fff', boxShadow: 2 }}
// //                                 value={food.price}
// //                                 onChange={(e) => setFood({ ...food, price: e.target.value })}
// //                             />
// //                         </Box>

// //                         {/* Animated Buttons */}
// //                         <motion.div whileHover={{ scale: 1.07 }}>
// //                             <Button 
// //                                 variant="contained" 
// //                                 color="primary" 
// //                                 fullWidth 
// //                                 sx={{ borderRadius: 3, p: 1.5, mb: 2, boxShadow: 5 }}
// //                                 onClick={addData}
// //                             >
// //                                 ✅ Add Food
// //                             </Button>
// //                         </motion.div>

// //                         <motion.div whileHover={{ scale: 1.07 }}>
// //                             <Button 
// //                                 variant="contained" 
// //                                 color="secondary" 
// //                                 fullWidth 
// //                                 sx={{ borderRadius: 3, p: 1.5, boxShadow: 5 }}
// //                                 onClick={refreshData}
// //                             >
// //                                 🔄 Refresh
// //                             </Button>
// //                         </motion.div>

// //                         {/* Loading Animation */}
// //                         {loading && (
// //                             <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
// //                                 <CircularProgress color="primary" />
// //                             </Box>
// //                         )}

// //                         {/* Animated Success/Error Message */}
// //                         {msg && (
// //                             <motion.div initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ duration: 3 }}>
// //                                 <Typography variant="h6" sx={{ mt: 3, fontWeight: 'bold', color: '#FFD700' }}>
// //                                     {msg}
// //                                 </Typography>
// //                             </motion.div>
// //                         )}
// //                     </Paper>
// //                 </motion.div>
// //             </Container>
// //         </ThemeProvider>
// //     );
// // }

// // export default AddFood;












// // // import React, { useState } from 'react';
// // // import axios from 'axios';
// // // import { 
// // //     Container, TextField, Button, Typography, Paper, Box, ThemeProvider, createTheme, CssBaseline, Switch 
// // // } from '@mui/material';
// // // import { motion } from 'framer-motion';
// // // import Nav from './Nav';

// // // // 🌈 Dynamic Theme with Dark Mode Support
// // // const lightTheme = createTheme({
// // //     palette: {
// // //         mode: 'light',
// // //         primary: { main: '#FF6F61' }, 
// // //         secondary: { main: '#6A5ACD' }, 
// // //         background: { default: '#FCE4EC' }, 
// // //         text: { primary: '#333' },
// // //     },
// // //     typography: {
// // //         fontFamily: 'Poppins, sans-serif',
// // //     },
// // // });

// // // const darkTheme = createTheme({
// // //     palette: {
// // //         mode: 'dark',
// // //         primary: { main: '#FF6F61' },
// // //         secondary: { main: '#6A5ACD' },
// // //         background: { default: '#222' },
// // //         text: { primary: '#fff' },
// // //     },
// // //     typography: {
// // //         fontFamily: 'Poppins, sans-serif',
// // //     },
// // // });

// // // function AddFood() {
// // //     const [food, setFood] = useState({ fid: "", fname: "", price: "" });
// // //     const [msg, setMsg] = useState("");
// // //     const [darkMode, setDarkMode] = useState(false);

// // //     const addData = async () => {
// // //         try {
// // //             const res = await axios.post("http://localhost:1005/food/add", food);
// // //             console.log(res.data);
// // //             setMsg(res.data);
// // //         } catch (error) {
// // //             console.error(error);
// // //             alert("Something went wrong adding data");
// // //         }
// // //     };

// // //     const refreshData = () => {
// // //         setMsg("");
// // //         setFood({ fid: "", fname: "", price: "" });
// // //     };

// // //     return (
// // //         <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
// // //             <CssBaseline />
// // //             <Container maxWidth="sm" sx={{ mt: 6 }}>
// // //                 <Nav />

// // //                 {/* Dark Mode Switch */}
// // //                 <Box sx={{ textAlign: 'center', mb: 2 }}>
// // //                     <Typography variant="body1" color="text.primary">
// // //                         🌙 Dark Mode
// // //                     </Typography>
// // //                     <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
// // //                 </Box>

// // //                 {/* Page Fade-In Animation */}
// // //                 <motion.div
// // //                     initial={{ opacity: 0, scale: 0.9 }}
// // //                     animate={{ opacity: 1, scale: 1 }}
// // //                     transition={{ duration: 0.6, ease: "easeOut" }}
// // //                 >
// // //                     <Paper elevation={10} sx={{
// // //                         p: 4,
// // //                         borderRadius: 6,
// // //                         backdropFilter: 'blur(10px)',
// // //                         background: darkMode 
// // //                             ? 'linear-gradient(135deg, #333, #444)'
// // //                             : 'linear-gradient(135deg, #FF6F61, #6A5ACD)',
// // //                         color: '#fff',
// // //                         textAlign: 'center',
// // //                     }}>
// // //                         <Typography 
// // //                             variant="h4" 
// // //                             sx={{ 
// // //                                 fontWeight: 'bold', mb: 3, 
// // //                                 background: '-webkit-linear-gradient(45deg, #FFD700, #FF4081)', 
// // //                                 WebkitBackgroundClip: 'text', 
// // //                                 WebkitTextFillColor: 'transparent' 
// // //                             }}
// // //                         >
// // //                             🍕 Add Food Item
// // //                         </Typography>

// // //                         <Box sx={{ mb: 3 }}>
// // //                             <TextField
// // //                                 label="Food ID"
// // //                                 variant="outlined"
// // //                                 fullWidth
// // //                                 sx={{ borderRadius: 3, bgcolor: '#fff', boxShadow: 2 }}
// // //                                 value={food.fid}
// // //                                 onChange={(e) => setFood({ ...food, fid: e.target.value })}
// // //                             />
// // //                         </Box>

// // //                         <Box sx={{ mb: 3 }}>
// // //                             <TextField
// // //                                 label="Food Name"
// // //                                 variant="outlined"
// // //                                 fullWidth
// // //                                 sx={{ borderRadius: 3, bgcolor: '#fff', boxShadow: 2 }}
// // //                                 value={food.fname}
// // //                                 onChange={(e) => setFood({ ...food, fname: e.target.value })}
// // //                             />
// // //                         </Box>

// // //                         <Box sx={{ mb: 3 }}>
// // //                             <TextField
// // //                                 label="Food Price"
// // //                                 variant="outlined"
// // //                                 fullWidth
// // //                                 sx={{ borderRadius: 3, bgcolor: '#fff', boxShadow: 2 }}
// // //                                 value={food.price}
// // //                                 onChange={(e) => setFood({ ...food, price: e.target.value })}
// // //                             />
// // //                         </Box>

// // //                         {/* Animated Buttons */}
// // //                         <motion.div whileHover={{ scale: 1.07 }}>
// // //                             <Button 
// // //                                 variant="contained" 
// // //                                 color="primary" 
// // //                                 fullWidth 
// // //                                 sx={{ 
// // //                                     borderRadius: 3, p: 1.5, mb: 2, boxShadow: 5, 
// // //                                     transition: '0.3s', 
// // //                                     '&:hover': { bgcolor: '#FF4081' } 
// // //                                 }}
// // //                                 onClick={addData}
// // //                             >
// // //                                 🚀 Add Food
// // //                             </Button>
// // //                         </motion.div>

// // //                         <motion.div whileHover={{ scale: 1.07 }}>
// // //                             <Button 
// // //                                 variant="contained" 
// // //                                 color="secondary" 
// // //                                 fullWidth 
// // //                                 sx={{ 
// // //                                     borderRadius: 3, p: 1.5, boxShadow: 5, 
// // //                                     transition: '0.3s', 
// // //                                     '&:hover': { bgcolor: '#FFD700' } 
// // //                                 }}
// // //                                 onClick={refreshData}
// // //                             >
// // //                                 🔄 Refresh
// // //                             </Button>
// // //                         </motion.div>

// // //                         {/* Bounce effect on message */}
// // //                         <motion.div
// // //                             animate={{ y: [0, -5, 0], opacity: [0, 1, 1] }}
// // //                             transition={{ duration: 0.6, repeat: 2 }}
// // //                         >
// // //                             <Typography variant="h6" sx={{ mt: 3, fontWeight: 'bold', color: '#FFD700' }}>
// // //                                 {msg}
// // //                             </Typography>
// // //                         </motion.div>
// // //                     </Paper>
// // //                 </motion.div>
// // //             </Container>
// // //         </ThemeProvider>
// // //     );
// // // }

// // // export default AddFood;

















// // // // import React, { useState } from 'react';
// // // // import axios from 'axios';
// // // // import { 
// // // //     Container, TextField, Button, Typography, Paper, Box, ThemeProvider, createTheme, CssBaseline, Switch 
// // // // } from '@mui/material';
// // // // import Nav from './Nav';

// // // // // 🌈 Dynamic Theme with Dark Mode Support
// // // // const lightTheme = createTheme({
// // // //     palette: {
// // // //         mode: 'light',
// // // //         primary: { main: '#FF6F61' }, // Coral Red
// // // //         secondary: { main: '#6A5ACD' }, // Soft Purple
// // // //         background: { default: '#FCE4EC' }, // Light Pink
// // // //         text: { primary: '#333' },
// // // //     },
// // // //     typography: {
// // // //         fontFamily: 'Poppins, sans-serif',
// // // //     },
// // // // });

// // // // const darkTheme = createTheme({
// // // //     palette: {
// // // //         mode: 'dark',
// // // //         primary: { main: '#FF6F61' },
// // // //         secondary: { main: '#6A5ACD' },
// // // //         background: { default: '#222' },
// // // //         text: { primary: '#fff' },
// // // //     },
// // // //     typography: {
// // // //         fontFamily: 'Poppins, sans-serif',
// // // //     },
// // // // });

// // // // function AddFood() {
// // // //     const [food, setFood] = useState({ fid: "", fname: "", price: "" });
// // // //     const [msg, setMsg] = useState("");
// // // //     const [darkMode, setDarkMode] = useState(false);

// // // //     const addData = async () => {
// // // //         try {
// // // //             const res = await axios.post("http://localhost:1005/food/add", food);
// // // //             console.log(res.data);
// // // //             setMsg(res.data);
// // // //         } catch (error) {
// // // //             console.error(error);
// // // //             alert("Something went wrong adding data");
// // // //         }
// // // //     };

// // // //     const refreshData = () => {
// // // //         setMsg("");
// // // //         setFood({ fid: "", fname: "", price: "" });
// // // //     };

// // // //     return (
// // // //         <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
// // // //             <CssBaseline />
// // // //             <Container maxWidth="sm" sx={{ mt: 6 }}>
// // // //                 <Nav />

// // // //                 {/* Dark Mode Switch */}
// // // //                 <Box sx={{ textAlign: 'center', mb: 2 }}>
// // // //                     <Typography variant="body1" color="text.primary">
// // // //                         🌙 Dark Mode
// // // //                     </Typography>
// // // //                     <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
// // // //                 </Box>

// // // //                 {/* Glassmorphism Effect */}
// // // //                 <Paper elevation={10} sx={{
// // // //                     p: 4,
// // // //                     borderRadius: 6,
// // // //                     backdropFilter: 'blur(10px)',
// // // //                     background: darkMode 
// // // //                         ? 'linear-gradient(135deg, #333, #444)'
// // // //                         : 'linear-gradient(135deg, #FF6F61, #6A5ACD)',
// // // //                     color: '#fff',
// // // //                     textAlign: 'center',
// // // //                 }}>
// // // //                     <Typography 
// // // //                         variant="h4" 
// // // //                         sx={{ 
// // // //                             fontWeight: 'bold', mb: 3, 
// // // //                             background: '-webkit-linear-gradient(45deg, #FFD700, #FF4081)', 
// // // //                             WebkitBackgroundClip: 'text', 
// // // //                             WebkitTextFillColor: 'transparent' 
// // // //                         }}
// // // //                     >
// // // //                         🍕 Add Food Item
// // // //                     </Typography>

// // // //                     <Box sx={{ mb: 3 }}>
// // // //                         <TextField
// // // //                             label="Food ID"
// // // //                             variant="outlined"
// // // //                             fullWidth
// // // //                             sx={{ borderRadius: 3, bgcolor: '#fff', boxShadow: 2 }}
// // // //                             value={food.fid}
// // // //                             onChange={(e) => setFood({ ...food, fid: e.target.value })}
// // // //                         />
// // // //                     </Box>

// // // //                     <Box sx={{ mb: 3 }}>
// // // //                         <TextField
// // // //                             label="Food Name"
// // // //                             variant="outlined"
// // // //                             fullWidth
// // // //                             sx={{ borderRadius: 3, bgcolor: '#fff', boxShadow: 2 }}
// // // //                             value={food.fname}
// // // //                             onChange={(e) => setFood({ ...food, fname: e.target.value })}
// // // //                         />
// // // //                     </Box>

// // // //                     <Box sx={{ mb: 3 }}>
// // // //                         <TextField
// // // //                             label="Food Price"
// // // //                             variant="outlined"
// // // //                             fullWidth
// // // //                             sx={{ borderRadius: 3, bgcolor: '#fff', boxShadow: 2 }}
// // // //                             value={food.price}
// // // //                             onChange={(e) => setFood({ ...food, price: e.target.value })}
// // // //                         />
// // // //                     </Box>

// // // //                     {/* Animated Buttons */}
// // // //                     <Button 
// // // //                         variant="contained" 
// // // //                         color="primary" 
// // // //                         fullWidth 
// // // //                         sx={{ 
// // // //                             borderRadius: 3, p: 1.5, mb: 2, boxShadow: 5, 
// // // //                             transition: '0.3s', 
// // // //                             '&:hover': { transform: 'scale(1.07)', bgcolor: '#FF4081' } 
// // // //                         }}
// // // //                         onClick={addData}
// // // //                     >
// // // //                         🚀 Add Food
// // // //                     </Button>

// // // //                     <Button 
// // // //                         variant="contained" 
// // // //                         color="secondary" 
// // // //                         fullWidth 
// // // //                         sx={{ 
// // // //                             borderRadius: 3, p: 1.5, boxShadow: 5, 
// // // //                             transition: '0.3s', 
// // // //                             '&:hover': { transform: 'scale(1.07)', bgcolor: '#FFD700' } 
// // // //                         }}
// // // //                         onClick={refreshData}
// // // //                     >
// // // //                         🔄 Refresh
// // // //                     </Button>

// // // //                     <Typography variant="h6" sx={{ mt: 3, fontWeight: 'bold', color: '#FFD700' }}>
// // // //                         {msg}
// // // //                     </Typography>
// // // //                 </Paper>
// // // //             </Container>
// // // //         </ThemeProvider>
// // // //     );
// // // // }

// // // // export default AddFood;






// // // // // import React, { useState } from 'react';
// // // // // import axios from 'axios';
// // // // // import { Container, TextField, Button, Typography, Paper, Box, ThemeProvider, createTheme } from '@mui/material';
// // // // // import Nav from './Nav';

// // // // // // 🌈 Creating a vibrant, modern theme
// // // // // const theme = createTheme({
// // // // //     palette: {
// // // // //         primary: {
// // // // //             main: '#FF6F61', // Bright Coral Red
// // // // //         },
// // // // //         secondary: {
// // // // //             main: '#6A5ACD', // Soft Purple
// // // // //         },
// // // // //         background: {
// // // // //             default: '#FCE4EC', // Light Pink Background
// // // // //         },
// // // // //     },
// // // // //     typography: {
// // // // //         fontFamily: 'Poppins, sans-serif',
// // // // //         button: {
// // // // //             textTransform: 'none',
// // // // //             fontWeight: 'bold',
// // // // //         },
// // // // //     },
// // // // // });

// // // // // function AddFood() {
// // // // //     const [food, setFood] = useState({ fid: "", fname: "", price: "" });
// // // // //     const [msg, setMsg] = useState("");

// // // // //     const addData = async () => {
// // // // //         try {
// // // // //             const res = await axios.post("http://localhost:1005/food/add", food);
// // // // //             console.log(res.data);
// // // // //             setMsg(res.data);
// // // // //         } catch (error) {
// // // // //             console.error(error);
// // // // //             alert("Something went wrong adding data");
// // // // //         }
// // // // //     };

// // // // //     const refreshData = () => {
// // // // //         setMsg("");
// // // // //         setFood({ fid: "", fname: "", price: "" });
// // // // //     };

// // // // //     return (
// // // // //         <ThemeProvider theme={theme}>
// // // // //             <Container maxWidth="sm" sx={{ mt: 8 }}>
// // // // //                 <Nav />
// // // // //                 <Paper elevation={8} sx={{
// // // // //                     p: 4,
// // // // //                     borderRadius: 6,
// // // // //                     bgcolor: 'background.default',
// // // // //                     background: 'linear-gradient(135deg, #FF6F61 30%, #6A5ACD 100%)',
// // // // //                     color: '#fff',
// // // // //                     textAlign: 'center',
// // // // //                 }}>
// // // // //                     <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3 }}>
// // // // //                         🍕 Add Food Item
// // // // //                     </Typography>

// // // // //                     <Box sx={{ mb: 3 }}>
// // // // //                         <TextField
// // // // //                             label="Food ID"
// // // // //                             variant="outlined"
// // // // //                             fullWidth
// // // // //                             sx={{ borderRadius: 3, bgcolor: '#fff', boxShadow: 2 }}
// // // // //                             value={food.fid}
// // // // //                             onChange={(e) => setFood({ ...food, fid: e.target.value })}
// // // // //                         />
// // // // //                     </Box>

// // // // //                     <Box sx={{ mb: 3 }}>
// // // // //                         <TextField
// // // // //                             label="Food Name"
// // // // //                             variant="outlined"
// // // // //                             fullWidth
// // // // //                             sx={{ borderRadius: 3, bgcolor: '#fff', boxShadow: 2 }}
// // // // //                             value={food.fname}
// // // // //                             onChange={(e) => setFood({ ...food, fname: e.target.value })}
// // // // //                         />
// // // // //                     </Box>

// // // // //                     <Box sx={{ mb: 3 }}>
// // // // //                         <TextField
// // // // //                             label="Food Price"
// // // // //                             variant="outlined"
// // // // //                             fullWidth
// // // // //                             sx={{ borderRadius: 3, bgcolor: '#fff', boxShadow: 2 }}
// // // // //                             value={food.price}
// // // // //                             onChange={(e) => setFood({ ...food, price: e.target.value })}
// // // // //                         />
// // // // //                     </Box>

// // // // //                     <Button 
// // // // //                         variant="contained" 
// // // // //                         color="primary" 
// // // // //                         fullWidth 
// // // // //                         sx={{ borderRadius: 3, p: 1.5, mb: 2, boxShadow: 5, transition: '0.3s', '&:hover': { transform: 'scale(1.05)' } }}
// // // // //                         onClick={addData}
// // // // //                     >
// // // // //                         🚀 Add Food
// // // // //                     </Button>

// // // // //                     <Button 
// // // // //                         variant="contained" 
// // // // //                         color="secondary" 
// // // // //                         fullWidth 
// // // // //                         sx={{ borderRadius: 3, p: 1.5, boxShadow: 5, transition: '0.3s', '&:hover': { transform: 'scale(1.05)' } }}
// // // // //                         onClick={refreshData}
// // // // //                     >
// // // // //                         🔄 Refresh
// // // // //                     </Button>

// // // // //                     <Typography variant="h6" sx={{ mt: 3, fontWeight: 'bold', color: '#FFD700' }}>
// // // // //                         {msg}
// // // // //                     </Typography>
// // // // //                 </Paper>
// // // // //             </Container>
// // // // //         </ThemeProvider>
// // // // //     );
// // // // // }

// // // // // export default AddFood;





// // // // // // import React, { useState } from 'react';
// // // // // // import axios from 'axios';
// // // // // // import { Container, TextField, Button, Typography, Paper, Box, ThemeProvider, createTheme } from '@mui/material';
// // // // // // import Nav from './Nav';

// // // // // // const theme = createTheme({
// // // // // //     palette: {
// // // // // //         primary: {
// // // // // //             main: '#4A90E2', // Stylish Blue
// // // // // //         },
// // // // // //         secondary: {
// // // // // //             main: '#FF4081', // Vibrant Pink
// // // // // //         },
// // // // // //         background: {
// // // // // //             default: '#F5F7FA',
// // // // // //         },
// // // // // //     },
// // // // // //     typography: {
// // // // // //         fontFamily: 'Poppins, sans-serif',
// // // // // //         button: {
// // // // // //             textTransform: 'none',
// // // // // //             fontWeight: 'bold',
// // // // // //         },
// // // // // //     },
// // // // // // });

// // // // // // function AddFood() {
// // // // // //     const [food, setFood] = useState({ fid: "", fname: "", price: "" });
// // // // // //     const [msg, setMsg] = useState("");

// // // // // //     const addData = async () => {
// // // // // //         try {
// // // // // //             const res = await axios.post("http://localhost:1005/food/add", food);
// // // // // //             console.log(res.data);
// // // // // //             setMsg(res.data);
// // // // // //         } catch (error) {
// // // // // //             console.error(error);
// // // // // //             alert("Something went wrong adding data");
// // // // // //         }
// // // // // //     };

// // // // // //     const refreshData = () => {
// // // // // //         setMsg("");
// // // // // //         setFood({ fid: "", fname: "", price: "" });
// // // // // //     };

// // // // // //     return (
// // // // // //         <ThemeProvider theme={theme}>
// // // // // //             <Container maxWidth="sm" sx={{ mt: 8 }}>
// // // // // //                 <Nav />
// // // // // //                 <Paper elevation={6} sx={{ p: 4, borderRadius: 5, bgcolor: 'background.default' }}>
// // // // // //                     <Typography variant="h4" color="primary" textAlign="center" gutterBottom sx={{ fontWeight: 'bold' }}>
// // // // // //                         🍽️ Add Food Item
// // // // // //                     </Typography>

// // // // // //                     <Box sx={{ mb: 3 }}>
// // // // // //                         <TextField
// // // // // //                             label="Food ID"
// // // // // //                             variant="outlined"
// // // // // //                             fullWidth
// // // // // //                             sx={{ borderRadius: 3, boxShadow: 2 }}
// // // // // //                             value={food.fid}
// // // // // //                             onChange={(e) => setFood({ ...food, fid: e.target.value })}
// // // // // //                         />
// // // // // //                     </Box>

// // // // // //                     <Box sx={{ mb: 3 }}>
// // // // // //                         <TextField
// // // // // //                             label="Food Name"
// // // // // //                             variant="outlined"
// // // // // //                             fullWidth
// // // // // //                             sx={{ borderRadius: 3, boxShadow: 2 }}
// // // // // //                             value={food.fname}
// // // // // //                             onChange={(e) => setFood({ ...food, fname: e.target.value })}
// // // // // //                         />
// // // // // //                     </Box>

// // // // // //                     <Box sx={{ mb: 3 }}>
// // // // // //                         <TextField
// // // // // //                             label="Food Price"
// // // // // //                             variant="outlined"
// // // // // //                             fullWidth
// // // // // //                             sx={{ borderRadius: 3, boxShadow: 2 }}
// // // // // //                             value={food.price}
// // // // // //                             onChange={(e) => setFood({ ...food, price: e.target.value })}
// // // // // //                         />
// // // // // //                     </Box>

// // // // // //                     <Button 
// // // // // //                         variant="contained" 
// // // // // //                         color="primary" 
// // // // // //                         fullWidth 
// // // // // //                         sx={{ borderRadius: 3, p: 1.5, mb: 2, boxShadow: 3 }}
// // // // // //                         onClick={addData}
// // // // // //                     >
// // // // // //                         🚀 Add Food
// // // // // //                     </Button>

// // // // // //                     <Button 
// // // // // //                         variant="outlined" 
// // // // // //                         color="secondary" 
// // // // // //                         fullWidth 
// // // // // //                         sx={{ borderRadius: 3, p: 1.5, boxShadow: 3 }}
// // // // // //                         onClick={refreshData}
// // // // // //                     >
// // // // // //                         🔄 Refresh
// // // // // //                     </Button>

// // // // // //                     <Typography variant="h6" color="error" textAlign="center" sx={{ mt: 3, fontWeight: 'bold' }}>
// // // // // //                         {msg}
// // // // // //                     </Typography>
// // // // // //                 </Paper>
// // // // // //             </Container>
// // // // // //         </ThemeProvider>
// // // // // //     );
// // // // // // }

// // // // // // export default AddFood;











// // // // // //////////////////////////////////////////////////////////////////////////////










// // // // // // import React, { useState } from 'react';
// // // // // // import axios from 'axios';
// // // // // // import { Container, TextField, Button, Typography, Paper, Box } from '@mui/material';
// // // // // // import Nav from './Nav';

// // // // // // function AddFood() {
// // // // // //     const [food, setFood] = useState({ fid: "", fname: "", price: "" });
// // // // // //     const [msg, setMsg] = useState("");

// // // // // //     const addData = async () => {
// // // // // //         try {
// // // // // //             const res = await axios.post("http://localhost:1005/food/add", food);
// // // // // //             console.log(res.data);
// // // // // //             setMsg(res.data);
// // // // // //         } catch (error) {
// // // // // //             console.error(error);
// // // // // //             alert("Something went wrong adding data");
// // // // // //         }
// // // // // //     };

// // // // // //     const refreshData = () => {
// // // // // //         setMsg("");
// // // // // //         setFood({ fid: "", fname: "", price: "" });
// // // // // //     };

// // // // // //     return (
// // // // // //         <Container maxWidth="sm" sx={{ mt: 8 }}>
// // // // // //             <Nav />
// // // // // //             <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
// // // // // //                 <Typography variant="h4" color="primary" gutterBottom>
// // // // // //                     Add Food
// // // // // //                 </Typography>

// // // // // //                 <Box sx={{ mb: 2 }}>
// // // // // //                     <TextField
// // // // // //                         label="Food ID"
// // // // // //                         variant="outlined"
// // // // // //                         fullWidth
// // // // // //                         value={food.fid}
// // // // // //                         onChange={(e) => setFood({ ...food, fid: e.target.value })}
// // // // // //                     />
// // // // // //                 </Box>

// // // // // //                 <Box sx={{ mb: 2 }}>
// // // // // //                     <TextField
// // // // // //                         label="Food Name"
// // // // // //                         variant="outlined"
// // // // // //                         fullWidth
// // // // // //                         value={food.fname}
// // // // // //                         onChange={(e) => setFood({ ...food, fname: e.target.value })}
// // // // // //                     />
// // // // // //                 </Box>

// // // // // //                 <Box sx={{ mb: 2 }}>
// // // // // //                     <TextField
// // // // // //                         label="Food Price"
// // // // // //                         variant="outlined"
// // // // // //                         fullWidth
// // // // // //                         value={food.price}
// // // // // //                         onChange={(e) => setFood({ ...food, price: e.target.value })}
// // // // // //                     />
// // // // // //                 </Box>

// // // // // //                 <Button 
// // // // // //                     variant="contained" 
// // // // // //                     color="primary" 
// // // // // //                     fullWidth 
// // // // // //                     sx={{ mb: 2 }}
// // // // // //                     onClick={addData}
// // // // // //                 >
// // // // // //                     Add
// // // // // //                 </Button>

// // // // // //                 <Button 
// // // // // //                     variant="outlined" 
// // // // // //                     color="secondary" 
// // // // // //                     fullWidth 
// // // // // //                     onClick={refreshData}
// // // // // //                 >
// // // // // //                     Refresh
// // // // // //                 </Button>

// // // // // //                 <Typography variant="h6" color="error" sx={{ mt: 2 }}>
// // // // // //                     {msg}
// // // // // //                 </Typography>
// // // // // //             </Paper>
// // // // // //         </Container>
// // // // // //     );
// // // // // // }

// // // // // // export default AddFood;





// // // // // // import React, { useState } from 'react';
// // // // // // import axios from 'axios';
// // // // // // import Nav from './Nav';

// // // // // // function AddFood() {
// // // // // //     let [food, setFood] = useState({
// // // // // //         fid: "",
// // // // // //         fname: "",
// // // // // //         price: ""
// // // // // //     });

// // // // // //     let [msg, setMsg] = useState("");

// // // // // //     const addData = async () => {
// // // // // //         try {
// // // // // //             const res = await axios.post("http://localhost:1005/food/add", food);
// // // // // //             console.log(res.data);
// // // // // //             setMsg(res.data);
// // // // // //         } catch (error) {
// // // // // //             console.error(error);
// // // // // //             alert("Something went wrong adding data");
// // // // // //         }
// // // // // //     };

// // // // // //     const refreshData = () => {
// // // // // //         setMsg("");
// // // // // //         setFood({
// // // // // //             fid: "",
// // // // // //             fname: "",
// // // // // //             price: ""
// // // // // //         });
// // // // // //     };

// // // // // //     return (
// // // // // //         <div className="max-w-lg mx-auto mt-12 p-6 bg-white rounded-lg shadow-md">
// // // // // //             <Nav />
// // // // // //             <h2 className="text-2xl font-bold text-blue-600 mb-4">Add Food</h2>

// // // // // //             <input 
// // // // // //                 type="text"
// // // // // //                 className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
// // // // // //                 placeholder="Enter the Food ID"
// // // // // //                 value={food.fid}
// // // // // //                 onChange={(event) => setFood({ ...food, fid: event.target.value })}
// // // // // //             /><br/><br/>

// // // // // //             <input 
// // // // // //                 type="text"
// // // // // //                 className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
// // // // // //                 placeholder="Enter the Food Name"
// // // // // //                 value={food.fname}
// // // // // //                 onChange={(event) => setFood({ ...food, fname: event.target.value })}
// // // // // //             /><br/><br/>

// // // // // //             <input 
// // // // // //                 type="text"
// // // // // //                 className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
// // // // // //                 placeholder="Enter the Food Price"
// // // // // //                 value={food.price}
// // // // // //                 onChange={(event) => setFood({ ...food, price: event.target.value })}
// // // // // //             /><br/><br/>

// // // // // //             <button 
// // // // // //                 className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
// // // // // //                 onClick={addData}
// // // // // //             >
// // // // // //                 Add
// // // // // //             </button><br/><br/>

// // // // // //             <button 
// // // // // //                 className="w-full bg-gray-500 text-white p-2 rounded-md hover:bg-gray-600 transition"
// // // // // //                 onClick={refreshData}
// // // // // //             >
// // // // // //                 Refresh
// // // // // //             </button>

// // // // // //             <h2 className="text-red-600 font-semibold mt-4">{msg}</h2>
// // // // // //         </div>
// // // // // //     );
// // // // // // }

// // // // // // export default AddFood;








// // // // // // import React from 'react'
// // // // // // import axios from 'axios'
// // // // // // import { useState } from 'react'
// // // // // // import Nav from './Nav'

// // // // // // function AddFood() {
// // // // // //     let[food,setFood]=useState({
// // // // // //         fid:"",
// // // // // //         fname:"",
// // // // // //         price:""
// // // // // //     })
// // // // // //     let[msg,setmsg]=useState("");
// // // // // //     const addData=()=>{
// // // // // //         axios.post("http://localhost:1005/food/add",food)
// // // // // //         .then((res)=>{
// // // // // //             console.log(res.data);
// // // // // //             setmsg(res.data);
// // // // // //         })
// // // // // //         .catch((error)=>{
// // // // // //             console.log(error);
// // // // // //             alert("SOMETHING WENT WRONG ADDING DATA");
// // // // // //         })
// // // // // //     }
// // // // // //     const refreshData=()=>{
// // // // // //         setmsg("");
// // // // // //         setFood({
// // // // // //             fid:"",
// // // // // //             fname:"",
// // // // // //             price:""
// // // // // //         })
// // // // // //     }
// // // // // //   return (
// // // // // //     <div style={{width:"100%",margin:"50px auto"}}>
// // // // // //       <Nav/>
// // // // // //       <h2 className='text-primary'>ADDING FOOD</h2>
// // // // // //       <input type="text" className='form-control' placeholder='ENTER THE FOOD ID'
// // // // // //       value={food.fid} onChange={(event)=>{
// // // // // //         setFood({
// // // // // //             ...food,
// // // // // //             fid:event.target.value
// // // // // //         })
// // // // // //       }}/><br/>
// // // // // //      <input type="text" className='form-control' placeholder='ENTER THE FOOD NAME'
// // // // // //       value={food.fname} onChange={(event)=>{
// // // // // //         setFood({
// // // // // //             ...food,
// // // // // //             fname:event.target.value
// // // // // //         })
// // // // // //       }}/>
// // // // // //     <br/>
// // // // // //      <input type="text" className='form-control' placeholder='ENTER THE FOOD PRICE'
// // // // // //       value={food.price} onChange={(event)=>{
// // // // // //         setFood({
// // // // // //             ...food,
// // // // // //             price:event.target.value
// // // // // //         })
// // // // // //       }}/><br/>
// // // // // //       <button className='btn btn-outline-primary' style={{marginTop:"5px"}}
// // // // // //       onClick={addData}>ADD</button> &nbsp;&nbsp;
// // // // // //       <button className='btn btn-outline-secondary' style={{marginTop:"5px"}}
// // // // // //       onClick={refreshData}>REFRESH</button>
// // // // // //       <h2 className='text-danger'>{msg}</h2>
// // // // // //     </div>
// // // // // //   )
// // // // // // }

// // // // // // export default AddFood