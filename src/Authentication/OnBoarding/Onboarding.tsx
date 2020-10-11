import React, {  useRef } from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";
import {  interpolateColor, useScrollHandler } from 'react-native-redash';
import Slide, { SLIDE_HEIGHT } from "./Slide";
import Subslide from "./Subslide";
import Dot from "./Dot";
import Animated, { multiply, divide, interpolate, Extrapolate } from "react-native-reanimated";
import { StackNavigationProps, Routes } from "../../components/Navigation";
import { useTheme } from "../../components/Theme";

const { width } = Dimensions.get("window");

const imagen1 = require('../../../assets/1.png')
const imagen2 = require('../../../assets/2.png')
const imagen3 = require('../../../assets/3.png')
const imagen4 = require('../../../assets/4.png')

const slides = [
    {
        title: "Relaxed",
        subtitle: "Find Your Outfits", 
        description: "Confused about your outfit? don't worry! Find the best outfit here!", 
        color: "#BFEAF5",
        picture: {
            src: imagen1,
            width: 2513,
            height: 3583
        }
    },
    {
        title: "Playful",
        subtitle: "Hear it First, Wear it First", 
        description: "Hating the clothes in your wardrobe? Explore hundreds of outfit ideas", 
        color: "#BEECC4",
        picture: {
            src: imagen3,
            width: 2791,
            height: 3744
        }
    },
    {
        title: "Excentric",
        subtitle: "Your Style, You Way", 
        description: "Create your individual & unique style and look amazing every day", 
        color: "#FFE4D9",
        picture: {
            src: imagen4,
            width: 2738,
            height: 4000
        }
    },
    {
        title: "Funky",
        subtitle: "Look Good, Feel Good", 
        description: "Discover the latest trend in fashion and explore your presonality", 
        color: "#FFDDDD",
        picture: {
            src: imagen2,
            width: 1757,
            height: 2551
        }
    },
]

const OnBoarding = ({ navigation }: StackNavigationProps<Routes, "OnBoarding">) => {
    const theme = useTheme();
    const BORDER_RADIUS = theme.borderRadii.xl;

    const { scrollHandler, x } = useScrollHandler();

    const scroll = useRef<Animated.ScrollView>(null);
    // Todo: use scrollEvent

    const backgroundColor = interpolateColor( x , {
        inputRange: slides.map((_, i) => i * width),
        outputRange: slides.map( slide => slide.color)
    })

    
    return (
        <View style={styles.container}>
            <Animated.View style={[styles.slider, { backgroundColor }]}>
                {slides.map(({ picture }, index) => {
                    const opacity = interpolate(x, {
                        inputRange: [
                            (index - 0.5) * width,
                            index * width,
                            (index + 0.5) * width
                        ],
                        outputRange: [0, 1, 0],
                        extrapolate: Extrapolate.CLAMP
                    })
                    return(
                        <Animated.View 
                            key={`imagen=${index}`} 
                            style={[styles.underline, { opacity }]}>
                            <Image source={picture.src} style={{
                                width: width - BORDER_RADIUS,
                                height: ((width - BORDER_RADIUS) * picture.height) / picture.width,
                            }}/>
                        </Animated.View>
                    )
                })}
                <Animated.ScrollView 
                    ref={scroll}
                    horizontal 
                    snapToInterval={width} 
                    decelerationRate="fast" 
                    showsHorizontalScrollIndicator={false} 
                    bounces={false}
                    {...scrollHandler}
                >
                    {
                        slides.map(({ title, picture }, index) => (
                            <Slide key={index} right={!!(index % 2)} {...{title, picture}}/>
                        ))
                    }
                </Animated.ScrollView>
            </Animated.View>
            <View style={styles.footer}>
                <Animated.View style={{...StyleSheet.absoluteFillObject, backgroundColor}}>
                </Animated.View>
                <View style={styles.footerContainer}>
                        <View style={styles.pagination}>
                            {slides.map((_, index) => (
                                <Dot 
                                    key={index} 
                                    currentIndex={divide(x, width)}
                                    {...{index, x}}/>
                            ))}
                        </View>
                        <Animated.View style={{
                            flex: 1,
                            flexDirection: "row",
                            width: width * slides.length, 
                            transform: [{ translateX: multiply(x, -1)}]
                        }}>
                            {
                                slides.map(({ subtitle, description }, index) => {
                                    const last = index === slides.length - 1;
                                    return (
                                        <Subslide
                                        onPress={()=>{
                                            if(last){
                                                navigation.navigate("Welcome");
                                            }else {
                                                scroll.current?.getNode().scrollTo({ 
                                                    x: width * (index + 1), 
                                                    animated: true 
                                                })
                                            }
                                        }}
                                        key={index} 
                                        last={last} 
                                        {...{subtitle, description}}/>
                                    );
                                })
                            }
                        </Animated.View>
                </View>
            </View>
        </View>
    )
}

export default OnBoarding;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    footer: {
        flex: 1
    },
    slider: {
        height: SLIDE_HEIGHT,
        borderBottomRightRadius: 75
    },
    footerContainer: { 
        flex: 1, 
        backgroundColor: "white", 
        borderTopLeftRadius: 75
    },
    underline: {
        ...StyleSheet.absoluteFillObject,
        alignItems: "center",
        justifyContent: "flex-end",
        borderBottomRightRadius: 75,
        overflow: "hidden"
    },
    pagination: { 
        ...StyleSheet.absoluteFillObject,
        height: 75, 
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    }
})