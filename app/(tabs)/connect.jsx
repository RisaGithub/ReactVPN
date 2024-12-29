import { View, Text, TextInput, StyleSheet, Image } from 'react-native';
import { Link } from 'expo-router';
import React from 'react';
import { LinearGradient } from "expo-linear-gradient";

const factor = 0.9

const connect = () => {
    const [moonTop, setMoonTop] = React.useState(-400)
    const [cloudsTop, setCloudsTop] = React.useState(400)
    const framerate = 1
    const speed = 0.2

    // Function to animate the moon
    function ShowMoon() {
        let moonInterval = setInterval(() => {
            setMoonTop(prevMoonTop => {
                if (prevMoonTop >= -90) {
                    clearInterval(moonInterval); // Stop the animation when the moon reaches its destination
                    return prevMoonTop;
                }
                return prevMoonTop + speed; // Move the moon upwards
            });
        }, framerate); // Adjust the speed by changing the interval time (10ms)
    }

    // Function to animate the clouds
    function ShowClouds() {
        let cloudsInterval = setInterval(() => {
            setCloudsTop(prevCloudsTop => {
                if (prevCloudsTop <= 200) {
                    clearInterval(cloudsInterval); // Stop the animation when the clouds reach their destination
                    return prevCloudsTop;
                }
                return prevCloudsTop - speed; // Move the clouds downwards
            });
        }, framerate); // Adjust the speed by changing the interval time (10ms)
    }
    ShowClouds()
    ShowMoon()

    return (
        <LinearGradient colors={['#0f0f34', '#03030f']} style={styles.linearGradient}>
            <View style={[styles.centeredView, { paddingVertical: 150 }]}>
                <View style={[styles.moonContainer, { right: 200, top: moonTop }]}>
                    <Image source={require("..\\assets\\images\\moon.gif")}
                        style={[{
                            opacity: 0.35,
                            height: 200 * factor,
                            width: 200 * factor,
                            resizeMode: "fit",
                        }]} />
                </View>
                <View style={[styles.centeredView]}></View>

                <View style={[styles.centeredView, styles.connectCircle]}>
                    <Text style={styles.text}>MAMAVPLUSE</Text>

                </View>

                <View style={[{ top: cloudsTop }]}>
                    <Image
                        source={require("..\\assets\\images\\clouds\\clouds_no_bg.gif")}
                        style={[{
                            height: 230 * factor,
                            resizeMode: "fit,"
                        }]} />
                </View>
            </View>
        </LinearGradient>
    )
}

export default connect

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 25,
        color: "#ba6bff",
        padding: 10,
        top: -190,

    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
    },
    moonContainer: {
        backgroundColor: '#ba6bff',
        borderRadius: 500,
        shadowColor: "#ba6bff",
        shadowOpacity: 0.8,
        shadowRadius: 50,
    },
    connectCircle: {
        shadowColor: "#ba6bff",
        shadowOpacity: 1,
        shadowRadius: 20,
        borderRadius: 1500,
        width: 290 * factor,
        height: 290 * factor,
        position: 'absolute',
        borderWidth: 2,
        borderColor: "#ba6bff",
    }
});
