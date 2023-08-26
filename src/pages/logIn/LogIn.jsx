import {
  Button,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "../logIn/logIn.scss";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Checkbox from "@mui/material/Checkbox";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const LogIn = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  //state for google login
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);

  //sign in button custom style

  const buttonStyle = {
    // display: "block",
    width: "50%",
    height: "3rem",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#613394",
    color: "white",
    padding: "14px 28px",
    fontSize: "16px",
    cursor: "pointer",
    textAlign: "center",
    marginLeft: "8.7rem",
    marginTop: "1rem",
    zIndex: "2",
  };

  const fullPage = {
    height: "100vh",
    
    display:"flex",
    // justifyContent: "space-between",
    flexDirection: { xs:"column",sm: "column", lg: "row" },
    
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box>
      <Stack direction="row"  sx={fullPage}>
        <Box className="logIn_page" bgcolor="#FFFFFF" flex={1}>
          <Typography variant="h5" className="font_1">
            Welcome Back
          </Typography>
          <Typography variant="caption" className="font_2">
            Please Enter Your Details
          </Typography>
          <Box
            component="form"
            className="form_container"
            sx={{
              "& .MuiTextField-root": { m: 0, width: "50ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <Box className="password_field">
              <label style={{ marginTop: "8px" }}>Password:</label>
              <FormControl
                sx={{ m: 0, width: "50ch" }}
                variant="outlined"
                label="Size"
                id="outlined-size-small"
                defaultValue="Small"
                size="small"
              >
                <InputLabel htmlFor="outlined-adornment-password">
                  Email
                </InputLabel>
                <OutlinedInput id="outlined-adornment-password" label="Email" />
              </FormControl>
            </Box>
            <Box className="password_field">
              <label style={{ marginTop: "8px" }}>Password:</label>
              <FormControl
                sx={{ m: 0, width: "50ch" }}
                variant="outlined"
                label="Size"
                id="outlined-size-small"
                defaultValue="Small"
                size="small"
              >
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
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
            </Box>
            <Box className="logIn_checkbox">
              <FormControlLabel
                control={
                  <Checkbox
                    // checked={}
                    // onChange={handleChange}
                    name="remembered_password"
                  />
                }
                label="Remember for 30days"
              />
            </Box>
            <Box className="logIn_button">
              <Button className="btn_signIn" sx={buttonStyle}>
                Sign in
              </Button>
            </Box>
            <Box className="google_btn"></Box>
          </Box>
        </Box>
        <Box
          className="main_content"
          bgcolor="#613394"
          flex={1}
         
        >
          <Typography variant="body1">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus nihil deleniti blanditiis inventore nobis voluptatibus veritatis, temporibus cumque officia voluptatum corrupti non sit repellendus sequi quidem pariatur iste commodi. At.
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default LogIn;
