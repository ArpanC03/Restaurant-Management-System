


import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import { 
    Container, TextField, Button, Typography, Paper, Box, ThemeProvider, createTheme, CssBaseline, Switch, CircularProgress, Dialog, DialogTitle, DialogContent, DialogActions 
} from '@mui/material';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './Nav';

// 🌈 Custom Theme with Dark Mode Support
const lightTheme = createTheme({
    palette: { mode: 'light', primary: { main: '#FF6F61' }, secondary: { main: '#6A5ACD' }, background: { default: '#FCE4EC' }, text: { primary: '#333' }},
    typography: { fontFamily: 'Poppins, sans-serif' },
});

const darkTheme = createTheme({
    palette: { mode: 'dark', primary: { main: '#FF6F61' }, secondary: { main: '#6A5ACD' }, background: { default: '#222' }, text: { primary: '#fff' }},
    typography: { fontFamily: 'Poppins, sans-serif' },
});

function DeleteFood() {
    const [food, setFood] = useState({ fid: "" });
    const [loading, setLoading] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [openConfirm, setOpenConfirm] = useState(false);


    const deleteData = async () => {
      if (!food.fid) {
          toast.error("⚠️ Please enter a Food ID before deleting!");
          return;
      }
      setLoading(true);
      axios.delete(`http://localhost:1005/food/del/${food.fid}`)
      .then((res) => {
          console.log(res.data);
          toast.success("✅ Food item deleted successfully!");
          alert("Item Deleted Successfully! The food list has been updated.");
      })
      .catch(() => {
          toast.error("❌ Failed to delete food. Try again.");
      })
      .finally(() => {
          setLoading(false);
          setOpenConfirm(false);
      });
  };
  

    // const deleteData = async () => {
    //     if (!food.fid) {
    //         toast.error("⚠️ Please enter a Food ID before deleting!");
    //         return;
    //     }
    //     setLoading(true);
    //     axios.delete(`http://localhost:1005/food/del/${food.fid}`)
    //     .then((res) => {
    //         console.log(res.data);
    //         toast.success("✅ Food item deleted successfully!");
    //     })
    //     .catch(() => {
    //         toast.error("❌ Failed to delete food. Try again.");
    //     })
    //     .finally(() => {
    //         setLoading(false);
    //         setOpenConfirm(false);
    //     });
    // };

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
                        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3 }}>🗑️ Delete Food Item</Typography>

                        <Box sx={{ mb: 3 }}>
                            <TextField label="Enter Food ID" variant="outlined" fullWidth sx={{ borderRadius: 3, bgcolor: '#aaa', boxShadow: 2 }}
                                value={food.fid} onChange={(e) => setFood({ fid: e.target.value })} />
                        </Box>

                        {/* Animated Delete Button */}
                        <motion.div whileHover={{ scale: 1.07 }}>
                            <Button variant="contained" color="error" fullWidth sx={{ borderRadius: 3, p: 1.5, boxShadow: 5 }}
                                onClick={() => setOpenConfirm(true)}>❌ Delete Food</Button>
                        </motion.div>

                        {/* Confirmation Dialog */}
                        <Dialog open={openConfirm} onClose={() => setOpenConfirm(false)}>
                            <DialogTitle>⚠️ Confirm Deletion</DialogTitle>
                            <DialogContent>Are you sure you want to delete this food item?</DialogContent>
                            <DialogActions>
                                <Button onClick={() => setOpenConfirm(false)} color="secondary">Cancel</Button>
                                <Button onClick={deleteData} color="error">Confirm</Button>
                            </DialogActions>
                        </Dialog>

                        {/* Loading Animation */}
                        {loading && <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                            <CircularProgress color="error" /></Box>}
                    </Paper>
                </motion.div>
            </Container>
        </ThemeProvider>
    );
}

export default DeleteFood;















// import React, { useState } from 'react';
// import axios from 'axios';
// import { 
//     Container, TextField, Button, Typography, Paper, Box, ThemeProvider, createTheme, CssBaseline, Switch, Dialog, DialogTitle, DialogContent, DialogActions, CircularProgress, Select, MenuItem 
// } from '@mui/material';
// import { motion } from 'framer-motion';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Confetti from 'react-confetti';
// import Nav from './Nav';

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

