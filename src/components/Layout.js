import React from 'react';
import { Outlet } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import NavBar from './Navbar';


function Layout() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="xl">
                <Box sx={{height: '100vh' }}>
                    <header>
                        <NavBar />
                    </header>
                    <main>
                        <Outlet />
                    </main>
                    <footer>
                        this is footer
                    </footer>
                </Box>
            </Container>
        </React.Fragment>
    )
}

export default Layout