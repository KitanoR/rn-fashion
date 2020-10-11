import { Component } from "react";

import React from 'react';
import { View } from 'react-native';
import { SocialLogin, Box, Text } from '../../components';
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

interface FooterProps {
    onPress: () => void;
    title: string;
    action: string
}


const Footer = ({ onPress, title, action }): FooterProps => {
    return (
        <>
                <SocialLogin />
                <Box alignItems="center" marginTop="m">
                    <TouchableWithoutFeedback variant="transparent"
                        onPress={onPress}>
                        <Text variant="button" color="white">
                            <Text 
                                variant="button" 
                                fontSize={12}
                                color="white"
                            >
                                {`${title} `}
                            </Text>
                            <Text 
                                marginLeft="s"
                                fontSize={12}
                                variant="button"
                                color="primary"
                            >
                                {action}
                            </Text>
                        </Text>
                    </TouchableWithoutFeedback>
                </Box>
            </>
    );
}

export default Footer;