import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleLogin = () => setIsLogin((prev) => !prev);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <div className="h-[100vh] flex items-center justify-center bg-yellow-200">
      <Paper elevation={15} className="">
        <form className="p-8 flex flex-col gap-6 items-center justify-center">
          <Typography variant="h6">
            {isLogin ? "Hi, Welcome back!" : "Create an account"}
          </Typography>

          {!isLogin && (
            <TextField
              sx={{ width: "100%" }}
              id="outlined-password-input"
              label="Name"
              type="text"
              autoComplete="current-password"
            />
          )}

          <TextField
            sx={{ width: "100%" }}
            id="outlined-password-input"
            label="Phone No."
            type="text"
            autoComplete="current-password"
          />
          <FormControl sx={{ width: "100%" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>

          <Button
            variant="contained"
            sx={{ backgroundColor: "black", width: "100%" }}
          >
            {isLogin ? "Login" : "Sign Up"}
          </Button>

          <Typography variant="caption">
            {isLogin
              ? "Don't have an account ? "
              : "Already have an account ? "}
            <span
              onClick={toggleLogin}
              className="font-bold cursor-pointer hover:text-blue-600"
            >
              {isLogin ? "Sign Up" : "Login"}
            </span>
          </Typography>
        </form>
      </Paper>
    </div>
  );
};

export default Login;
