import React from 'react';
import { Container, Button, Text, Box } from '../../components';
import { SocialLogin } from '../../components';
import TextInput from '../../components/Form/TextInput';
import Checkbox from '../../components/Form/Checkbox';
import Footer from '../components/Footer';
import { useFormik } from 'formik';

import * as Yup from "yup";
 
const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
});


export default () => {

    const FooterComponent = <Footer 
        title="Don't have an account?"
        action="Sign Up here"
        onPress={() => alert('ingreso ')}
    />
    
  

    const { 
        handleChange, 
        handleBlur, 
        handleSubmit, 
        values,
        errors,
        touched,
        setFieldValue
    } = useFormik({
        validationSchema: {LoginSchema},
        initialValues: { email: '', password: '', remember: true },
        onSubmit: (values) => console.log(values)
    });

    return (
        <Container footer={FooterComponent}>
            <Box padding="xl">
                <Text variant="title1" textAlign="center" marginBottom="m">Welcome back</Text>
                <Text variant="body" textAlign="center" marginBottom="l">
                    Use your credentials below and login to your account
                </Text>

                <Box>
                    <Box marginBottom="m">
                        <TextInput
                            icon="mail"
                            placeholder="Enter your email"
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            error={errors.email}
                            touched={touched.email}
                        />
                    </Box>
                    <TextInput
                        icon="lock"
                        placeholder="Enter your password"
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        error={errors.password}
                        touched={touched.password}
                    />
                    <Box flexDirection="row" justifyContent="space-between">
                        <Checkbox 
                            checked={values.remember}
                            onChange={() => setFieldValue("remember", !values.remember) }
                            label="Remember me" />
                        <Button variant="transparent" onPress={() => { }}>
                            <Text variant="body" color="primary">Forgot password</Text>
                        </Button>
                    </Box>
                    <Box alignItems="center" marginTop="m">
                        <Button 
                            onPress={handleSubmit}
                            variant="primary" label="Log into your account" />
                    </Box>
                </Box>

            </Box>

        </Container>
    )
};