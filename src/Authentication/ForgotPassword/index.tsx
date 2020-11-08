import React, { useRef } from 'react';
import { TextInput as RNTexInput, Linking } from 'react-native';
import { Container, Button, Text, Box } from '../../components';
import TextInput from '../../components/Form/TextInput';
import Footer from '../components/Footer';
import { useFormik } from 'formik';


import * as Yup from "yup";
import { Routes, StackNavigationProps } from '../../components/Navigation';
 
const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
});


const ForgotPassword =  ({ navigation }: StackNavigationProps<Routes, "ForgotPassword">) => {
    const FooterComponent = <Footer
        title="Don't work?"
        action="Try another way"
        onPress={() => Linking.openURL('mailto:help@support.com')}
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
        validationSchema: ForgotPasswordSchema,
        initialValues: { email: '' },
        onSubmit: (values) => console.log(values)
    });
    return(
        <Container footer={FooterComponent}>
            <Box padding="xl" justifyContent="center" flex={1}>
                <Text variant="title1" textAlign="center" marginBottom="m">Forgot password?</Text>
                <Text variant="body" textAlign="center" marginBottom="l">
                    Enter the email address associated with your account
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
                            returnKeyLabel="go"
                            returnKeyType="go"
                            onSubmitEditing={() => handleSubmit()}
                        />
                    </Box>
                    <Box alignItems="center" marginTop="m">
                        <Button 
                            onPress={handleSubmit}
                            variant="primary" label="Reset password" />
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}


export default ForgotPassword;