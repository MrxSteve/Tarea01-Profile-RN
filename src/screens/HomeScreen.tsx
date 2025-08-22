import React, { useState } from 'react';
import {
    Dimensions,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

const { width } = Dimensions.get('window');

export default function HomeScreen({ navigation }: { navigation: any }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        navigation.navigate('Profile');
    };

    const handleGoogleLogin = () => {
        navigation.navigate('Profile');
    };

    const handleAppleLogin = () => {
        navigation.navigate('Profile');
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.loginContainer}>
                <Text style={styles.title}>Welcome Back</Text>
                
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Email</Text>
                    <TextInput
                        style={styles.textInput}
                        value={email}
                        onChangeText={setEmail}
                        placeholder=""
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Password</Text>
                    <TextInput
                        style={styles.textInput}
                        value={password}
                        onChangeText={setPassword}
                        placeholder=""
                        secureTextEntry
                    />
                </View>

                <View style={styles.optionsContainer}>
                    <View style={styles.rememberContainer}>
                        <View style={styles.checkbox} />
                        <Text style={styles.rememberText}>Remember me</Text>
                    </View>
                    <TouchableOpacity>
                        <Text style={styles.forgotText}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                    <Text style={styles.loginButtonText}>Log In</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.googleButton} onPress={handleGoogleLogin}>
                    <Text style={styles.googleButtonText}>G</Text>
                    <Text style={styles.googleButtonTextLabel}>Log in with Google</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.appleButton} onPress={handleAppleLogin}>
                    <Text style={styles.appleButtonText}>🍎</Text>
                    <Text style={styles.appleButtonTextLabel}>Log in with Apple</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    loginContainer: {
        backgroundColor: '#ffffff',
        borderRadius: 20,
        padding: 30,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
        width: '100%',
        maxWidth: 400,
        alignSelf: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        color: '#333333',
        textAlign: 'center',
        marginBottom: 30,
    },
    inputContainer: {
        marginBottom: 20,
    },
    inputLabel: {
        fontSize: 14,
        color: '#666666',
        marginBottom: 8,
        fontWeight: '500',
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e0e0e0',
        borderRadius: 8,
        paddingHorizontal: 15,
        paddingVertical: 12,
        fontSize: 16,
        backgroundColor: '#fafafa',
    },
    optionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 25,
    },
    rememberContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox: {
        width: 16,
        height: 16,
        borderWidth: 1,
        borderColor: '#d0d0d0',
        borderRadius: 3,
        marginRight: 8,
        backgroundColor: '#ffffff',
    },
    rememberText: {
        fontSize: 14,
        color: '#666666',
    },
    forgotText: {
        fontSize: 14,
        color: '#4A90E2',
        fontWeight: '500',
    },
    loginButton: {
        backgroundColor: '#4A90E2',
        borderRadius: 8,
        paddingVertical: 15,
        alignItems: 'center',
        marginBottom: 15,
    },
    loginButtonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600',
    },
    googleButton: {
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#e0e0e0',
        borderRadius: 8,
        paddingVertical: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    googleButtonText: {
        fontSize: 18,
        marginRight: 10,
        fontWeight: 'bold',
        color: '#4285f4',
    },
    googleButtonTextLabel: {
        fontSize: 16,
        color: '#333333',
        fontWeight: '500',
    },
    appleButton: {
        backgroundColor: '#000000',
        borderRadius: 8,
        paddingVertical: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    appleButtonText: {
        fontSize: 18,
        marginRight: 10,
    },
    appleButtonTextLabel: {
        fontSize: 16,
        color: '#ffffff',
        fontWeight: '500',
    },
})