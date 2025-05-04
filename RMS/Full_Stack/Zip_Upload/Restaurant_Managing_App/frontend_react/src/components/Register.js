



import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
    Container, TextField, Button, Typography, Paper, Box, ThemeProvider, createTheme, CssBaseline, Switch, CircularProgress 
} from '@mui/material';
import "bootstrap/dist/css/bootstrap.css";

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

function Register() {
    const [register, setRegister] = useState({ uname: "", pass: "", nm: "", email: "", phno: "" });
    const [msg, setMsg] = useState("");
    const [loading, setLoading] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const navigate = useNavigate();

    const addData = async () => {
        setLoading(true);
        axios.post("http://localhost:1005/register/add", register)
        .then((res) => {
            console.log(res.data);
            setMsg(res.data);
        })
        .catch(() => {
            alert("Something went wrong during registration.");
        })
        .finally(() => setLoading(false));
    };

    const refreshData = () => {
        setMsg("");
        setRegister({ uname: "", pass: "", nm: "", email: "", phno: "" });
    };

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <CssBaseline />
            <Container maxWidth="sm" sx={{ mt: 6 }}>

                {/* Dark Mode Toggle */}
                <Box sx={{ textAlign: 'center', mb: 3 }}>
                    <Typography variant="body1" color="text.primary">
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
                            📝 Registration Form
                        </Typography>

                        <Box sx={{ mb: 3 }}>
                            <TextField
                                label="Username"
                                variant="outlined"
                                fullWidth
                                sx={{ borderRadius: 3, bgcolor: '#aaa', boxShadow: 2 }}
                                value={register.uname}
                                onChange={(e) => setRegister({ ...register, uname: e.target.value })}
                            />
                        </Box>

                        <Box sx={{ mb: 3 }}>
                            <TextField
                                label="Password"
                                type="password"
                                variant="outlined"
                                fullWidth
                                sx={{ borderRadius: 3, bgcolor: '#aaa', boxShadow: 2 }}
                                value={register.pass}
                                onChange={(e) => setRegister({ ...register, pass: e.target.value })}
                            />
                        </Box>

                        <Box sx={{ mb: 3 }}>
                            <TextField
                                label="Name"
                                variant="outlined"
                                fullWidth
                                sx={{ borderRadius: 3, bgcolor: '#aaa', boxShadow: 2 }}
                                value={register.nm}
                                onChange={(e) => setRegister({ ...register, nm: e.target.value })}
                            />
                        </Box>

                        <Box sx={{ mb: 3 }}>
                            <TextField
                                label="Email"
                                variant="outlined"
                                fullWidth
                                sx={{ borderRadius: 3, bgcolor: '#aaa', boxShadow: 2 }}
                                value={register.email}
                                onChange={(e) => setRegister({ ...register, email: e.target.value })}
                            />
                        </Box>

                        <Box sx={{ mb: 3 }}>
                            <TextField
                                label="Phone Number"
                                variant="outlined"
                                fullWidth
                                sx={{ borderRadius: 3, bgcolor: '#aaa', boxShadow: 2 }}
                                value={register.phno}
                                onChange={(e) => setRegister({ ...register, phno: e.target.value })}
                            />
                        </Box>

                        {/* Animated Buttons */}
                        <motion.div whileHover={{ scale: 1.07 }}>
                            <Button 
                                variant="contained" 
                                color="success" 
                                fullWidth 
                                sx={{ borderRadius: 3, p: 1.5, mb: 2, boxShadow: 5 }}
                                onClick={addData}
                            >
                                ✅ Signup
                            </Button>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.07 }}>
                            <Button 
                                variant="contained" 
                                color="primary" 
                                fullWidth 
                                sx={{ borderRadius: 3, p: 1.5, mb: 2, boxShadow: 5 }}
                                onClick={refreshData}
                            >
                                🔄 Refresh
                            </Button>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.07 }}>
                            <Button 
                                variant="contained" 
                                color="secondary" 
                                fullWidth 
                                sx={{ borderRadius: 3, p: 1.5, boxShadow: 5 }}
                                onClick={() => navigate("/")}
                            >
                                🏠 Home
                            </Button>
                        </motion.div>

                        {/* Loading Animation */}
                        {loading && (
                            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                                <CircularProgress color="success" />
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

export default Register;















// import React from 'react'
// import axios from 'axios'
// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'



// function Register() {
//     let[register,setRegister]=useState({
//         uname:"",
//         pass:"",
//         nm:"",
//         email:"",
//         phno:""
//     })
//     let[msg,setmsg]=useState("");
//     var navigate=useNavigate();

//     const addData=()=>{
//         axios.post("http://localhost:1005/register/add",register)
//         .then((res)=>{
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
//         setRegister({
//             uname:"",
//             pass:"",
//             nm:"",
//             email:"",
//             phno:""
//         })
//     }

//   return (
//     <div style={{width:"30%",margin:"50px auto"}} >
//       <h2 className='text-white bg-dark'>REGISTRATION FORM</h2><br/>
//       <input type="text" className='form-control' placeholder='ENTER THE USER NAME'
//       value={register.uname} onChange={(event)=>{
//         setRegister({
//             ...register,
//             uname:event.target.value
//         })
//       }}/><br/>
//      <input type="password" className='form-control' placeholder='ENTER THE PASSWORD'
//       value={register.pass} onChange={(event)=>{
//         setRegister({
//             ...register,
//             pass:event.target.value
//         })
//       }}/>
//     <br/>
//      <input type="text" className='form-control' placeholder='ENTER THE NAME'
//       value={register.nm} onChange={(event)=>{
//         setRegister({
//             ...register,
//             nm:event.target.value
//         })
//       }}/><br/>
//       <input type="text" className='form-control' placeholder='ENTER THE email'
//       value={register.email} onChange={(event)=>{
//         setRegister({
//             ...register,
//             email:event.target.value
//         })
//       }}/><br/>
//       <input type="text" className='form-control' placeholder='ENTER THE PHNO'
//       value={register.phno} onChange={(event)=>{
//         setRegister({
//             ...register,
//             phno:event.target.value
//         })
//       }}/><br/>
//       <button className='btn btn-outline-success' style={{marginTop:"5px"}}
//       onClick={addData}>SIGNUP</button> &nbsp;&nbsp;
      
//       <button className='btn btn-outline-primary' style={{marginTop:"5px"}}
//       onClick={refreshData}>REFRESH</button>&nbsp;&nbsp;

//       <button className='btn btn-outline-secondary' style={{marginTop:"5px"}}
//       onClick={()=>{
//         navigate("/")
//       }}>HOME</button> <br/>
//       <h2 className='text-danger'>{msg}</h2>
//     </div>
//   )
// }

// export default Register