// function DeleteFood() {
//     const [food, setFood] = useState({ fid: "" });
//     const [msg, setMsg] = useState("");
//     const [darkMode, setDarkMode] = useState(false);
//     const [loading, setLoading] = useState(false);
//     const [openConfirm, setOpenConfirm] = useState(false);
//     const [search, setSearch] = useState("");
//     const [categoryFilter, setCategoryFilter] = useState("");
//     const [confetti, setConfetti] = useState(false);

//     // Delete food with confirmation & toast alert
//     const deleteData = async () => {
//         setLoading(true);
//         axios.delete(`http://localhost:1005/food/del/${food.fid}`)
//         .then((res) => {
//             setMsg(res.data);
//             setConfetti(true);
//             toast.success("🎉 Food item deleted successfully!");
//             setTimeout(() => {
//                 setMsg("");
//                 setConfetti(false);
//             }, 3000); // Message & confetti fade out
//         })
//         .catch(() => toast.error("❌ Something went wrong while deleting food."))
//         .finally(() => {
//             setLoading(false);
//             setOpenConfirm(false);
//         });
//     };

//     return (
//         <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
//             <CssBaseline />
//             <Container maxWidth="sm" sx={{ mt: 6 }}>
//                 <Nav />

//                 {/* Dark Mode Toggle */}
//                 <Box sx={{ textAlign: 'center', mb: 3 }}>
//                     <Typography variant="body1" color="text.primary">
//                         🌙 Dark Mode
//                     </Typography>
//                     <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
//                 </Box>

//                 {/* Confetti Effect on Success */}
//                 {confetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}

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
//                             🗑️ Delete Food
//                         </Typography>

//                         {/* Search Bar & Filters */}
//                         <Box sx={{ mb: 3 }}>
//                             <TextField
//                                 label="Search Food ID"
//                                 variant="outlined"
//                                 fullWidth
//                                 sx={{ borderRadius: 3, bgcolor: '#fff', boxShadow: 2 }}
//                                 value={search}
//                                 onChange={(e) => setSearch(e.target.value)}
//                             />
//                         </Box>

//                         <Box sx={{ mb: 3 }}>
//                             <Select
//                                 value={categoryFilter}
//                                 onChange={(e) => setCategoryFilter(e.target.value)}
//                                 fullWidth
//                                 displayEmpty
//                                 sx={{ bgcolor: '#fff', borderRadius: 3 }}
//                             >
//                                 <MenuItem value="">All Categories</MenuItem>
//                                 <MenuItem value="veg">Vegetarian</MenuItem>
//                                 <MenuItem value="nonveg">Non-Vegetarian</MenuItem>
//                                 <MenuItem value="dessert">Desserts</MenuItem>
//                             </Select>
//                         </Box>

//                         {/* Animated Delete Buttons */}
//                         <motion.div whileHover={{ scale: 1.07 }}>
//                             <Button 
//                                 variant="contained" 
//                                 color="error" 
//                                 fullWidth 
//                                 sx={{ borderRadius: 3, p: 1.5, mb: 2, boxShadow: 5 }}
//                                 onClick={() => setOpenConfirm(true)}
//                             >
//                                 ❌ Delete Food
//                             </Button>
//                         </motion.div>

//                         <motion.div whileHover={{ scale: 1.07 }}>
//                             <Button 
//                                 variant="contained" 
//                                 color="secondary" 
//                                 fullWidth 
//                                 sx={{ borderRadius: 3, p: 1.5, boxShadow: 5 }}
//                                 onClick={() => setFood({ fid: "" })}
//                             >
//                                 🔄 Refresh
//                             </Button>
//                         </motion.div>

//                         {/* Confirmation Dialog */}
//                         <Dialog open={openConfirm} onClose={() => setOpenConfirm(false)}>
//                             <DialogTitle>⚠️ Confirm Deletion</DialogTitle>
//                             <DialogContent>
//                                 Are you sure you want to delete this food item?
//                             </DialogContent>
//                             <DialogActions>
//                                 <Button onClick={() => setOpenConfirm(false)} color="secondary">Cancel</Button>
//                                 <Button onClick={deleteData} color="error">Confirm</Button>
//                             </DialogActions>
//                         </Dialog>

//                         {/* Loading Spinner */}
//                         {loading && (
//                             <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
//                                 <CircularProgress color="error" />
//                             </Box>
//                         )}
//                     </Paper>
//                 </motion.div>
//             </Container>
//         </ThemeProvider>
//     );
// }

