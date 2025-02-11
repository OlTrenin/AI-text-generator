import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";


export function Navbar() {

    return (
        <Box sx={{ flexGrow: 2  }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component={Link} to='/' sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
                        Learn English
                    </Typography>
                        <Button color="inherit" variant="text" size="small" component={Link} to="/dictonary" sx={{mr: 1}}>Dictonary</Button>
                        <Button color="inherit" variant="outlined" size="small" component={Link} to="/register" sx={{mr: 1}}>Sign Up</Button>
                        <Button color="inherit" variant="outlined" size="small" component={Link} to="/login" sx={{mr: 1}}>Sign in</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
