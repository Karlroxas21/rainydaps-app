import { useTheme } from '@/app/context/ThemeContext';
import NewGroup from '@/components/newgroup';
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Groups() {
    const { darkMode } = useTheme();

    const colors = {
        background: darkMode ? "#0D1B2A" : "#fff",
        card: darkMode ? "#2a2a2a" : "#fff",
        text: darkMode ? "#fff" : "#000",
        subtext: darkMode ? "#aaa" : "#647282",
        border: darkMode ? "#555" : "#ccc",
        borderHighlight: darkMode ? "#396FDC" : "#1B263B",
    };

    const [isAddVisible, setAddVisible] = useState<boolean>(false);

    return (
        <>
            <View style={[styles.container, { backgroundColor: colors.background }]}>
                <ScrollView 
                    style={{ flex: 1, width: "100%" }}
                    contentContainerStyle={{ paddingBottom: 40 }}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={[styles.groupContainer]}>
                        {/* Group 1 */}
                        <View style={[styles.group, { backgroundColor: colors.card, borderColor: colors.border }]}>
                            <View>
                                <Text style={{ fontWeight: 'bold', fontSize: 20, color: colors.text }}>Family Savers</Text>
                                <Text style={{ fontSize: 15, color: colors.subtext }}>5 Members</Text>
                            </View>
                            <View style={{ alignItems: 'flex-end' }}>
                                <MaterialIcons name="exit-to-app" color={'#EF4444'} size={18} style={{ marginBottom: 15 }} />
                                <Text style={{ color: colors.text }}>Goal: P20,000.00</Text>
                            </View>
                        </View>

                        {/* Group 2 */}
                        <View style={[styles.group, { backgroundColor: colors.card, borderColor: colors.border }]}>
                            <View>
                                <Text style={{ fontWeight: 'bold', fontSize: 20, color: colors.text }}>Travel Buddies</Text>
                                <Text style={{ fontSize: 15, color: colors.subtext }}>8 Members</Text>
                            </View>
                            <View style={{ alignItems: 'flex-end' }}>
                                <MaterialIcons name="exit-to-app" color={'#EF4444'} size={18} style={{ marginBottom: 15 }} />
                                <Text style={{ color: colors.text }}>Goal: P50,000.00</Text>
                            </View>
                        </View>

                        {/* Group 3 */}
                        <View style={[styles.group, { backgroundColor: colors.card, borderColor: colors.border }]}>
                            <View>
                                <Text style={{ fontWeight: 'bold', fontSize: 20, color: colors.text }}>Office Pool</Text>
                                <Text style={{ fontSize: 15, color: colors.subtext }}>12 Members</Text>
                            </View>
                            <View style={{ alignItems: 'flex-end' }}>
                                <MaterialIcons name="exit-to-app" color={'#EF4444'} size={18} style={{ marginBottom: 15 }} />
                                <Text style={{ color: colors.text }}>Goal: P100,000.00</Text>
                            </View>
                        </View>

                        {/* Footer group (Pressable) */}
                        <Pressable 
                            style={({ pressed }) => [
                                styles.footerGroup, 
                                { backgroundColor: colors.card, borderColor: colors.border },
                                pressed && { backgroundColor: colors.borderHighlight }
                            ]}
                            onPress={() => setAddVisible(true)}
                        >
                            <Text style={{ fontSize: 14, color: colors.text, textAlign: 'center' }}>
                                + Create New Group
                            </Text>
                        </Pressable>
                    </View>
                </ScrollView>
            </View>

            {/* Modal */}
            <NewGroup isVisible={isAddVisible} onClose={() => setAddVisible(false)}/>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        padding: 20,
    },
    groupContainer: {
        width: '100%',
        borderRadius: 8
    },
    group: {
        flexDirection: 'row',
        borderRadius: 8,
        borderWidth: 1,
        padding: 15,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15
    },
    footerGroup: {
        borderRadius: 8,
        borderWidth: 1,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
    }
});
