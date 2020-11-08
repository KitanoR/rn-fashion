import React from 'react';
import { Routes, StackNavigationProps } from '../../components/Navigation';
import { Container, Button, Text, Box, CloseButton } from '../../components';
import { Feather as Icon } from '@expo/vector-icons';


const SIZE = 80;
const PasswordChanged = ({
    navigation,
}: StackNavigationProps<Routes,  "PasswordChanged">) => {
    return (
        <Container footer={
            <Box flexDirection="row" justifyContent="center">
                <CloseButton onPress={() => { navigation.navigate("Login") }}/>
            </Box>
        }>
            <Box flex={1} justifyContent="center" alignItems="center">
                <Box 
                    backgroundColor="primaryLight"
                    justifyContent="center" alignItems="center"
                    marginBottom="xl"
                    style={{ height: SIZE, width: SIZE, borderRadius: SIZE / 2 }}>
                        <Text color="primary"  textAlign="center">
                            <Icon name="check" size={32}/>
                        </Text>
                </Box>
                <Text variant="title1" textAlign="center" marginBottom="m">
                    Your password was successfully changed
                </Text>
                <Text variant="body" textAlign="center" marginBottom="l">
                    Close this window and login again
                </Text>
                <Box alignItems="center" marginTop="m">
                    <Button 
                        onPress={() => { navigation.pop()  }}
                        variant="primary" label="Reset password" />
                </Box>
            </Box>
        </Container>
    );
}

export default PasswordChanged;