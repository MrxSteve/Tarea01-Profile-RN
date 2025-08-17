import React, { JSX, useState } from 'react';
import { 
    StyleSheet, 
    Text, 
    SafeAreaView, 
    View, 
    Dimensions, 
    Image, 
    TouchableOpacity 
} from 'react-native';

const { width, height } = Dimensions.get('window');
console.log({ width, height });

export default function App(): JSX.Element {
    const img: string = 'https://avatars.githubusercontent.com/u/89896025?v=4';
    const email: string = 'steventobar38@gmail.com';
    let name: string = 'Steve Tobar';

    const [username, setUsername] = useState<string>(name);

    const onPress = (): void => {
        const newName: string = 'Geofrey Muñoz';
        setUsername(newName);
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.profileContainer}>
                <View style={styles.avatarContainer}>
                    <Image
                        source={{
                            uri: img,
                        }}
                        style={styles.avatar}
                    />
                </View>
                
                <View style={styles.nameContainer}>
                    <Text style={styles.nameText}>{username}</Text>
                </View>
                
                <View style={styles.emailContainer}>
                    <Text style={styles.emailText}>{email}</Text>
                </View>
                
                <View style={styles.buttonContainer}>
                    <TouchableOpacity 
                        style={styles.editButton}
                        onPress={onPress}
                    >
                        <Text style={styles.editButtonText}>Editar Perfil</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    profileContainer: {
        backgroundColor: '#ffffff',
        borderRadius: 20,
        padding: 40,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
        width: width * 0.85,
    },
    avatarContainer: {
        marginBottom: 20,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#e0e0e0',
    },
    nameContainer: {
        marginBottom: 8,
    },
    nameText: {
        fontSize: 24,
        fontWeight: '600',
        color: '#333333',
        textAlign: 'center',
    },
    emailContainer: {
        marginBottom: 30,
    },
    emailText: {
        fontSize: 16,
        color: '#666666',
        textAlign: 'center',
    },
    buttonContainer: {
        width: '100%',
    },
    editButton: {
        backgroundColor: '#4A90E2',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 15,
        width: '100%',
        alignItems: 'center',
    },
    editButtonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600',
    },
})
