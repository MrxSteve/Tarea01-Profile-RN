import React, { useState } from 'react';
import {
    Dimensions,
    FlatList,
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

interface PlayList {
    id: string;
    name: string;
    artist: string;
    songs: number;
    image: string;
}

const { width } = Dimensions.get('window');

export default function ProfileScreen({ navigation }: { navigation: any }) {
    let userName = 'MrxSteve';
    let changedName = 'Geofrey Tobar';
    const [myName, setMyName] = useState(userName);
    const imageUrl = 'https://avatars.githubusercontent.com/u/89896025?v=4';

    const following = 15;
    const followers = 10;

    const myPlayList: PlayList[] = [
        {
            id: '1',
            name: "Rock Classics",
            artist: "Various Artists",
            songs: 25,
            image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop"
        },
        {
            id: '2',
            name: "Chill Vibes",
            artist: "Lo-Fi Collection",
            songs: 18,
            image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop"
        },
        {
            id: '3',
            name: "Electronic Beats",
            artist: "EDM Mix",
            songs: 32,
            image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop"
        },
        {
            id: '4',
            name: "Acoustic Sessions",
            artist: "Indie Folk",
            songs: 15,
            image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop"
        },
        {
            id: '5',
            name: "Hip Hop Essentials",
            artist: "Urban Hits",
            songs: 28,
            image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop"
        }
    ];

    const onPress = () => {
        if (myName === userName) {
            setMyName(changedName);
        } else {
            setMyName(userName);
        }
    };

    const goToPlayListDetail = (playlist: PlayList) => {
        navigation.navigate('PlayListDetail', { playlist });
    };

    const renderPlayListItem = ({ item }: { item: PlayList }) => (
        <TouchableOpacity 
            style={styles.playlistItem}
            onPress={() => goToPlayListDetail(item)}
        >
            <Image source={{ uri: item.image }} style={styles.playlistImage} />
            <View style={styles.playlistInfo}>
                <Text style={styles.playlistTitle}>{item.name}</Text>
                <Text style={styles.playlistArtist}>{item.artist}</Text>
                <Text style={styles.playlistSongs}>{item.songs} canciones</Text>
            </View>
            <Text style={styles.playlistArrow}>›</Text>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            
            <View style={styles.principal}>
                <View style={styles.profileContainer}>
                    <Image 
                        source={{uri: imageUrl}}
                        style={styles.avatar}    
                    />
                    <View style={styles.userInfoContainer}>
                        <Text style={styles.userName}>{myName}</Text>
                        <View style={styles.statsContainer}>
                            <View style={styles.statItem}>
                                <Text style={styles.statNumber}>{followers}</Text>
                                <Text style={styles.statLabel}>Seguidores</Text>
                            </View>
                            <View style={styles.statDivider} />
                            <View style={styles.statItem}>
                                <Text style={styles.statNumber}>{following}</Text>
                                <Text style={styles.statLabel}>Siguiendo</Text>
                            </View>
                        </View>
                    </View>
                </View>
                
                <TouchableOpacity
                    style={styles.editButton}
                    onPress={onPress}
                >
                    <Text style={styles.editButtonText}>Editar Perfil</Text>
                </TouchableOpacity>
            </View>      
            
            <View style={styles.favoritesSection}>
                <Text style={styles.favoritesTitle}>My PlayLists</Text>
            </View>

            <View style={styles.playlistContainer}>
                <FlatList
                    data={myPlayList}
                    renderItem={renderPlayListItem}
                    keyExtractor={(item) => item.id.toString()}
                    contentContainerStyle={styles.playlistList}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    principal: {
        backgroundColor: '#6c8ae6',
        marginTop: 15,
        width: width * 0.9,
        padding: 20,
        borderRadius: 20,
        shadowOpacity: 0.3,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        elevation: 8,
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    userInfoContainer: {
        flex: 1,
        marginLeft: 15,
    },
    statsContainer: {
        flexDirection: 'row',
        marginTop: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    statItem: {
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    statNumber: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    statLabel: {
        fontSize: 14,
        color: '#e0e0e0',
    },
    statDivider: {
        height: 24,
        width: 1,
        backgroundColor: '#fff',
        opacity: 0.5,
    },
    avatar: {
        height: 90, 
        width: 90, 
        borderRadius: 45,
        borderWidth: 3,
        borderColor: '#fff',
    },
    userName: {
        fontSize: 22, 
        color: '#fff',
        fontWeight: '700',
        marginBottom: 5,
        textAlign: 'center',
    },
    editButton: {
        backgroundColor: '#fff', 
        marginTop: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignSelf: 'center', 
        borderRadius: 25, 
        justifyContent: 'center',
    },
    editButtonText: {
        fontSize: 16, 
        fontWeight: '600',
        textAlign: 'center', 
        color: '#6c8ae6',
    },
    favoritesSection: {
        width: width * 0.9,
        marginTop: 25,
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 15,
        shadowOpacity: 0.1,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        elevation: 3,
        alignItems: 'center',
    },
    favoritesTitle: {
        fontSize: 20, 
        fontWeight: '600',
        color: '#333',
        marginBottom: 10,
    },
    playlistContainer: {
        width: width * 0.9,
        marginTop: 10,
        flex: 1,
    },
    playlistList: {
        paddingBottom: 20,
    },
    playlistItem: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginVertical: 5,
        borderRadius: 12,
        padding: 15,
        alignItems: 'center',
        shadowOpacity: 0.1,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        elevation: 3,
    },
    playlistImage: {
        width: 60,
        height: 60,
        borderRadius: 8,
        marginRight: 15,
    },
    playlistInfo: {
        flex: 1,
    },
    playlistTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
        marginBottom: 4,
    },
    playlistArtist: {
        fontSize: 14,
        color: '#666',
        marginBottom: 2,
    },
    playlistSongs: {
        fontSize: 12,
        color: '#999',
    },
    playlistArrow: {
        fontSize: 24,
        color: '#6c8ae6',
        fontWeight: 'bold',
    }
})