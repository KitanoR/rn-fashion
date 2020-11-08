import React, { useRef } from 'react';
import { TextInput as RNTexInput } from 'react-native';
import { Container, Button, Text, Box } from '../../components';
import TextInput from '../../components/Form/TextInput';
import Checkbox from '../../components/Form/Checkbox';
import Footer from '../components/Footer';
import { useFormik } from 'formik';


import * as Yup from "yup";
import { Routes, StackNavigationProps } from '../../components/Navigation';
 
const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
});


export default ({ navigation }: StackNavigationProps<Routes, "SignUp">) => {
    const passwordRef = useRef<typeof RNTexInput>();
    const FooterComponent = <Footer
        title="Don't have an account?"
        action="Sign Up here"
        onPress={() => navigation.navigate("SignUp")}
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
        validationSchema: LoginSchema,
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
                            autoCompleteType="email"
                            autoCapitalize="none"
                            returnKeyLabel="next"
                            returnKeyType="next"
                            onSubmitEditing={() => passwordRef.current?.focus()}
                        />
                    </Box>
                    <TextInput
                        ref={passwordRef}
                        icon="lock"
                        placeholder="Enter your password"
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        error={errors.password}
                        touched={touched.password}
                        autoCompleteType="password"
                        returnKeyLabel="go"
                        returnKeyType="go"
                        onSubmitEditing={() => handleSubmit()}
                        secureTextEntry
                    />
                    <Box flexDirection="row" justifyContent="space-between">
                        <Checkbox 
                            checked={values.remember}
                            onChange={() => setFieldValue("remember", !values.remember) }
                            label="Remember me" />
                        <Button variant="transparent" onPress={() => navigation.navigate("ForgotPassword")}>
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