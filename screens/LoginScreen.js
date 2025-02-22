import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button,TouchableOpacity, Alert,StyleSheet } from "react-native";
import { auth, signInWithEmailAndPassword, signInWithPopup, googleProvider } from "../config/firebase";

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) navigation.replace("Home");
        });
        return unsubscribe;
    }, []);

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            Alert.alert("Error", error.message);
        }
    };

    const handleGoogleLogin = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (error) {
            Alert.alert("Error", error.message);
        }
    };

    return (
        /*<View>
            <Text style={{ fontSize: 20 }}>Login</Text>
            <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
            <TextInput placeholder="Password" value={password} secureTextEntry onChangeText={setPassword} />
            <Button title="Login" onPress={handleLogin} />
            <Button title="Sign in with Google" onPress={handleGoogleLogin} />
            <Button title="Signup" onPress={() => navigation.navigate("Signup")} />
        </View>*/
        <View style={styles.container}>
            {/* Logo */}
            <View style={styles.logo}>
                <Text style={styles.logoText}>NUT</Text>
                <Text style={[styles.logoText, styles.logoHighlight]}>SHELL</Text>
            </View>

            {/* Welcome Text */}
            <Text style={styles.welcomeText}>Welcome Back</Text>
            <Text style={styles.loginText}>Log In</Text>

            {/* Input Fields */}
            <TextInput
                style={styles.input}
                placeholder="Enter your email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Enter your password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            {/* Login Button */}
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.loginButtonText}>Log In</Text>
            </TouchableOpacity>

            {/* Forgot Password */}
            <TouchableOpacity>
                <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>

            {/* Don't have account */}
            <View style={styles.noAccountContainer}>
                <Text style={styles.noAccountText}>Don't have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                    <Text style={styles.signUpText}>Sign up</Text>
                </TouchableOpacity>
            </View>

            {/* Social Login */}
            <View style={styles.socialButtonsContainer}>
                <TouchableOpacity 
                    style={styles.socialButton}
                    onPress={handleGoogleLogin}
                >
                    <Text>Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton}>
                    <Text>facebook</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        padding: 20,
    },
    logo: {
        flexDirection: 'row',
        marginTop: 0,
        marginBottom: 100,
    },
    logoText: {
        fontSize: 40,
        fontWeight: "bold",
    },
    logoHighlight: {
        color: '#F1B695', // Peachy color for "SHELL" part
    },
    welcomeText: {
        fontSize: 16,
        color: '#666',
        marginBottom: 0,
    },
    loginText: {
        fontSize: 50,
        fontWeight: "bold",
        marginBottom: 30,
        color: "#000",
    },
    input: {
        width: "100%",
        height: 50,
        backgroundColor: "#FFFFFF",
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: "#F1B695",
        fontSize: 16,
    },
    loginButton: {
        width: "100%",
        height: 50,
        backgroundColor: "#F1B695", // Peachy color matching the logo
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
    },
    loginButtonText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "600",
    },
    forgotPassword: {
        color: '#666',
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 15,
    },
    socialButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 20,
    },
    socialButton: {
        width: '48%',
        height: 50,
        backgroundColor: '#F0F0F0',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    noAccountContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 15,
    },
    noAccountText: {
        color: '#666',
        fontSize: 14,
    },
    signUpText: {
        color: '#F4A460',
        fontSize: 14,
        fontWeight: '600',
        marginLeft: 5,
    }
});