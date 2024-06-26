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
import React from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { loginSchema } from "../utils/schemas";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues: {
      phone: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div className="h-[100vh] flex items-center justify-center bg-yellow-200">
      <Paper elevation={15} className="">
        <form
          onSubmit={formik.handleSubmit}
          className="p-8 flex flex-col gap-6 items-center justify-center"
        >
          <Typography variant="h6">Hi, Welcome back! &#128075;</Typography>

          <div className="w-full flex flex-col">
            <TextField
              sx={{ width: "100%" }}
              label="Phone No."
              type="text"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
            />
            {formik.touched.phone && formik.errors.phone && (
              <Typography variant="caption" className="text-red-500">
                {formik.errors.phone}
              </Typography>
            )}
          </div>

          <div className="w-full flex flex-col">
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
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
            </FormControl>
            {formik.touched.password && formik.errors.password && (
              <Typography variant="caption" className="text-red-500 text-wrap">
                {formik.errors.password}
              </Typography>
            )}
          </div>

          <Button
            variant="contained"
            sx={{ backgroundColor: "black", width: "100%" }}
            type="submit"
          >
            Login
          </Button>

          <Typography variant="caption">
            Already have an account ?{" "}
            <span
              onClick={() => navigate("/sign-up")}
              className="font-bold cursor-pointer hover:text-blue-600"
            >
              Sign Up
            </span>
          </Typography>
        </form>
      </Paper>
    </div>
  );
};

export default Login;
