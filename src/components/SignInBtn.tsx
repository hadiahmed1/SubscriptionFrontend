import Button from "@mui/material/Button";
import LoginIcon from '@mui/icons-material/Login';
import { useNavigate } from "react-router";

const SignInBtn = () => {
    const navigate = useNavigate();
    return (
        <Button
            onClick={() => navigate('/signin')}
            variant="outlined"
            sx={{
                color: 'white',
                borderColor: 'white',
                '&:hover': {
                    backgroundColor: 'white',
                    color: 'black',
                    borderColor: 'white',
                },
            }}
        >
            <LoginIcon sx={{ color: 'inherit', mr: 1 }} />
            <b>Login</b>
        </Button>
    );
}

export default SignInBtn;