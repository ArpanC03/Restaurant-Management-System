

import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { 
    Container, TextField, Button, Typography, Paper, Box, ThemeProvider, createTheme, CssBaseline, Switch, CircularProgress 
} from '@mui/material';
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

function UpdateFood() {
    const [food, setFood] = useState({ fid: "", fname: "", price: "" });
    const [msg, setMsg] = useState("");
    const [loading, setLoading] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const updateData = (fid) => {
        if (!fid || !food.fname || !food.price) {
            alert("Please enter all required fields.");
            return;
        }
        setLoading(true);
        axios.put(`http://localhost:1005/food/upd/${fid}`, food)
        .then((res) => {
            console.log(res.data);
            setMsg(res.data);
        })
        .catch(() => {
            alert("Something went wrong while updating food.");
        })
        .finally(() => setLoading(false));
    };

    const refreshData = () => {
        setMsg("");
        setFood({ fid: "", fname: "", price: "" });
    };

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <CssBaseline />
            <Container maxWidth="sm" sx={{ mt: 6 }}>
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
                        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3 }}>
                            ✏️ Update Food
                        </Typography>

                        <Box sx={{ mb: 3 }}>
                            <TextField
                                label="Food ID"
                                variant="outlined"
                                fullWidth
                                sx={{ borderRadius: 3, bgcolor: '#aaa', boxShadow: 2 }}
                                value={food.fid}
                                onChange={(e) => setFood({ ...food, fid: e.target.value })}
                            />
                        </Box>

                        <Box sx={{ mb: 3 }}>
                            <TextField
                                label="Food Name"
                                variant="outlined"
                                fullWidth
                                sx={{ borderRadius: 3, bgcolor: '#aaa', boxShadow: 2 }}
                                value={food.fname}
                                onChange={(e) => setFood({ ...food, fname: e.target.value })}
                            />
                        </Box>

                        <Box sx={{ mb: 3 }}>
                            <TextField
                                label="Food Price"
                                variant="outlined"
                                fullWidth
                                sx={{ borderRadius: 3, bgcolor: '#aaa', boxShadow: 2 }}
                                value={food.price}
                                onChange={(e) => setFood({ ...food, price: e.target.value })}
                            />
                        </Box>

                        {/* Animated Buttons */}
                        <motion.div whileHover={{ scale: 1.07 }}>
                            <Button 
                                variant="contained" 
                                color="primary" 
                                fullWidth 
                                sx={{ borderRadius: 3, p: 1.5, mb: 2, boxShadow: 5 }}
                                onClick={() => updateData(food.fid)}
                            >
                                ✅ Update Food
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

export default UpdateFood;















// import React from 'react'
// import axios from 'axios'
// import { useState } from 'react'
// import Nav from './Nav'

// function UpdateFood() {
//     let[food,setFood]=useState({
//         fid:"",
//         fname:"",
//         price:""
//     })
//     let[msg,setmsg]=useState("");
//     const updateData=(fid)=>{
//         axios.put(`http://localhost:1005/food/upd/${fid}`,food)
//             .then((res)=>{
//             console.log(res.data);
//             setmsg(res.data);
//         })
//         .catch((error)=>{
//             console.log(error);
//             alert("SOMETHING WENT WRONG ADDING DATA");
//         })
//     }
//     const refreshData=()=>{
//         setmsg("");
//         setFood({
//             fid:"",
//             fname:"",
//             price:""
//         })
//     }
//   return (
//     <div style={{width:"100%",margin:"50px auto"}}>
//       <Nav/>
//       <h2 className='text-primary'>UPDATE FOOD</h2>
//       <input type="text" className='form-control' placeholder='ENTER THE FOOD ID'
//       value={food.fid} onChange={(event)=>{
//         setFood({
//             ...food,
//             fid:event.target.value
//         })
//       }}/>
//      <input type="text" className='form-control' placeholder='ENTER THE FOOD NAME'
//       value={food.fname} onChange={(event)=>{
//         setFood({
//             ...food,
//             fname:event.target.value
//         })
//       }}/>
      
//      <input type="text" className='form-control' placeholder='ENTER THE FOOD PRICE'
//       value={food.price} onChange={(event)=>{
//         setFood({
//             ...food,
//             price:event.target.value
//         })
//       }}/>
//       <button className='btn btn-outline-primary' style={{marginTop:"5px"}}
//       onClick={()=>{
//         updateData(food.fid)
//       }}>UPDATE</button> &nbsp;&nbsp;
//       <button className='btn btn-outline-secondary' style={{marginTop:"5px"}}
//       onClick={refreshData}>REFRESH</button>
//       <h2 className='text-danger'>{msg}</h2>
//     </div>
//   )
// }

// export default UpdateFood