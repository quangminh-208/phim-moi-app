import { StyleSheet, Image, Platform } from "react-native";
import React from "react";
import { useState, useCallback, useEffect } from "react";
import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";

export default function SavedScreen() {
    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
            headerImage={<IconSymbol size={310} color="#808080" name="chevron.left.forwardslash.chevron.right" style={styles.headerImage} />}
        >
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">Khám phá</ThemedText>
            </ThemedView>
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
