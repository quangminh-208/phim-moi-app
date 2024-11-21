import { Image, StyleSheet, Platform } from "react-native";
import { useState, useCallback, useEffect } from "react";
import React from "react";
import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { MovieList } from "@/components/MovieList";
import { getMovies } from "@/services/movieService";

export default function HomeScreen() {
    const [movies, setMovies] = useState({
        singleMovies: [],
        animeMovies: [],
        seriesMovies: []
    });
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = useCallback(async () => {
        try {
            const [singleMoviesData, animeMoviesData, seriesMoviesData] = await Promise.all([
                getMovies({ limit: 12, order: "modified:desc", "filters[type]": "single", "filters[year]": "2024" }),
                getMovies({ limit: 12, order: "modified:desc", "filters[type]": "hoathinh", "filters[year]": "2024" }),
                getMovies({ limit: 12, order: "modified:desc", "filters[type]": "series", "filters[year]": "2024" }),
            ]);
            
            setMovies({
                singleMovies: singleMoviesData,
                animeMovies: animeMoviesData,
                seriesMovies: seriesMoviesData
            });
        } catch (error) {
            console.error("Error fetching movies:", error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
            headerImage={<Image source={require("@/assets/images/partial-react-logo.png")} style={styles.reactLogo} />}
        >
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">Phimmoi xin chào!</ThemedText>
                <HelloWave />
            </ThemedView>
            <MovieList data={movies.singleMovies} title="Phim lẻ" isLoading />
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
    reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: "absolute",
    },
});
