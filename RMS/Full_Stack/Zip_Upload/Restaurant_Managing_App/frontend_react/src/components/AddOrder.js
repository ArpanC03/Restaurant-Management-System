

import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { 
    Container, TextField, Button, Typography, Paper, Box, ThemeProvider, createTheme, CssBaseline, Switch, CircularProgress 
} from '@mui/material';
import NavClient from './NavClient';

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

function AddOrder() {
    const [order, setOrder] = useState({ fid: "", oqty: "", uname: "" });
    const [msg, setMsg] = useState("");
    const [loading, setLoading] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const addData = async () => {
        if (!order.fid || !order.oqty || !order.uname) {
            alert("⚠️ Please fill all fields before adding an order.");
            return;
        }
        setLoading(true);
        axios.post("http://localhost:1005/order/add", order)
        .then((res) => {
            console.log(res.data);
            setMsg(res.data);
        })
        .catch(() => {
            alert("Something went wrong while adding order.");
        })
        .finally(() => setLoading(false));
    };

    const refreshData = () => {
        setMsg("");
        setOrder({ fid: "", oqty: "", uname: "" });
    };

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <CssBaseline />
            <NavClient/>
            <Container maxWidth="sm" sx={{ mt: 6 }}>
                {/* <NavClient /> */}

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
                        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3 }}>
                            🛒 Add Order
                        </Typography>

                        <Box sx={{ mb: 3 }}>
                            <TextField
                                label="Food ID"
                                variant="outlined"
                                fullWidth
                                sx={{ borderRadius: 3, bgcolor: '#aaa', boxShadow: 2 }}
                                value={order.fid}
                                onChange={(e) => setOrder({ ...order, fid: e.target.value })}
                            />
                        </Box>

                        <Box sx={{ mb: 3 }}>
                            <TextField
                                label="Quantity"
                                variant="outlined"
                                fullWidth
                                sx={{ borderRadius: 3, bgcolor: '#aaa', boxShadow: 2 }}
                                value={order.oqty}
                                onChange={(e) => setOrder({ ...order, oqty: e.target.value })}
                            />
                        </Box>

                        <Box sx={{ mb: 3 }}>
                            <TextField
                                label="User Name"
                                variant="outlined"
                                fullWidth
                                sx={{ borderRadius: 3, bgcolor: '#aaa', boxShadow: 2 }}
                                value={order.uname}
                                onChange={(e) => setOrder({ ...order, uname: e.target.value })}
                            />
                        </Box>

                        {/* Animated Buttons */}
                        <motion.div whileHover={{ scale: 1.07 }}>
                            <Button 
                                variant="contained" 
                                color="primary" 
                                fullWidth 
                                sx={{ borderRadius: 3, p: 1.5, mb: 2, boxShadow: 5 }}
                                onClick={addData}
                            >
                                🚀 Add Order
                            </Button>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.07 }}>
                            <Button 
                                variant="contained" 
                                color="secondary" 
                                fullWidth 
                                sx={{ borderRadius: 3, p: 1.5, boxShadow: 5 }}
                                onClick={refreshData}
                            >
                                🔄 Refresh
                            </Button>
                        </motion.div>

                        {/* Loading Animation */}
                        {loading && (
                            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                                <CircularProgress color="primary" />
                            </Box>
                        )}

                        {/* Animated Success/Error Message */}
                        {msg && (
                            <motion.div initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ duration: 3 }}>
                                <Typography variant="h6" sx={{ mt: 3, fontWeight: 'bold', color: '#FFD700' }}>
                                    {msg}
                                </Typography>
                            </motion.div>
                        )}
                    </Paper>
                </motion.div>
            </Container>
        </ThemeProvider>
    );
}

export default AddOrder;






// import React, { useState } from 'react';
// import axios from 'axios';
// import { 
//     Container, TextField, Button, Typography, Paper, Box, ThemeProvider, createTheme, CssBaseline, Switch 
// } from '@mui/material';
// import { motion } from 'framer-motion';
// import NavClient from './NavClient';

