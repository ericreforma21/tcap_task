import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from "prop-types";
import { Formik, Form } from 'formik';
import { Grid, Checkbox, Button, Box } from "@mui/material"
import * as Yup from 'yup';
import ReCAPTCHA from "react-google-recaptcha";
import { Item, ItemFull, TextField, OpenLinkIcon, TermsAndConditionContainer, ErrorMsg, RegisterContainer } from './AuthPage.style';
import { phoneRegExp } from '../../utils/helper';
import { setPageHeight, activePage } from '../../store/Page/Page.slice';
import { formFields, initialValues } from '../../constants/Register';

const Register = ({
  setPage
}) => {
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
  const containerRef = useRef(null)
  const currentPage = useSelector(activePage)
  const dispatch = useDispatch();

  useEffect(() => {
    if(recaptchaLoaded && currentPage === '/register')
      dispatch(setPageHeight(containerRef.current.clientHeight))

  }, [currentPage, recaptchaLoaded])

  const termsAndCondition = <>
      By clicking this box you have read and agree to the <a href='#'>Terms and Conditions <OpenLinkIcon/></a> and you are authorized to accept these terms and conditions on behalf of your company.
    </>
  
  const RegisterSchema = Yup.object().shape({
    companyName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required(),
    telNumber: Yup.string().matches(phoneRegExp, 'Telephone number is not valid').required('Required'),
    termsAndCondition: Yup.bool().oneOf([true], 'Accept Terms & Conditions is required'),
    recaptcha: Yup.string().required(),
  });

  return (
    <RegisterContainer ref={containerRef}>
      <Formik
        initialValues={initialValues}
        validationSchema={RegisterSchema}
        onSubmit={values => {
          console.log('@@', values)
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur }) => (
          <Form>
          <Grid container columnSpacing={5} rowSpacing={2}>
            {formFields.map(field => 
              <Item>
                <TextField
                  label={field.text}
                  type={field.type}
                  name={field.name} error={errors[field.name] && touched[field.name]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMsg>{errors[field.name] && touched[field.name] && errors[field.name]}</ErrorMsg>
              </Item>
            )}
            <ItemFull >
              <TermsAndConditionContainer
                  label={termsAndCondition}
                  control={<Checkbox checked={values.termsAndCondition} name="termsAndCondition" onChange={handleChange} onBlur={handleBlur}/>}
              />
              <ErrorMsg error>{errors.termsAndCondition}</ErrorMsg>
            </ItemFull>
            <ItemFull>
              <ReCAPTCHA
                sitekey="key"
                onChange={handleChange}
                asyncScriptOnLoad={() => {
                  setRecaptchaLoaded(true);
                }}
              />
            </ItemFull>
            <ItemFull>
              <Box display="flex" justifyContent="flex-end">
                <Button type="submit" variant="contained">Register</Button>
              </Box>
            </ItemFull>
            <ItemFull>
              <Box display="flex" justifyContent="center">
                <Button onClick={() => {
                  setPage('Login', '/login')
                }}>Back to Login</Button>
              </Box>
            </ItemFull>
          </Grid>
          </Form>
        )}

      </Formik>
    </RegisterContainer>
  )
}
Register.propTypes = {
  setPage: PropTypes.func,
}

export default Register;
