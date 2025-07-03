import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router';

export default function HeaderWithNavBtn({ heading, navigateTo }: { heading: string, navigateTo: string }) {
    const navigate = useNavigate();
    return (
        <Box>
            <AppBar position="static">
                <Toolbar sx={{ backgroundColor: 'skyblue' }}>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                        {heading}
                    </Typography>
                    <Button
                        sx={{
                            color: 'white',
                            borderColor: 'white',
                            '&:hover': {
                                backgroundColor: 'white',
                                color: 'black',
                                borderColor: 'white',
                            },
                        }}
                        onClick={() => { navigate(navigateTo) }} color="inherit">{"Add " + heading}</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