// // 🌈 Custom Theme with Dark Mode Support
// const lightTheme = createTheme({
//     palette: {
//         mode: 'light',
//         primary: { main: '#FF6F61' }, 
//         secondary: { main: '#6A5ACD' }, 
//         background: { default: '#FCE4EC' }, 
//         text: { primary: '#333' },
//     },
//     typography: {
//         fontFamily: 'Poppins, sans-serif',
//     },
// });

// const darkTheme = createTheme({
//     palette: {
//         mode: 'dark',
//         primary: { main: '#FF6F61' },
//         secondary: { main: '#6A5ACD' },
//         background: { default: '#222' },
//         text: { primary: '#fff' },
//     },
//     typography: {
//         fontFamily: 'Poppins, sans-serif',
//     },
// });

// function AddOrder() {
//     const [order, setOrder] = useState({ fid: "", oqty: "", uname: "" });
//     const [msg, setMsg] = useState("");
//     const [darkMode, setDarkMode] = useState(false);

//     const addData = async () => {
//         try {
//             const res = await axios.post("http://localhost:1005/order/add", order);
//             console.log(res.data);
//             setMsg(res.data);
//         } catch (error) {
//             console.error(error);
//             alert("Something went wrong adding order");
//         }
//     };

//     const refreshData = () => {
//         setMsg("");
//         setOrder({ fid: "", oqty: "", uname: "" });
//     };

//     return (
//         <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
//             <CssBaseline />
//             <Container maxWidth="sm" sx={{ mt: 6 }}>
//                 <NavClient />

//                 {/* Dark Mode Toggle */}
//                 <Box sx={{ textAlign: 'center', mb: 2 }}>
//                     <Typography variant="body1" color="text.primary">
//                         🌙 Dark Mode
//                     </Typography>
//                     <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
//                 </Box>

//                 {/* Page Load Animation */}
//                 <motion.div
//                     initial={{ opacity: 0, scale: 0.95 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.6, ease: "easeOut" }}
//                 >
//                     <Paper elevation={10} sx={{
//                         p: 4,
//                         borderRadius: 6,
//                         backdropFilter: 'blur(10px)',
//                         background: darkMode 
//                             ? 'linear-gradient(135deg, #333, #444)' 
//                             : 'linear-gradient(135deg, #FF6F61, #6A5ACD)',
//                         color: '#fff',
//                         textAlign: 'center',
//                     }}>
//                         <Typography 
//                             variant="h4" 
//                             sx={{ 
//                                 fontWeight: 'bold', mb: 3, 
//                                 background: '-webkit-linear-gradient(45deg, #FFD700, #FF4081)', 
//                                 WebkitBackgroundClip: 'text', 
//                                 WebkitTextFillColor: 'transparent' 
//                             }}
//                         >
//                             🛒 Add Order
//                         </Typography>

//                         <Box sx={{ mb: 3 }}>
//                             <TextField
//                                 label="Food ID"
//                                 variant="outlined"
//                                 fullWidth
//                                 sx={{ borderRadius: 3, bgcolor: '#fff', boxShadow: 2 }}
//                                 value={order.fid}
//                                 onChange={(e) => setOrder({ ...order, fid: e.target.value })}
//                             />
//                         </Box>

//                         <Box sx={{ mb: 3 }}>
//                             <TextField
//                                 label="Quantity"
//                                 variant="outlined"
//                                 fullWidth
//                                 sx={{ borderRadius: 3, bgcolor: '#fff', boxShadow: 2 }}
//                                 value={order.oqty}
//                                 onChange={(e) => setOrder({ ...order, oqty: e.target.value })}
//                             />
//                         </Box>

