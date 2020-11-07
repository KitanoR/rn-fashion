import React, { forwardRef } from 'react';
import { TextInput as RNTexInput, StyleSheet, TextInputProps as RNTexInputProps } from 'react-native';
import { Box, useTheme } from '../Theme';
import { Feather as Icon } from '@expo/vector-icons';


interface TextInputProps extends RNTexInputProps {
    icon: string;
    touched?: boolean;
    error?: string;
}

const TextInput = forwardRef<RNTexInput, TextInputProps>(
    ({ icon, touched, error, ...props }: TextInputProps, ref) => {
    const theme = useTheme();

    const SIZE = theme.borderRadii.m * 2.1;

    const reColor = !touched ? "text" : (error ? "danger"  : "primary");
    const color = theme.colors[reColor];

   
    return(
        <Box 
            height={48}
            borderRadius="s"
            borderWidth={StyleSheet.hairlineWidth}
            borderColor={reColor}
            flexDirection="row" 
            paddingHorizontal="s"
            alignItems="center">
            <Box padding="s">
                <Icon name={icon} size={16} {...{color}}/>
            </Box>
            <Box flex={1}>
                <RNTexInput 
                    underlineColorAndroid="transparent" 
                    {...{ref}}
                    {...props}
                    placeholderTextColor={color} />
            </Box>
            
            {
                (touched) && (
                    <Box 
                        justifyContent="center"
                        alignItems="center"
                        backgroundColor={(!error) ? "primary" : "danger"}
                        height={SIZE} 
                        width={SIZE} 
                        borderRadius="m"

                    >
                        <Icon 
                            size={14}
                            name={!error ? "check" : "x"} color="white" />
                    </Box>
                )
            }
        </Box>
    )
});

export default TextInput;