// export default DeleteFood;






















// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import { 
// //     Container, TextField, Button, Typography, Paper, Box, ThemeProvider, createTheme, CssBaseline, Switch 
// // } from '@mui/material';
// // import { motion } from 'framer-motion';
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

// // function DeleteFood() {
// //     const [food, setFood] = useState({ fid: "" });
// //     const [msg, setMsg] = useState("");
// //     const [darkMode, setDarkMode] = useState(false);

// //     const deleteData = async (fid) => {
// //         if (!fid) {
// //             alert("Please enter a valid Food ID.");
// //             return;
// //         }
// //         axios.delete(`http://localhost:1005/food/del/${fid}`)
// //         .then((res) => {
// //             console.log(res.data);
// //             setMsg(res.data);
// //         })
// //         .catch((error) => {
// //             console.log(error);
// //             alert("Something went wrong while deleting food.");
// //         });
// //     };

// //     const refreshData = () => {
// //         setMsg("");
// //         setFood({ fid: "" });
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
// //                         <Typography 
// //                             variant="h4" 
// //                             sx={{ 
// //                                 fontWeight: 'bold', mb: 3, 
// //                                 background: '-webkit-linear-gradient(45deg, #FFD700, #FF4081)', 
// //                                 WebkitBackgroundClip: 'text', 
// //                                 WebkitTextFillColor: 'transparent' 
// //                             }}
// //                         >
// //                             🗑️ Delete Food
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

// //                         {/* Animated Buttons */}
// //                         <motion.div whileHover={{ scale: 1.07 }}>
// //                             <Button 
// //                                 variant="contained" 
// //                                 color="error" 
// //                                 fullWidth 
// //                                 sx={{ borderRadius: 3, p: 1.5, mb: 2, boxShadow: 5 }}
// //                                 onClick={() => deleteData(food.fid)}
// //                             >
// //                                 ❌ Delete Food
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

// //                         {/* Bounce effect on message */}
// //                         <motion.div animate={{ y: [0, -5, 0], opacity: [0, 1, 1] }} transition={{ duration: 0.6, repeat: 2 }}>
// //                             <Typography variant="h6" sx={{ mt: 3, fontWeight: 'bold', color: '#FFD700' }}>
// //                                 {msg}
// //                             </Typography>
// //                         </motion.div>
// //                     </Paper>
// //                 </motion.div>
// //             </Container>
// //         </ThemeProvider>
// //     );
// // }

// // export default DeleteFood;
















// // // import React from 'react'
// // // import axios from 'axios'
// // // import { useState } from 'react'
// // // import Nav from './Nav'

// // // function DeleteFood() {
// // //     let[food,setFood]=useState({
// // //         fid:"",
// // //         fname:"",
// // //         price:""
// // //     })
// // //     let[msg,setmsg]=useState("");
// // //     const deleteData=(fid)=>{
// // //         alert(fid);
// // //         axios.delete(`http://localhost:1005/food/del/${fid}`)
// // //         .then((res)=>{
// // //             console.log(res.data);
// // //             setmsg(res.data);
// // //         })
// // //         .catch((error)=>{
// // //             console.log(error);
// // //             alert("SOMETHING WENT WRONG ADDING DATA");
// // //         })
// // //     }
// // //     const refreshData=()=>{
// // //         setmsg("");
// // //         setFood({
// // //             fid:"",
// // //             fname:"",
// // //             price:""
// // //         })
// // //     }
// // //   return (
// // //     <div style={{width:"100%",margin:"50px auto"}}>
// // //       <Nav/>
// // //       <h2 className='text-primary'>deleting Food</h2>
// // //       <input type="text" className='form-control' placeholder='ENTER THE Food ID'
// // //       value={food.fid} onChange={(event)=>{
// // //         setFood({
// // //             ...food,
// // //             fid:event.target.value
// // //         })
// // //       }}/>
     
     
    
// // //       <button className='btn btn-outline-primary' style={{marginTop:"5px"}}
// // //       onClick={()=>{
// // //         deleteData(food.fid)
// // //       }}>DELETE</button> &nbsp;&nbsp;
// // //       <button className='btn btn-outline-secondary' style={{marginTop:"5px"}}
// // //       onClick={refreshData}>REFRESH</button>
// // //       <h2 className='text-danger'>{msg}</h2>
// // //     </div>
// // //   )
// // // }

// // // export default DeleteFood