//                         <Box sx={{ mb: 3 }}>
//                             <TextField
//                                 label="User Name"
//                                 variant="outlined"
//                                 fullWidth
//                                 sx={{ borderRadius: 3, bgcolor: '#fff', boxShadow: 2 }}
//                                 value={order.uname}
//                                 onChange={(e) => setOrder({ ...order, uname: e.target.value })}
//                             />
//                         </Box>

//                         {/* Animated Buttons */}
//                         <motion.div whileHover={{ scale: 1.07 }}>
//                             <Button 
//                                 variant="contained" 
//                                 color="primary" 
//                                 fullWidth 
//                                 sx={{ borderRadius: 3, p: 1.5, mb: 2, boxShadow: 5 }}
//                                 onClick={addData}
//                             >
//                                 🚀 Add Order
//                             </Button>
//                         </motion.div>

//                         <motion.div whileHover={{ scale: 1.07 }}>
//                             <Button 
//                                 variant="contained" 
//                                 color="secondary" 
//                                 fullWidth 
//                                 sx={{ borderRadius: 3, p: 1.5, boxShadow: 5 }}
//                                 onClick={refreshData}
//                             >
//                                 🔄 Refresh
//                             </Button>
//                         </motion.div>

//                         {/* Bounce effect on message */}
//                         <motion.div animate={{ y: [0, -5, 0], opacity: [0, 1, 1] }} transition={{ duration: 0.6, repeat: 2 }}>
//                             <Typography variant="h6" sx={{ mt: 3, fontWeight: 'bold', color: '#FFD700' }}>
//                                 {msg}
//                             </Typography>
//                         </motion.div>
//                     </Paper>
//                 </motion.div>
//             </Container>
//         </ThemeProvider>
//     );
// }

// export default AddOrder;












// // import React from 'react'
// // import axios from 'axios'
// // import { useState } from 'react'
// // import NavClient from './NavClient'


// // function AddOrder() {
// //     let[order,setOrder]=useState({
// //         fid:"",
// //         oqty:"",
// //         uname:""
// //     })
// //     let[msg,setmsg]=useState("");
// //     const addData=()=>{
// //         axios.post("http://localhost:1005/order/add",order)
// //         .then((res)=>{
// //             console.log(res.data);
// //             setmsg(res.data);
// //         })
// //         .catch((error)=>{
// //             console.log(error);
// //             alert("SOMETHING WENT WRONG ADDING order");
// //         })
// //     }
// //     const refreshData=()=>{
// //         setmsg("");
// //         setOrder({
// //             fid:"",
// //             oqty:"",
// //             uname:""

// //         })
// //     }
// //   return (
// //     <div style={{width:"100%",margin:"50px auto"}}>
// //     <NavClient/>
// //     <div style={{width:"70%",margin:"50px auto"}}>
// //       <h2 className='text-primary'>ADDING order</h2>
// //       <input type="text" className='form-control' placeholder='ENTER THE food ID'
// //       value={order.fid} onChange={(event)=>{
// //         setOrder({
// //             ...order,
// //             fid:event.target.value
// //         })
// //       }}/><br/>
     
// //       <input type="text" className='form-control' placeholder='ENTER THE quantity '
// //       value={order.oqty} onChange={(event)=>{
// //         setOrder({
// //             ...order,
// //             oqty:event.target.value
// //         })
// //       }}/><br/>
      
// //       <input type="text" className='form-control' placeholder='ENTER THE uname'
// //       value={order.uname} onChange={(event)=>{
// //         setOrder({
// //             ...order,
// //             uname:event.target.value
// //         })
// //       }}/>
// //     <br/>
     
// //       <button className='btn btn-outline-primary' style={{marginTop:"5px"}}
// //       onClick={addData}>ADD</button> &nbsp;&nbsp;
// //       <button className='btn btn-outline-secondary' style={{marginTop:"5px"}}
// //       onClick={refreshData}>REFRESH</button>
// //       <h2 className='text-danger'>{msg}</h2>
// //     </div>
// //     </div>
// //   )
// // }

// // export default AddOrder