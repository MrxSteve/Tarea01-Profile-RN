import React from 'react';
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

interface Song {
    id: string;
    title: string;
    artist: string;
    duration: string;
}

interface PlayList {
    id: string;
    name: string;
    artist: string;
    songs: number;
    image: string;
}

const { width } = Dimensions.get('window');

export default function PlayListDetailScreen({ route, navigation }: { route: any; navigation: any }) {
    const { playlist }: { playlist: PlayList } = route.params;

    const songs: Song[] = [
        {
            id: '1',
            title: "Bohemian Rhapsody",
            artist: "Queen",
            duration: "5:55"
        },
        {
            id: '2',
            title: "Hotel California", 
            artist: "Eagles",
            duration: "6:30"
        },
        {
            id: '3',
            title: "Stairway to Heaven",
            artist: "Led Zeppelin", 
            duration: "8:02"
        },
        {
            id: '4',
            title: "Sweet Child O' Mine",
            artist: "Guns N' Roses",
            duration: "5:03"
        },
        {
            id: '5',
            title: "November Rain",
            artist: "Guns N' Roses",
            duration: "8:57"
        },
        {
            id: '6',
            title: "Don't Stop Believin'",
            artist: "Journey",
            duration: "4:09"
        },
        {
            id: '7',
            title: "We Will Rock You",
            artist: "Queen",
            duration: "2:02"
        },
        {
            id: '8',
            title: "Back in Black",
            artist: "AC/DC",
            duration: "4:15"
        }
    ];

    const renderSongItem = ({ item, index }: { item: Song; index: number }) => (
        <TouchableOpacity style={styles.songItem}>
            <View style={styles.songNumber}>
                <Text style={styles.songNumberText}>{index + 1}</Text>
            </View>
            <View style={styles.songInfo}>
                <Text style={styles.songTitle}>{item.title}</Text>
                <Text style={styles.songArtist}>{item.artist}</Text>
            </View>
            <Text style={styles.songDuration}>{item.duration}</Text>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.playlistHeader}>
                    <Image source={{ uri: playlist.image }} style={styles.playlistHeaderImage} />
                    <View style={styles.playlistHeaderInfo}>
                        <Text style={styles.playlistHeaderTitle}>{playlist.name}</Text>
                        <Text style={styles.playlistHeaderArtist}>{playlist.artist}</Text>
                        <Text style={styles.playlistHeaderSongs}>{playlist.songs} canciones</Text>
                    </View>
                </View>
            </View>

            {/* Lista de canciones */}
            <View style={styles.songsSection}>
                <Text style={styles.sectionTitle}>Canciones</Text>
                <FlatList
                    data={songs}
                    renderItem={renderSongItem}
                    keyExtractor={(item) => item.id.toString()}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.songsList}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        backgroundColor: '#6c8ae6',
        paddingBottom: 20,
    },
    backButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    playlistHeader: {
        flexDirection: 'row',
        padding: 20,
        paddingTop: 20,
        alignItems: 'center',
    },
    playlistHeaderImage: {
        width: 100,
        height: 100,
        borderRadius: 15,
        marginRight: 20,
    },
    playlistHeaderInfo: {
        flex: 1,
    },
    playlistHeaderTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 5,
    },
    playlistHeaderArtist: {
        fontSize: 16,
        color: '#e0e0e0',
        marginBottom: 5,
    },
    playlistHeaderSongs: {
        fontSize: 14,
        color: '#e0e0e0',
    },
    songsSection: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        marginTop: -20,
        paddingTop: 25,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: '#333',
        marginBottom: 15,
    },
    songsList: {
        paddingBottom: 20,
    },
    songItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 10,
        marginVertical: 2,
        borderRadius: 8,
        backgroundColor: '#f9f9f9',
    },
    songNumber: {
        width: 30,
        alignItems: 'center',
        marginRight: 15,
    },
    songNumberText: {
        fontSize: 16,
        color: '#6c8ae6',
        fontWeight: '600',
    },
    songInfo: {
        flex: 1,
    },
    songTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
        marginBottom: 2,
    },
    songArtist: {
        fontSize: 14,
        color: '#666',
    },
    songDuration: {
        fontSize: 14,
        color: '#999',
        fontWeight: '500',
    },
})