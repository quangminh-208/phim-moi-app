import { StyleSheet, Image, Platform } from "react-native";
import React from "react";
import { useState, useCallback, useEffect } from "react";
import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { MovieList } from "@/components/MovieList";
import { getMovies } from "@/services/movieService";

export default function Explore() {
    const [movies, setMovies] = useState({
        topSingleMovies: [],
        topAnimeMovies: [],
        topSeriesMovies: [],
    });

    const [isLoading, setIsLoading] = useState(true);

    const fetchData = useCallback(async () => {
        try {
            const [topSingleMoviesData, topAnimeMoviesData, topSeriesMoviesData] = await Promise.all([
                getMovies({ limit: 6, order: "view:desc", "filters[type]": "single" }),
                getMovies({ limit: 6, order: "view:desc", "filters[type]": "hoathinh" }),
                getMovies({ limit: 6, order: "view:desc", "filters[type]": "series" }),
            ]);

            setMovies({
                topSingleMovies: topSingleMoviesData,
                topAnimeMovies: topAnimeMoviesData,
                topSeriesMovies: topSeriesMoviesData,
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
            headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
            headerImage={<IconSymbol size={310} color="#808080" name="chevron.left.forwardslash.chevron.right" style={styles.headerImage} />}
        >
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">Khám phá</ThemedText>
            </ThemedView>

            <MovieList data={movies.topSingleMovies} title="Top phim lẻ" isLoading={isLoading} />
            <MovieList data={movies.topAnimeMovies} title="Top phim hoạt hình" isLoading={isLoading} />
            <MovieList data={movies.topSeriesMovies} title="Top phim bộ" isLoading={isLoading} />

        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    headerImage: {
        color: "#808080",
        bottom: -90,
        left: -35,
        position: "absolute",
    },
    titleContainer: {
        flexDirection: "row",
        gap: 8,
    },
});
