import React, { useRef } from 'react';
import { Container, Button, Text, Box } from '../../components';

import TextInput from '../../components/Form/TextInput';
import Footer from '../components/Footer';
import { useFormik } from 'formik';

import * as Yup from "yup";
import { Routes, StackNavigationProps } from '../../components/Navigation';
 

const SignUpSchema = Yup.object().shape({
    password: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
    passwordConfirmation: Yup.string()
      .equals([Yup.ref('password')], "PAsswords don't match")
      .required('Required'),
  });

interface SignUpProps {}

const SignUp = ({ navigation }: StackNavigationProps<Routes, "Login">): SignUpProps => {
    const passwordRef = useRef<typeof TextInput>();
    const passwordConfirmRef = useRef<typeof TextInput>();

    const FooterComponent = <Footer
            title="Do have an account?"
            action="Login here"
            onPress={() => navigation.goBack()}
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
        validationSchema: SignUpSchema,
        initialValues: { email: '', password: '', passwordConfirmation: '' },
        onSubmit: (values) => console.log(values)
    });

    return (
        <Container footer={FooterComponent}>
            <Box padding="xl">
                <Text variant="title1" textAlign="center" marginBottom="m">Create account</Text>
                <Text variant="body" textAlign="center" marginBottom="l">
                    Let's us know what your name, email, and your password
                </Text>

                <Box>
                    <Box marginBottom="m">
                        <TextInput
                            icon="mail"
                            placeholder="Enter your email"
                            onChangeText={handleChange('emali')}
                            onBlur={handleBlur('email')}
                            error={errors.email}
                            touched={touched.email}
                            returnKeyLabel="siguiente"
                            returnKeyType="next"
                            onSubmitEditing={() => passwordRef.current?.focus()}
                        />
                    </Box>
                    <Box marginBottom="m">
                        <TextInput
                            ref={passwordRef}
                            icon="lock"
                            placeholder="Enter your password"
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            error={errors.password}
                            touched={touched.password}
                            autoCompleteType="password"
                            autoCapitalize="none"
                            returnKeyLabel="next"
                            returnKeyType="next"
                            onSubmitEditing={() => passwordConfirmRef.current?.focus()}
                        />
                    </Box>
                    <Box marginBottom="m">
                        <TextInput
                            ref={passwordConfirmRef}
                            icon="lock"
                            placeholder="Enter your password"
                            onChangeText={handleChange('passwordConfirmation')}
                            onBlur={handleBlur('passwordConfirmation')}
                            error={errors.passwordConfirmation}
                            touched={touched.passwordConfirmation}
                            autoCompleteType="password"
                            returnKeyLabel="go"
                            returnKeyType="go"
                            onSubmitEditing={handleSubmit}
                            secureTextEntry
                        />
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
}


export default SignUp;