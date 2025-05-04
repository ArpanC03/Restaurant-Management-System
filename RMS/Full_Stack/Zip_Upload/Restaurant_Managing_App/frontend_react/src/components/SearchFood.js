

import React, { useState } from 'react';
import axios from 'axios';
import { debounce } from 'lodash';
import { motion } from 'framer-motion';
import { 
    Container, TextField, Button, Typography, Paper, Box, ThemeProvider, createTheme, CssBaseline, Switch, Table, TableHead, TableBody, TableRow, TableCell, CircularProgress 
} from '@mui/material';
import "bootstrap/dist/css/bootstrap.css";
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

function SearchFood() {
    const [food, setFood] = useState({ fid: "" });
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    // Debounced search function
    const searchData = debounce((fid) => {
        if (!fid) {
            alert("⚠️ Please enter a valid Food ID.");
            return;
        }
        setLoading(true);
        axios.get(`http://localhost:1005/food/fetch/${fid}`)
        .then((res) => {
            console.log(res.data);
            setData(res.data);
        })
        .catch(() => {
            alert("Something went wrong while searching.");
        })
        .finally(() => setLoading(false));
    }, 500);  // Prevents excessive calls within 500ms

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <CssBaseline />
            {/* <NavClient/> */}
            <Container maxWidth="sm" sx={{ mt: 6 }}>
            {/* <NavClient/> */}
                {/* Dark Mode Toggle */}
                <Box sx={{ textAlign: 'center', mb: 3 }}>
                    <Typography variant="body1" color="text.secondary">
                        🌙 Dark Mode
                    </Typography>
                    <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
                </Box>
                {/* <NavClient/> */}
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
                            🔍 Search Food
                        </Typography>

                        <Box sx={{ mb: 3 }}>
                            <TextField
                                label="Enter Food ID"
                                variant="outlined"
                                fullWidth
                                sx={{ borderRadius: 3, bgcolor: '#aaa', boxShadow: 2 }}
                                value={food.fid}
                                onChange={(e) => {
                                    setFood({ fid: e.target.value });
                                    searchData(e.target.value); // Call debounced search
                                }}
                            />
                        </Box>

                        {/* Loading Animation */}
                        {loading && (
                            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                                <CircularProgress color="primary" />
                            </Box>
                        )}

                        {/* Display Search Results */}
                        {data && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
                                <Table sx={{ bgcolor: '#fff', borderRadius: 3, mt: 3 }}>
                                    <TableHead sx={{ bgcolor: darkMode ? '#444' : '#FF6F61', color: '#fff' }}>
                                        <TableRow>
                                            {["Food ID", "Food Name", "Price"].map((heading, index) => (
                                                <TableCell key={index} sx={{ color: '#fff', fontWeight: 'bold' }}>
                                                    {heading}
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>{data.fid}</TableCell>
                                            <TableCell>{data.fname}</TableCell>
                                            <TableCell>{data.price}</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </motion.div>
                        )}
                    </Paper>
                </motion.div>
            </Container>
        </ThemeProvider>
    );
}

export default SearchFood;












// import React, { useState } from 'react';
// import axios from 'axios';
// import { motion } from 'framer-motion';
// import { 
//     Container, TextField, Button, Typography, Paper, Box, ThemeProvider, createTheme, CssBaseline, Switch, Table, TableHead, TableBody, TableRow, TableCell, CircularProgress 
// } from '@mui/material';
// import "bootstrap/dist/css/bootstrap.css";

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

// function SearchFood() {
//     const [food, setFood] = useState({ fid: "" });
//     const [data, setData] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [darkMode, setDarkMode] = useState(false);

//     const searchData = (fid) => {
//         if (!fid) {
//             alert("Please enter a valid Food ID.");
//             return;
//         }
//         setLoading(true);
//         axios.get(`http://localhost:1005/food/fetch/${fid}`)
//         .then((res) => {
//             console.log(res.data);
//             setData(res.data);
//         })
//         .catch(() => {
//             alert("Something went wrong while searching.");
//         })
//         .finally(() => setLoading(false));
//     };

//     return (
//         <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
//             <CssBaseline />
//             <Container maxWidth="sm" sx={{ mt: 6 }}>

//                 {/* Dark Mode Toggle */}
//                 <Box sx={{ textAlign: 'center', mb: 3 }}>
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
//                         <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3 }}>
//                             🔍 Search Food
//                         </Typography>

//                         <Box sx={{ mb: 3 }}>
//                             <TextField
//                                 label="Enter Food ID"
//                                 variant="outlined"
//                                 fullWidth
//                                 sx={{ borderRadius: 3, bgcolor: '#fff', boxShadow: 2 }}
//                                 value={food.fid}
//                                 onChange={(e) => setFood({ fid: e.target.value })}
//                             />
//                         </Box>

//                         {/* Animated Buttons */}
//                         <motion.div whileHover={{ scale: 1.07 }}>
//                             <Button 
//                                 variant="contained" 
//                                 color="primary" 
//                                 fullWidth 
//                                 sx={{ borderRadius: 3, p: 1.5, mb: 2, boxShadow: 5 }}
//                                 onClick={() => searchData(food.fid)}
//                             >
//                                 🔎 Search
//                             </Button>
//                         </motion.div>

//                         {/* Loading Animation */}
//                         {loading && (
//                             <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
//                                 <CircularProgress color="primary" />
//                             </Box>
//                         )}

//                         {/* Display Search Results */}
//                         {data && (
//                             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
//                                 <Table sx={{ bgcolor: '#fff', borderRadius: 3, mt: 3 }}>
//                                     <TableHead sx={{ bgcolor: darkMode ? '#444' : '#FF6F61', color: '#fff' }}>
//                                         <TableRow>
//                                             {["Food ID", "Food Name", "Price"].map((heading, index) => (
//                                                 <TableCell key={index} sx={{ color: '#fff', fontWeight: 'bold' }}>
//                                                     {heading}
//                                                 </TableCell>
//                                             ))}
//                                         </TableRow>
//                                     </TableHead>
//                                     <TableBody>
//                                         <TableRow>
//                                             <TableCell>{data.fid}</TableCell>
//                                             <TableCell>{data.fname}</TableCell>
//                                             <TableCell>{data.price}</TableCell>
//                                         </TableRow>
//                                     </TableBody>
//                                 </Table>
//                             </motion.div>
//                         )}
//                     </Paper>
//                 </motion.div>
//             </Container>
//         </ThemeProvider>
//     );
// }

// export default SearchFood;




















// // import React from 'react'
// // import axios from 'axios'
// // import { useState } from 'react'
// // function SearchFood() {
// //     let[food,setFood]=useState({
// //         fid:"",
// //         fname:"",
// //         price:""
// //     })
// //     let[data,setData]=useState({
// //         fid:"",
// //         fname:"",
// //         price:""
// //     })
// //     const searchData=(fid)=>{
// //         alert(fid);
// //         axios.get(`http://localhost:1005/food/fetch/${fid}`)
// //         .then((res)=>{
// //             console.log(res.data);
// //             setData(res.data);
// //         })
// //         .catch((error)=>{
// //             console.log(error);
// //             alert("SOMETHING WENT WRONG SEARCHING DATA");
// //         })
// //     }
    
// //   return (
// //     <div style={{width:"70%",margin:"50px auto"}}>
// //       <h2 className='text-primary'>Search Food</h2>
// //       <input type="text" className='form-control' placeholder='ENTER THE Food ID'
// //       value={food.fid} onChange={(event)=>{
// //         setFood({
// //             ...food,
// //             fid:event.target.value
// //         })
// //       }}/>
     
     
    
// //       <button className='btn btn-outline-primary' style={{marginTop:"5px"}}
// //       onClick={()=>{
// //         searchData(food.fid)
// //       }}>SEARCH</button> &nbsp;&nbsp;
      

// //       <div>        
// //          <div style={{width:"60%",margin:"50px auto"}}> 
// //             <table className='table table-hover table-bordered '>
// //                 <thead className='table table-dark'>
// //                     <tr>
// //                     <th>FOOD ID</th>
// //                     <th>FOOD NAME</th>
// //                     <th>PRICE</th>
// //                     </tr>
// //                 </thead>
// //                 <tbody>
                   
// //                                 <tr>
// //                                     <td>{data.fid}</td>
// //                                     <td>{data.fname}</td>
// //                                     <td>{data.price}</td>
                                    
// //                                 </tr>
                         
// //                 </tbody>
// //             </table>
// //          </div> 
         
      
// //     </div>

// //     </div>
// //   )
// // }

// // export default SearchFood