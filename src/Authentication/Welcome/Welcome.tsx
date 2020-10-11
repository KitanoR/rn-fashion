import React from 'react';
import { Image, Dimensions } from 'react-native';
import  { Button, Box, Text  } from '../../components';
import { Routes, StackNavigationProps } from '../../components/Navigation';
import { useTheme } from '../../components/Theme';

const { width } = Dimensions.get("window");
const picture = {
    src: require('../../../assets/5.png'),
    width: 3383,
    height: 5074
}

export default ({ navigation }: StackNavigationProps<Routes, "Welcome">) => {
    const theme = useTheme();
    return(
        <Box flex={1} backgroundColor="white">
            <Box 
                flex={1} 
                borderBottomRightRadius="xl" 
                justifyContent="flex-end"
                alignItems="center"
                backgroundColor="gray">
                <Image source={picture.src} style={{
                    width: width - theme.borderRadii.xl,
                    height: ((width - theme.borderRadii.xl) * picture.height) / picture.width,
                }}/>
            </Box>
            <Box flex={1} borderTopLeftRadius="xl">
                <Box 
                    position="absolute"
                    top={0}
                    left={0}
                    bottom={0}
                    right={0}
                    backgroundColor="gray"></Box>
                <Box 
                    flex={1}
                    borderTopLeftRadius="xl"
                    padding="xl"
                    justifyContent="space-evenly"
                    alignItems="center"
                    backgroundColor="white">
                        <Text variant="title2">Let's get started</Text>
                        <Text variant="body" textAlign="center">
                            Login to your account below or sigup for an amazing experience
                        </Text>
                        <Button 
                            variant="primary" 
                            onPress={() => navigation.push('Login')}
                            label="Have an account? Login"/>
                        <Button 
                            onPress={() => {}}
                            label="Join us, it's free"/>
                        <Button 
                            variant="transparent"
                            onPress={() => {}}
                            label="Forgot password?"/>
                    </Box>
            </Box>
        </Box>
    )
}