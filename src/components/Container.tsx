import React, { ReactNode } from "react";
import { Image, StyleSheet, Dimensions, StatusBar, Platform } from "react-native";
import { Box, makeStyles, Theme } from "./Theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Constants } from 'expo-constants';

const { width, height: wHeight } = Dimensions.get("window");
const aspectRatio = 190 / 376;
const height = width * aspectRatio;

const PATTERN = require("./assets/patterns/bg-pattern.png");

interface ContainerProps {
  children: ReactNode;
  footer: ReactNode;
}

const Container = ({ children, footer }: ContainerProps) => {
  const insets = useSafeAreaInsets();

  return (
    <KeyboardAwareScrollView scrollEnabled={false}>
      <Box height={wHeight + (Platform.OS === 'android'? Constants.statusBarHeight : 0) } backgroundColor="secondary">
        <Box backgroundColor="white">
          <Box
            overflow="hidden"
            height={height * 0.65}
            borderBottomLeftRadius="xl"
          >
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
            }}
          />
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
          <Box height={insets.bottom} />
        </Box>
      </Box>
    </KeyboardAwareScrollView>
  );
};

const styles = makeStyles((theme: Theme) => ({
  pattern: {
    width,
    height,
    borderBottomLeftRadius: theme.borderRadii.xl,
  },
}));

export default Container;
