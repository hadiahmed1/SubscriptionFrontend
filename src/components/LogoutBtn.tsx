import LogoutIcon from '@mui/icons-material/Logout';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router';
import api from '../utils/axiosInstace';
import useUser from '../hooks/useUser';


const LogoutBtn = () => {
    const navigate = useNavigate();
    const { setUser } = useUser();
    const logout = async () => {
        try {
            const res = await api.post('/auth/logout');
            console.log(res.data);
            setUser(null);
        } catch (error) {
            console.log(error);
        }
        return;
    };
    return (
        <Button
            onClick={() => {
                logout();
                navigate('/');
            }}
            variant="outlined"
            sx={{
                backgroundColor: 'red',
                color: 'white',
                '&:hover': {
                    borderColor: 'white',
                    borderWidth: 2
                },
            }}
        >
            <LogoutIcon sx={{ color: 'inherit', mr: 1 }} />
            <b>Logout</b>
        </Button>
    );
}

export default LogoutBtn;