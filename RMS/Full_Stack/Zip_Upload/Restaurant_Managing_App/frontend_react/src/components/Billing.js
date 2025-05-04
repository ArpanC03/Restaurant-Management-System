


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
    Container, Typography, Paper, Box, ThemeProvider, createTheme, CssBaseline, Switch, Table, TableHead, TableBody, TableRow, TableCell, TextField, CircularProgress, Skeleton 
} from '@mui/material';
import { motion } from 'framer-motion';
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
        text: { primary: '#000' },
    },
    typography: { fontFamily: 'Poppins, sans-serif' },
});

function Billing() {
    const [user, setUser] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [darkMode, setDarkMode] = useState(false);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");

    useEffect(() => {
        axios.get("http://localhost:1005/order/billing")
        .then((res) => {
            console.log(res.data);
            setUser(res.data);
            setFilteredData(res.data);
        })
        .catch(() => {
            alert("Something went wrong while fetching billing data.");
        })
        .finally(() => setLoading(false));
    }, []);

    const handleSearch = (e) => {
        setSearch(e.target.value);
        const filtered = user.filter(row => row.some(field => field.toString().toLowerCase().includes(e.target.value.toLowerCase())));
        setFilteredData(filtered);
    };

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <CssBaseline />
            <NavClient />
            <Container maxWidth="lg" sx={{ mt: 6 }}>
                {/* <NavClient /> */}

                {/* Dark Mode Toggle */}
                <Box sx={{ textAlign: 'center', mb: 3 }}>
                    <Typography variant="body1" color="text.secondary">
                        🌙 Dark Mode
                    </Typography>
                    <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
                </Box>

                {/* Search Field */}
                <Box sx={{ textAlign: 'center', mb: 3 }}>
                    <TextField
                        label="Search Orders"
                        variant="outlined"
                        fullWidth
                        sx={{ borderRadius: 3, bgcolor: '#aaa', boxShadow: 2 }}
                        value={search}
                        onChange={handleSearch}
                    />
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
                            📋 Order Billing Details
                        </Typography>

                        {loading ? (
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
                                <Skeleton variant="rectangular" width={900} height={50} />
                                <Skeleton variant="rectangular" width={900} height={50} />
                                <Skeleton variant="rectangular" width={900} height={50} />
                            </Box>
                        ) : filteredData.length > 0 ? (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
                                <Table sx={{ bgcolor: '#fff', borderRadius: 3 }}>
                                    <TableHead sx={{ bgcolor: darkMode ? '#444' : '#FF6F61', color: '#fff' }}>
                                        <TableRow>
                                            {["Order ID", "Order Date", "Food ID", "Food Name", "Quantity Ordered", "Price", "Total Cost", "Username"].map((heading, index) => (
                                                <TableCell key={index} sx={{ color: '#fff', fontWeight: 'bold' }}>
                                                    {heading}
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {filteredData.map((element, index) => (
                                            <motion.tr key={index} whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                                                {element.map((data, i) => (
                                                    <TableCell key={i} sx={{ fontWeight: 'medium' }}>{data}</TableCell>
                                                ))}
                                            </motion.tr>
                                        ))}
                                    </TableBody>
                                </Table>
                            </motion.div>
                        ) : (
                            <motion.div animate={{ y: [0, -5, 0], opacity: [0, 1, 1] }} transition={{ duration: 0.6, repeat: 2 }}>
                                <Typography variant="h6" sx={{ mt: 3, fontWeight: 'bold', color: '#FFD700' }}>
                                    🚫 No Data Found
                                </Typography>
                            </motion.div>
                        )}
                    </Paper>
                </motion.div>
            </Container>
        </ThemeProvider>
    );
}

export default Billing;
















// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { 
//     Container, Typography, Paper, Box, ThemeProvider, createTheme, CssBaseline, Switch, Table, TableHead, TableBody, TableRow, TableCell, TextField, CircularProgress 
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

// function Billing() {
//     const [user, setUser] = useState([]);
//     const [filteredData, setFilteredData] = useState([]);
//     const [darkMode, setDarkMode] = useState(false);
//     const [loading, setLoading] = useState(true);
//     const [search, setSearch] = useState("");

//     useEffect(() => {
//         axios.get("http://localhost:1005/order/billing")
//         .then((res) => {
//             console.log(res.data);
//             setUser(res.data);
//             setFilteredData(res.data);
//         })
//         .catch(() => {
//             alert("Something went wrong while fetching billing data.");
//         })
//         .finally(() => setLoading(false));
//     }, []);

//     const handleSearch = (e) => {
//         setSearch(e.target.value);
//         const filtered = user.filter(row => row.some(field => field.toString().toLowerCase().includes(e.target.value.toLowerCase())));
//         setFilteredData(filtered);
//     };

//     return (
//         <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
//             <CssBaseline />
//             <Container maxWidth="lg" sx={{ mt: 6 }}>
//                 <NavClient />

//                 {/* Dark Mode Toggle */}
//                 <Box sx={{ textAlign: 'center', mb: 3 }}>
//                     <Typography variant="body1" color="text.primary">
//                         🌙 Dark Mode
//                     </Typography>
//                     <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
//                 </Box>

//                 {/* Search Field */}
//                 <Box sx={{ textAlign: 'center', mb: 3 }}>
//                     <TextField
//                         label="Search Orders"
//                         variant="outlined"
//                         fullWidth
//                         sx={{ borderRadius: 3, bgcolor: '#fff', boxShadow: 2 }}
//                         value={search}
//                         onChange={handleSearch}
//                     />
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
//                             📋 Order Billing Details
//                         </Typography>

//                         {loading ? (
//                             <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
//                                 <CircularProgress color="primary" />
//                             </Box>
//                         ) : filteredData.length > 0 ? (
//                             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
//                                 <Table sx={{ bgcolor: '#fff', borderRadius: 3 }}>
//                                     <TableHead sx={{ bgcolor: darkMode ? '#444' : '#FF6F61', color: '#fff' }}>
//                                         <TableRow>
//                                             {["Order ID", "Order Date", "Food ID", "Food Name", "Quantity Ordered", "Price", "Total Cost", "Username"].map((heading, index) => (
//                                                 <TableCell key={index} sx={{ color: '#fff', fontWeight: 'bold' }}>
//                                                     {heading}
//                                                 </TableCell>
//                                             ))}
//                                         </TableRow>
//                                     </TableHead>
//                                     <TableBody>
//                                         {filteredData.map((element, index) => (
//                                             <motion.tr key={index} whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
//                                                 {element.map((data, i) => (
//                                                     <TableCell key={i} sx={{ fontWeight: 'medium' }}>{data}</TableCell>
//                                                 ))}
//                                             </motion.tr>
//                                         ))}
//                                     </TableBody>
//                                 </Table>
//                             </motion.div>
//                         ) : (
//                             <motion.div animate={{ y: [0, -5, 0], opacity: [0, 1, 1] }} transition={{ duration: 0.6, repeat: 2 }}>
//                                 <Typography variant="h6" sx={{ mt: 3, fontWeight: 'bold', color: '#FFD700' }}>
//                                     🚫 No Data Found
//                                 </Typography>
//                             </motion.div>
//                         )}
//                     </Paper>
//                 </motion.div>
//             </Container>
//         </ThemeProvider>
//     );
// }

// export default Billing;


















// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { 
// //     Container, Typography, Paper, Box, ThemeProvider, createTheme, CssBaseline, Switch, Table, TableHead, TableBody, TableRow, TableCell 
// // } from '@mui/material';
// // import { motion } from 'framer-motion';
// // import NavClient from './NavClient';

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

// // function Billing() {
// //     const [user, setUser] = useState([]);
// //     const [darkMode, setDarkMode] = useState(false);

// //     useEffect(() => {
// //         axios.get("http://localhost:1005/order/billing")
// //         .then((res) => {
// //             console.log(res.data);
// //             setUser(res.data);
// //         })
// //         .catch((error) => {
// //             console.log(error);
// //             alert("SOMETHING WENT WRONG FETCHING DATA");
// //         });
// //     }, []);

// //     return (
// //         <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
// //             <CssBaseline />
// //             <Container maxWidth="lg" sx={{ mt: 6 }}>
// //                 <NavClient />

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
// //                             📋 Order Billing Details
// //                         </Typography>

// //                         {user.length > 0 ? (
// //                             <motion.div
// //                                 initial={{ opacity: 0 }}
// //                                 animate={{ opacity: 1 }}
// //                                 transition={{ duration: 0.8 }}
// //                             >
// //                                 <Table sx={{ bgcolor: '#fff', borderRadius: 3 }}>
// //                                     <TableHead sx={{ bgcolor: darkMode ? '#444' : '#FF6F61', color: '#fff' }}>
// //                                         <TableRow>
// //                                             {["Order ID", "Order Date", "Food ID", "Food Name", "Quantity Ordered", "Price", "Total Cost", "Username"].map((heading, index) => (
// //                                                 <TableCell key={index} sx={{ color: '#fff', fontWeight: 'bold' }}>
// //                                                     {heading}
// //                                                 </TableCell>
// //                                             ))}
// //                                         </TableRow>
// //                                     </TableHead>
// //                                     <TableBody>
// //                                         {user.map((element, index) => (
// //                                             <motion.tr
// //                                                 key={index}
// //                                                 whileHover={{ scale: 1.02 }}
// //                                                 transition={{ duration: 0.3 }}
// //                                             >
// //                                                 {element.map((data, i) => (
// //                                                     <TableCell key={i} sx={{ fontWeight: 'medium' }}>{data}</TableCell>
// //                                                 ))}
// //                                             </motion.tr>
// //                                         ))}
// //                                     </TableBody>
// //                                 </Table>
// //                             </motion.div>
// //                         ) : (
// //                             <motion.div
// //                                 animate={{ y: [0, -5, 0], opacity: [0, 1, 1] }}
// //                                 transition={{ duration: 0.6, repeat: 2 }}
// //                             >
// //                                 <Typography variant="h6" sx={{ mt: 3, fontWeight: 'bold', color: '#FFD700' }}>
// //                                     🚫 No Data Found
// //                                 </Typography>
// //                             </motion.div>
// //                         )}
// //                     </Paper>
// //                 </motion.div>
// //             </Container>
// //         </ThemeProvider>
// //     );
// // }

// // export default Billing;
















// // // import React from 'react'
// // // import axios from 'axios'
// // // import { useState } from 'react'
// // // import { useEffect } from 'react'
// // // import NavClient from './NavClient'



// // // function Billing() {
// // //     let[user,setUser]=useState([]);
// // //     useEffect(()=>{
// // //        axios.get("http://localhost:1005/order/billing")
// // //        .then((res)=>{
// // //         console.log(res.data);
// // //         setUser(res.data);
// // //        })
// // //        .catch((error)=>{
// // //         console.log(error);
// // //         alert("SOME THING WENT WRONG ON FETCHING DATA");
// // //        })
// // //     },[])
// // //   return (
// // //     <div>
// // //         <NavClient/>
// // //       <h2 className='text-primary'>AVAILABLE FOOD DETAILS</h2>
// // //       {
// // //         user.length>0 ?
// // //          <div style={{width:"100%",margin:"50px auto"}}> 
// // //             <table className='table table-hover table-striped '>
// // //                 <thead className='table table-dark'>
// // //                     <tr>
// // //                     <td>ORDER ID</td>
// // //                     <td>ORDER DATE</td>
// // //                     <td>FOOD ID</td>
// // //                     <td>FOOD NAME</td>
// // //                     <td>QUANTITY ORDERED</td>
// // //                     <td>PRICE</td>
// // //                     <td>TOTAL COST</td>
// // //                     <td>USERNAME</td>
// // //                     </tr>
// // //                 </thead>
// // //                 <tbody>
// // //                     {
// // //                         user.map((element,index)=>{
// // //                             return(
// // //                                 <tr>
// // //                                     <td>{element[0]}</td>
// // //                                     <td>{element[1]}</td>                                    
// // //                                     <td>{element[2]}</td>
// // //                                     <td>{element[3]}</td>
// // //                                     <td>{element[4]}</td>
// // //                                     <td>{element[5]}</td>
// // //                                     <td>{element[6]}</td>
// // //                                     <td>{element[7]}</td>
                                    
// // //                                 </tr>
// // //                             )
// // //                         })
// // //                     }
// // //                 </tbody>
// // //             </table>
// // //          </div> 
// // //          :<h2 style={{color:"red"}}>NO DATA FOUND</h2>
// // //       }
// // //     </div>
// // //   )
// // // }
   

// // // export default Billing