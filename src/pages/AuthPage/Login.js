import React, { useEffect, useRef }  from 'react';
import PropTypes from "prop-types";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { Grid, Box, Button } from "@mui/material";
import * as Yup from 'yup';
import { setPageHeight, activePage } from '../../store/Page/Page.slice';
import { ItemFull, TextField, LoginContainer, ErrorMsg } from './AuthPage.style';
import { formFields, initialValues } from '../../constants/Login';
import { login as loginAPI } from '../../store/Auth/Auth.extraReducers';
import { loginUser } from '../../store/Auth/Auth.slice';
import { getCurrentAdmin as adminMeAPI } from '../../store/Admin/Admin.extraReducer';
import { setAdminData } from '../../store/Admin/Admin.slice';
import { setRequestHeaderToken } from '../../services/useApi';
import PathsURL from '../../constants/PathsURL';

const Login = ({ setPage }) => {
  const containerRef = useRef(null)
  const currentPage = useSelector(activePage)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required(),
    password: Yup.string().required(),
  });

  useEffect(() => {
    if(currentPage === '/login')
      dispatch(setPageHeight(containerRef.current.clientHeight))
  }, [currentPage])

  return (
    <LoginContainer ref={containerRef}>
      <Formik
        initialValues={initialValues} 
        validationSchema={LoginSchema}
        onSubmit={values => {
          dispatch(
            loginAPI({ username: values?.email, password: values?.password, code: 60})
          ).then((res) => {
            setRequestHeaderToken(res?.payload?.token);
            dispatch(loginUser({isLogin: true,userData: res?.payload}));
            dispatch(
              adminMeAPI()
            ).then((res) => {
              dispatch(setAdminData({adminData: res?.payload}));
              navigate(PathsURL.numberBlockList);
            })
          })
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur }) => (
          <Form>
          <Grid container spacing={5}>
            {formFields.map(field => 
              <ItemFull>
                <TextField
                  label={field.text}
                  type={field.type}
                  name={field.name} error={errors[field.name] && touched[field.name]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMsg>{errors[field.name] && touched[field.name] && errors[field.name]}</ErrorMsg>
              
              </ItemFull>
            )}
            <ItemFull>
              <Box display="flex" justifyContent="space-between">
                <Button type="submit" variant="contained">Login</Button>
                <Button variant="outlined" onClick={() => {
                  setPage('Register', '/register')
                }}>Register</Button>
              </Box>
            </ItemFull> 
            <ItemFull>
              <Box display="flex" justifyContent="center">
                <Button >Forgot Password</Button>
              </Box>
            </ItemFull>
          </Grid>
          </Form>
        )}

      </Formik>
    </LoginContainer>
  )
}

Login.propTypes = {
  setPage: PropTypes.func
}

export default Login;
