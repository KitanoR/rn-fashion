import React from 'react';
import { Container, Button, Text, Box } from '../../components';
import { SocialLogin } from '../../components';
import TextInput from '../../components/Form/TextInput';
import Checkbox from '../../components/Form/Checkbox';
import { Formik } from 'formik';

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

    const Footer = () => {
        return (
            <>
                <SocialLogin />

                <Box alignItems="center" marginTop="m">
                    <Button variant="transparent"
                        onPress={() => alert('ingreso ')}>
                        <Box flexDirection="row" flex={1} marginTop="s">
                            <Text variant="button" fontSize={12} color="white">Don't have an account?</Text>
                            <Text marginLeft="s" fontSize={12} variant="button" color="primary">Sign Up here</Text>
                        </Box>
                    </Button>
                </Box>
            </>
        )

    }
    return (
        <Container footer={<Footer />}>
            <Box padding="xl">
                <Text variant="title1" textAlign="center" marginBottom="m">Welcome back</Text>
                <Text variant="body" textAlign="center" marginBottom="l">
                    Use your credentials below and login to your account
                </Text>

                <Formik
                    validationSchema={LoginSchema}
                    initialValues={{ email: '', password: '', remember: true }}
                    onSubmit={values => console.log(values)}
                >
                    {({ 
                        handleChange, 
                        handleBlur, 
                        handleSubmit, 
                        values,
                        errors,
                        touched,
                        setFieldValue
                    }) => (
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
                    )}
                </Formik>

            </Box>

        </Container>
    )
}