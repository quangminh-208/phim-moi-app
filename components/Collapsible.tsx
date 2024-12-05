import { PropsWithChildren, useState } from "react";
import { StyleSheet, TouchableOpacity, useColorScheme } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { Colors } from "@/constants/Colors";
import React from "react";

export function Collapsible({ children, title, isExpand = false }: PropsWithChildren & { title: string; isExpand: boolean }) {
    const [isOpen, setIsOpen] = useState(isExpand);
    const theme = useColorScheme() ?? "light";

    return (
        <ThemedView>
            <TouchableOpacity style={styles.heading} onPress={() => setIsOpen((value) => !value)} activeOpacity={0.8}>
                <IconSymbol
                    name="chevron.right"
                    size={20}
                    weight="medium"
                    color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
                    style={{ transform: [{ rotate: isOpen ? "90deg" : "0deg" }] }}
                />

                <ThemedText type="defaultSemiBold" style={styles.title}>
                    {title}
                </ThemedText>
            </TouchableOpacity>
            {isOpen && <ThemedView style={styles.content}>{children}</ThemedView>}
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    heading: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
        gap: 6,
    },
    title: {
        fontSize: 20,
    },
    content: {
        marginTop: 6,
    },
});
