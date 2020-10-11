import React, { ReactNode } from 'react';
import { Image, StyleSheet, Dimensions, StatusBar } from 'react-native';
import { Box, makeStyles, Theme } from './Theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { width } = Dimensions.get("window");
const aspectRatio = 190 / 376;
const height = width * aspectRatio;

const PATTERN = require('./assets/patterns/bg-pattern.png');

interface ContainerProps {
    children: ReactNode;
    footer: ReactNode
}

const Container = ({ children, footer }: ContainerProps) => {
    const insets = useSafeAreaInsets();

    return(
        <Box flex={1} backgroundColor="secondary">
            <StatusBar barStyle="light-content" />
            <Box backgroundColor="white">
                <Box 
                    overflow="hidden"
                    height={height * 0.61}
                    borderBottomLeftRadius="xl">
                    <Image source={PATTERN} style={styles.pattern} />
                </Box>
            </Box>
            <Box flex={1} overflow="hidden">
                    <Image 
                        source={PATTERN} 
                        style={{
                            ...StyleSheet.absoluteFillObject,
                            width,
                            height,
                            top: -height * 0.61,
                    }} />
                    <Box
                        flex={1}
                        backgroundColor="white"
                        borderRadius="xl"
                        borderTopLeftRadius={0}
                    >
                        {children}
                    </Box>
            </Box>
            <Box backgroundColor="secondary" paddingTop="m">
                {footer}
                <Box height={insets.bottom}/>
            </Box>
        </Box>
    )
}

const styles = makeStyles((theme: Theme) => ({
    pattern: {
        width,
        height,
        borderBottomLeftRadius: theme.borderRadii.xl,
    }

}));



export default Container;