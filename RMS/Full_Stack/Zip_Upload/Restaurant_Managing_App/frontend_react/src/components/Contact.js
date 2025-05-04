// // // import React from 'react'

// // // const Contact = () => {
// // //   return (
// // //     <div>
// // //       ARPAN CHATTERJEE
// // //       8225447890
// // //     </div>
// // //   )
// // // }

// // // export default Contact
// // import React from 'react';
// // import { Container, Card, CardContent, Typography, Box } from '@mui/material';
// // import { motion } from 'framer-motion';

// // const Contact = () => {
// //   return (
// //     <Container maxWidth="sm" sx={{ mt: 6 }}>
// //       {/* Contact Card Animation */}
// //       <motion.div 
// //         initial={{ opacity: 0, scale: 0.9 }} 
// //         animate={{ opacity: 1, scale: 1 }} 
// //         transition={{ duration: 0.6, ease: "easeOut" }}
// //       >
// //         <Card elevation={10} sx={{ 
// //           p: 4, borderRadius: 6, textAlign: 'center', 
// //           background: 'linear-gradient(135deg, #FF6F61, #6A5ACD)', 
// //           color: '#fff'
// //         }}>
// //           <CardContent>
// //             <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
// //               📞 Contact Information
// //             </Typography>

// //             <Box sx={{ mb: 2 }}>
// //               <Typography variant="h6" sx={{ fontWeight: 'medium' }}>
// //                 Name: <strong>Arpan Chatterjee</strong>
// //               </Typography>
// //             </Box>

// //             <Box sx={{ mb: 2 }}>
// //               <Typography variant="h6" sx={{ fontWeight: 'medium' }}>
// //                 Phone: <strong>8225447890</strong>
// //               </Typography>
// //             </Box>

// //             <Box>
// //               <Typography variant="h6" sx={{ fontWeight: 'medium' }}>
// //                 Email: <strong>arpan@example.com</strong>
// //               </Typography>
// //             </Box>
// //           </CardContent>
// //         </Card>
// //       </motion.div>
// //     </Container>
// //   );
// // };

// // export default Contact;


// import React from 'react';
// import { Container, Card, CardContent, Typography, Box } from '@mui/material';
// import { motion } from 'framer-motion';

// const Contact = () => {
//   return (
//     <Container maxWidth="sm" sx={{ mt: 6 }}>
//       {/* Contact Card Animation */}
//       <motion.div 
//         initial={{ opacity: 0, scale: 0.9 }} 
//         animate={{ opacity: 1, scale: 1 }} 
//         transition={{ duration: 0.6, ease: "easeOut" }}
//       >
//         <Card elevation={10} sx={{ 
//           p: 4, borderRadius: 6, textAlign: 'center', 
//           background: 'linear-gradient(135deg, #FF6F61, #6A5ACD)', 
//           color: '#fff'
//         }}>
//           <CardContent>
//             <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
//               📞 Contact Information
//             </Typography>

//             {/* Name Section */}
//             <Box sx={{ mb: 2 }}>
//               <Typography variant="h6" sx={{ fontWeight: 'medium' }}>
//                 Name: <strong>Arpan Chatterjee</strong>
//               </Typography>
//             </Box>

//             {/* Phone Numbers Section */}
//             <Box sx={{ mb: 2 }}>
//               <Typography variant="h6" sx={{ fontWeight: 'medium' }}>
//                 Phone: <strong>+91 8225447890</strong> | <strong>+91 9876543210</strong>
//               </Typography>
//             </Box>

//             {/* Email Section */}
//             <Box sx={{ mb: 2 }}>
//               <Typography variant="h6" sx={{ fontWeight: 'medium' }}>
//                 Email: <strong>arpan@example.com</strong> | <strong>contact@arpanrestaurant.com</strong>
//               </Typography>
//             </Box>

//             {/* Address Section */}
//             <Box sx={{ mb: 2 }}>
//               <Typography variant="h6" sx={{ fontWeight: 'medium' }}>
//                 Address: <strong>123 Food Street, Asansol, WB, India</strong>
//               </Typography>
//             </Box>

