import { useTheme } from '@/app/context/ThemeContext';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { PropsWithChildren } from 'react';
import { Modal, Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';

type Props = PropsWithChildren<{
    isVisible: boolean;
    onClose: () => void;
}>;

export default function GroupHistory({isVisible, onClose}: Props) {
    const { width, height } = useWindowDimensions();
    const { darkMode } = useTheme();

    const colors = {
        background: darkMode ? "#1c1c1c" : "#fff",
        card: darkMode ? "#2a2a2a" : "#fff",
        text: darkMode ? "#fff" : "#000",
        subtext: darkMode ? "#aaa" : "#647282",
        border: darkMode ? "#555" : "#ccc",
        borderHighlight: darkMode ? "#396FDC" : "#1B263B",
    };

    return (
        <View>
            <Modal animationType='slide' transparent={true} visible={isVisible}>
                <View style={[styles.modalContent, { height: height * 0.85, backgroundColor: colors.background }]}>
                    <View style={styles.titleContainer}>
                        <Text style={[styles.title, { color: colors.text }]}>Complete History</Text>
                        <Pressable onPress={onClose}>
                            <MaterialIcons name="close" color={colors.text} size={20}/>
                        </Pressable>
                    </View>

                    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
                        <View style={styles.dropdownContainer}>
                            {["All", "Deposits", "Withdrawals"].map((label, i) => (
                                <Pressable
                                    key={i}
                                    style={({ pressed }) => [
                                        styles.dateRangebtn,
                                        { minWidth: width * 0.28, borderColor: colors.border },
                                        pressed && { backgroundColor: colors.borderHighlight },
                                    ]}
                                    onPress={() => alert(label)}
                                >
                                    {({ pressed }) => (
                                        <Text style={[styles.btnText, { color: pressed ? '#fff' : colors.text }]}>{label}</Text>
                                    )}
                                </Pressable>
                            ))}
                        </View>

                        <View style={styles.dropdownContainer}>
                            {["Month", "Year"].map((label, i) => (
                                <Pressable
                                    key={i}
                                    style={({ pressed }) => [
                                        styles.dateRangebtn,
                                        { minWidth: width * 0.28, borderColor: colors.border },
                                        pressed && { backgroundColor: colors.borderHighlight },
                                    ]}
                                    onPress={() => alert(label)}
                                >
                                    {({ pressed }) => (
                                        <Text style={[styles.btnText, { color: pressed ? '#fff' : colors.text }]}>{label}</Text>
                                    )}
                                </Pressable>
                            ))}
                        </View>

                        <View style={styles.statsWrapper}>
                            <View style={[styles.statsContainer, { minWidth: width * 0.28, borderColor: colors.border, backgroundColor: colors.card }]}>
                                <Text style={{ fontSize: 14, color: colors.subtext }}>Total Deposit</Text>
                                <Text style={{ fontSize: 16, color: '#01BD81', fontWeight: 'bold' }}>P25,000.00</Text>
                            </View>
                            <View style={[styles.statsContainer, { minWidth: width * 0.28, borderColor: colors.border, backgroundColor: colors.card }]}>
                                <Text style={{ fontSize: 14, textAlign: 'center', color: colors.subtext }}>Total Withdrawals</Text>
                                <Text style={{ fontSize: 16, color: '#EF4444', fontWeight: 'bold' }}>P25,000.00</Text>
                            </View>
                            <View style={[styles.statsContainer, { minWidth: width * 0.28, borderColor: colors.border, backgroundColor: colors.card }]}>
                                <Text style={{ fontSize: 14, color: colors.subtext }}>Net Change</Text>
                                <Text style={{ fontSize: 15, color: '#2563EB', fontWeight: 'bold' }}>P25,000.00</Text>
                            </View>
                        </View>

                        {[1,2,3,4].map((_, i) => (
                            <View key={i} style={[styles.historyEntry, { borderColor: colors.border, backgroundColor: colors.card, borderLeftColor: colors.borderHighlight }]}>
                                <View style={{ width: 40, height: 40, backgroundColor: colors.subtext, borderRadius: 5, marginRight: 10 }} />
                                <View style={{ flex: 1 }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#01BD81' }}>+ P5,000.00</Text>
                                        <View style={[styles.badge, { borderColor: colors.border }]}>
                                            <Text style={{ fontSize: 10, textAlign: 'center', color: colors.text }}>Personal Fund</Text>
                                        </View>
                                    </View>
                                    <Text style={{ marginTop: 2, color: colors.subtext }}>Bonus from Work</Text>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Text style={{ fontSize: 10, color: colors.subtext }}>Sept 3, 2025</Text>
                                        <Text style={{ fontSize: 10, color: colors.subtext }}>Balance: P10,000.00</Text>
                                    </View>
                                </View>
                            </View>
                        ))}
                    </ScrollView>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    modalContent: {
        width: '100%',
        borderTopRightRadius: 18,
        borderTopLeftRadius: 18,
        position: 'absolute',
        bottom: 0,
    },
    titleContainer: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    container: {
        padding: 15,
        alignItems: 'center',
    },
    dropdownContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        justifyContent: 'center',
        marginBottom: 10,
    },
    dateRangebtn: {
        borderWidth: 1,
        borderRadius: 8,
        margin: 5,
        paddingVertical: 6,
        alignItems: 'center',
    },
    btnText: {
        fontWeight: 'bold',
    },
    statsWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        width: '100%',
        marginVertical: 10,
    },
    statsContainer: {
        borderWidth: 2,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        margin: 5,
        flex: 1,
    },
    historyEntry: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
        padding: 10,
        borderWidth: 2,
        borderRadius: 8,
        width: '100%',
        borderLeftWidth: 10,
    },
    badge: {
        borderRadius: 10,
        borderWidth: 2,
        paddingHorizontal: 6,
        paddingVertical: 2,
    }
});
