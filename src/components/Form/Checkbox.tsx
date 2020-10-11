import React from 'react';
import { Box, Text } from '../Theme';
import { Feather as Icon } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';


interface CheckboxProps {
    label: string; 
    checked: boolean;
    onChange: () => void;
}

const Checkbox = ({ label, onChange, checked }: CheckboxProps) => {

    return(
        <RectButton 
            style={{ justifyContent: "center"}}
            onPress={onChange}>
            <Box flexDirection="row" alignItems="center">
                <Box 
                    marginRight="m"
                    height={20}
                    width={20}
                    justifyContent="center"
                    alignItems="center"
                    borderWidth={1}
                    borderColor="primary"
                    backgroundColor={ checked ? "primary" : "white"}
                    borderRadius="s">
                    <Icon name="check" color="white" />
                </Box>
                <Text variant="button">{label}</Text>
            </Box>
        </RectButton>
        
    )
}

export default Checkbox;