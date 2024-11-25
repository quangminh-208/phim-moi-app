import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import Movie from "../models/Movie";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "./ThemedText";
import { Collapsible } from "./Collapsible";

export function MovieList({ data: movies, title, isLoading }: { data: Array<Movie>; title: string; isLoading: boolean }) {
    return (
        <>
            <Collapsible title={title} isOpenTab={true}>
                <View style={styles.movieListWrapper}>
                    {/* <ThemedText style={styles.movieListTitle}>{title}</ThemedText> */}

                    <View style={styles.movieList}>
                        {movies &&
                            movies.map((movie) => (
                                <View style={styles.movieWrapper} key={movie.id}>
                                    <View style={styles.movie}>
                                        <View style={styles.image}>
                                            <Image source={{ uri: movie.image }} style={styles.thumnail} />
                                        </View>
                                        <View style={styles.titleWrapper}>
                                            <Text numberOfLines={1} ellipsizeMode="tail">
                                                {movie.title}
                                            </Text>
                                            <Text style={styles.subTitle} numberOfLines={1} ellipsizeMode="tail">
                                                {movie.enTitle}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            ))}
                    </View>
                </View>
            </Collapsible>
        </>
    );
}

const styles = StyleSheet.create({
    movieListWrapper: {},
    movieListTitle: {
        marginBottom: 20,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderColor: "#ccc",
        fontSize: 20,
        fontWeight: "bold",
    },
    movieList: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    movieWrapper: {
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
    },
    movie: {
        backgroundColor: "#eee",
        borderRadius: 10,
        overflow: "hidden",
    },
    image: {
        // height: 135,
        // width: 155,
        // marginBottom: 10,
        // overflow: "hidden",
    },
    thumnail: {
        height: 135,
        width: 160,
    },
    titleWrapper: {
        padding: 10,
        width: 155,
    },
    subTitle: {
        color: "#777",
        paddingTop: 5,
    },
});
