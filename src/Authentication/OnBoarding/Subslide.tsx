import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from "../../components";
import { Text } from "../../components";
interface SubslideProps {
    description: string;
    subtitle: string;
    last?: boolean;
    onPress: () => void;
}

const Subslide = ({ subtitle, description, last, onPress } : SubslideProps) => {
    return(
        <View style={styles.container}>
            <Text variant="title2" style={styles.subtitle}>{subtitle}</Text>
            <Text variant="body" style={styles.description} >{description}</Text>
            <Button 
                {...{ onPress }}
                label={last ? "Let's get started" : "Next"} 
                variant={last ? "primary" : "default"} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 44,
        justifyContent: "center",
        alignItems: "center"
    },
    subtitle: {
        marginBottom: 12,
    },
    description: {
        color: "#0C0D34",
        textAlign: "center",
        marginBottom: 40,
    }
});
export default Subslide;