//             {/* Personal Bio Section */}
//             <Box sx={{ mb: 2 }}>
//               <Typography variant="h6" sx={{ fontWeight: 'medium', fontStyle: 'italic' }}>
//                 "Passionate about food, flavors, and experiences, I believe that every dish tells a story.  
//                 With years of culinary expertise, my goal is to create unforgettable meals that bring people together."
//               </Typography>
//             </Box>

//             {/* Restaurant Description Section */}
//             <Box>
//               <Typography variant="h6" sx={{ fontWeight: 'medium', fontStyle: 'italic' }}>
//                 "Arpan’s Restaurant is a haven for food lovers, serving authentic and innovative dishes with  
//                 a blend of tradition and modern flavors. We strive to make every bite an experience worth savoring!"
//               </Typography>
//             </Box>
//           </CardContent>
//         </Card>
//       </motion.div>
//     </Container>
//   );
// };

// export default Contact;


import React, { useState } from 'react';
import { Container, Card, CardContent, Typography, Box, Switch, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { motion } from 'framer-motion';

const lightTheme = createTheme({
    palette: { mode: 'light', primary: { main: '#FF6F61' }, secondary: { main: '#6A5ACD' }, background: { default: '#FCE4EC' }, text: { primary: '#333' }},
    typography: { fontFamily: 'Poppins, sans-serif' },
});

const darkTheme = createTheme({
    palette: { mode: 'dark', primary: { main: '#FF6F61' }, secondary: { main: '#6A5ACD' }, background: { default: '#222' }, text: { primary: '#fff' }},
    typography: { fontFamily: 'Poppins, sans-serif' },
});

const Contact = () => {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <CssBaseline />
            <Container maxWidth="sm" sx={{ mt: 6 }}>

                {/* Dark Mode Toggle */}
                <Box sx={{ textAlign: 'center', mb: 3 }}>
                    <Typography variant="body1" color="text.primary">🌙 Dark Mode</Typography>
                    <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
                </Box>

                {/* Contact Card Animation */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <Card elevation={10} sx={{ 
                        p: 4, borderRadius: 6, textAlign: 'center',
                        background: darkMode ? 'linear-gradient(135deg, #333, #444)' : 'linear-gradient(135deg, #FF6F61, #6A5ACD)',
                        color: '#fff'
                    }}>
                        <CardContent>
                            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
                                📞 Contact Information
                            </Typography>

                            {/* Name Section */}
                            <Box sx={{ mb: 2 }}>
                                <Typography variant="h6" sx={{ fontWeight: 'medium' }}>
                                    Name: <strong>Arpan Chatterjee</strong>
                                </Typography>
                            </Box>

                            {/* Phone Numbers Section */}
                            <Box sx={{ mb: 2 }}>
                                <Typography variant="h6" sx={{ fontWeight: 'medium' }}>
                                    Phone: <strong>+91 8225447890</strong> | <strong>+91 9876543210</strong>
                                </Typography>
                            </Box>

                            {/* Email Section */}
                            <Box sx={{ mb: 2 }}>
                                <Typography variant="h6" sx={{ fontWeight: 'medium' }}>
                                    Email: <strong>arpan@example.com</strong> | <strong>contact@arpanrestaurant.com</strong>
                                </Typography>
                            </Box>

                            {/* Address Section */}
                            <Box sx={{ mb: 2 }}>
                                <Typography variant="h6" sx={{ fontWeight: 'medium' }}>
                                    Address: <strong>123 Food Street, Asansol, WB, India</strong>
                                </Typography>
                            </Box>

                            {/* Personal Bio Section */}
                            <Box sx={{ mb: 2 }}>
                                <Typography variant="h6" sx={{ fontWeight: 'medium', fontStyle: 'italic' }}>
                                    "Passionate about food, flavors, and experiences, I believe that every dish tells a story.  
                                    With years of culinary expertise, my goal is to create unforgettable meals that bring people together."
                                </Typography>
                            </Box>

                            {/* Restaurant Description Section */}
                            <Box>
                                <Typography variant="h6" sx={{ fontWeight: 'medium', fontStyle: 'italic' }}>
                                    "Arpan’s Restaurant is a haven for food lovers, serving authentic and innovative dishes with  
                                    a blend of tradition and modern flavors. We strive to make every bite an experience worth savoring!"
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </motion.div>
            </Container>
        </ThemeProvider>
    );
};

export default Contact;
