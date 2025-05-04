
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
        text: { primary: '#fff' },
    },
    typography: { fontFamily: 'Poppins, sans-serif' },
});

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: { main: '#FF6F61' },
        secondary: { main: '#6A5ACD' },
        background: { default: '#555' },
        text: { primary: '#000' },
    },
    typography: { fontFamily: 'Poppins, sans-serif' },
});

function Login() {
    const [register, setRegister] = useState({ uname: "", pass: "" });
    const [msg, setMsg] = useState("");
    const [loading, setLoading] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const navigate = useNavigate();

    const checkLogin = async (uname, pass) => {
        setLoading(true);
        axios.get(`http://localhost:1005/register/login/${uname}/${pass}`)
        .then((res) => {
            console.log(res.data);
            if (uname === 'admin' && pass === 'admin') {
                navigate("/nav");
            } else {
                if (res.data === "LOGIN SUCCESS") {
                    navigate("/navclient");
                } else {
                    setMsg(res.data);
                }
            }
        })
        .catch(() => {
            alert("Something went wrong during login.");
        })
        .finally(() => setLoading(false));
    };

    const refreshData = () => {
        setMsg("");
        setRegister({ uname: "", pass: "" });
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
                            🔐 Login Form
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

                        {/* Animated Buttons */}
                        <motion.div whileHover={{ scale: 1.07 }}>
                            <Button 
                                variant="contained" 
                                color="success" 
                                fullWidth 
                                sx={{ borderRadius: 3, p: 1.5, mb: 2, boxShadow: 5 }}
                                onClick={() => checkLogin(register.uname, register.pass)}
                            >
                                ✅ Login
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

                        {/* Animated Message Display */}
                        {msg && (
                            <motion.div
                                initial={{ opacity: 1 }}
                                animate={{ opacity: 0 }}
                                transition={{ duration: 3 }}
                            >
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

export default Login;














// import React from 'react'
// import axios from 'axios'
// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'



// function Login() {
//     let[register,setRegister]=useState({
//         uname:"",
//         pass:"",
//         nm:"",
//         email:"",
//         phno:""
//     })
//     let[msg,setmsg]=useState("");
//     var navigate=useNavigate();

//     const checkLogin=(uname,pass)=>{
//         axios.get(`http://localhost:1005/register/login/${uname}/${pass}`)
//         .then((res)=>{
//             console.log(res.data);
           
//             if(uname==='admin' && pass==='admin')
//             {
//               navigate("/nav")
//             }
//             else{
//               if(res.data==="LOGIN SUCCESS")
//               {
//                 navigate("/navclient")
//               }
//               else{
//                     setmsg(res.data)
//               }
//             }
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
//       <h2 className='text-white bg-dark'>LOGIN FORM</h2><br/>
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
    
//       <button className='btn btn-outline-success' style={{marginTop:"5px"}}
//       onClick={()=>{checkLogin(register.uname,register.pass)}} >LOGIN</button> &nbsp;&nbsp;
      
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

// export default Login